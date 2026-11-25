<script lang="ts" setup>
interface ContactForm {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  website: string
}

const form = reactive<ContactForm>({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  website: ''
})

const isSubmitting = ref(false)
const isSubmissionError = ref(false)
const submissionMessage = ref('')
const runtimeConfig = useRuntimeConfig()

async function submitForm() {
  if (isSubmitting.value) return

  isSubmitting.value = true
  isSubmissionError.value = false
  submissionMessage.value = ''
  let responseStatus: number | undefined

  try {
    const endpoint = runtimeConfig.public.contactFormEndpoint
    if (!endpoint) throw new Error('Contact form endpoint is not configured.')

    const body = new URLSearchParams()
    Object.entries(form).forEach(([field, value]) => body.append(field, value))

    const response = await fetch(endpoint, {
      method: 'POST',
      body
    })
    responseStatus = response.status

    if (!response.ok) {
      throw new Error(`Contact form endpoint returned HTTP ${response.status}.`)
    }

    Object.assign(form, { name: '', email: '', phone: '', subject: '', message: '', website: '' })
    submissionMessage.value = 'Merci, votre message a bien été envoyé.'
  } catch (error) {
    console.error('[contact] Form submission failed.', error)
    isSubmissionError.value = true
    submissionMessage.value = responseStatus === 400
      ? 'Vérifiez les informations saisies puis réessayez.'
      : 'L’envoi a échoué. Réessayez ou contactez-moi directement par e-mail.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div id="contactForm">
    <CoreTextH3 color="primary">Prendre rendez-vous</CoreTextH3>
    <form @submit.prevent="submitForm">
      <div class="websiteField" aria-hidden="true">
        <label for="contact-website">Site web</label>
        <input id="contact-website" v-model="form.website" name="website" tabindex="-1" autocomplete="off">
      </div>

      <div class="lines">
        <label for="contact-name">
          <CoreTextSubtitle color="primary">Nom complet :</CoreTextSubtitle>
          <input id="contact-name" v-model="form.name" name="name" type="text" autocomplete="name" placeholder="Votre nom" maxlength="120" required>
        </label>
        <label for="contact-email">
          <CoreTextSubtitle color="primary">Email :</CoreTextSubtitle>
          <input id="contact-email" v-model="form.email" name="email" type="email" autocomplete="email" placeholder="vous@exemple.fr" maxlength="254" required>
        </label>
      </div>

      <div class="lines">
        <label for="contact-phone">
          <CoreTextSubtitle color="primary">Numéro de téléphone :</CoreTextSubtitle>
          <input id="contact-phone" v-model="form.phone" name="phone" type="tel" autocomplete="tel" placeholder="+33 6 00 00 00 00" maxlength="40">
        </label>
        <label for="contact-subject">
          <CoreTextSubtitle color="primary">Sujet :</CoreTextSubtitle>
          <input id="contact-subject" v-model="form.subject" name="subject" type="text" placeholder="Votre projet" maxlength="120" required>
        </label>
      </div>

      <label for="contact-message">
        <CoreTextSubtitle color="primary">Message :</CoreTextSubtitle>
        <textarea id="contact-message" v-model="form.message" name="message" placeholder="Votre message..." maxlength="5000" required></textarea>
      </label>

      <div class="submitContainer">
        <CoreButton
          :text="isSubmitting ? 'Envoi en cours…' : 'Envoyer mon message'"
          :style="'primary'"
          icon="arrowStrait"
          type="submit"
          :disabled="isSubmitting"
        />
      </div>

      <p
        v-if="submissionMessage"
        class="submissionMessage"
        :class="{ 'is-error': isSubmissionError }"
        :role="isSubmissionError ? 'alert' : 'status'"
      >
        {{ submissionMessage }}
      </p>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/styles/portable.scss';

#contactForm {
  padding: 14px 0 0 0;
  width: 60%;

  @media screen and (max-width : 1060px) {
    width: 50%;
    @media screen and (max-width : 900px) {
      width: 100%;
      
    }

  }
  
  form {
    margin-top: 20px;
    width: 100%;

    .websiteField {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip-path: inset(50%);
      white-space: nowrap;
    }

    .lines {
      @include flex(44px, space-between, flex-start,row,nowrap);
      width: 100%;
      margin: 14px 0;

      @media screen and (max-width : 1060px) {
        gap: 12px;

      }

    }

    label {
      width: 100%;
      @include flex(8px, flex-start, flex-start,column,nowrap);
      position: relative;

      input, textarea {
        padding: 16px 12px;
        width: 100%;
        outline: none;
        border: none;
        background-color: map-get($map: $colors, $key: 'fadePrimaryThird');

      }

      textarea {
        height: 200px;

      }

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 1px;
        width: 100%;
        background-color: map-get($map: $colors, $key: 'primary');
        transform: scaleX(0);
        transform-origin: left center;
        transition: transform 0.25s ease;
      }

      &:hover::after,
      &:focus-within::after,
      &:has(input:not(:placeholder-shown))::after,
      &:has(textarea:not(:placeholder-shown))::after {
        transform: scaleX(1);
      }

    }

    .submitContainer {
      margin-top: 16px;
      @include flex(12px, flex-end);

    }

    .submissionMessage {
      margin-top: 16px;
      color: map-get($map: $colors, $key: 'primary');

      &.is-error {
        color: #a52a2a;
      }
    }

  }

}

@media (prefers-reduced-motion: reduce) {
  #contactForm form label::after {
    transition: none;
  }
}
</style>