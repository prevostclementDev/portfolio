<script lang="ts" setup>
interface GoogleReviewsResponse {
  rating: number
  userRatingCount: number
  googleMapsUri: string
}

const config = useRuntimeConfig()
const googleReviews = ref<GoogleReviewsResponse | null>(null)
const isLoading = ref(true)
const errorMessage = ref('')

const formattedRating = computed(() =>
  googleReviews.value?.rating.toLocaleString('fr-FR', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
  })
)
const formattedReviewCount = computed(() =>
  googleReviews.value
    ? new Intl.NumberFormat('fr-FR').format(googleReviews.value.userRatingCount)
    : ''
)

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function parseGoogleReviewsResponse(value: unknown): GoogleReviewsResponse {
  if (!isRecord(value)) {
    throw new Error('Invalid Google reviews response.')
  }

  if (
    typeof value.rating !== 'number' ||
    value.rating < 0 ||
    value.rating > 5 ||
    typeof value.userRatingCount !== 'number' ||
    !Number.isInteger(value.userRatingCount) ||
    value.userRatingCount < 0 ||
    typeof value.googleMapsUri !== 'string'
  ) {
    throw new Error('Invalid Google reviews response.')
  }

  const mapsUrl = new URL(value.googleMapsUri)
  if (mapsUrl.protocol !== 'https:') {
    throw new Error('Invalid Google Maps URL.')
  }

  return {
    rating: value.rating,
    userRatingCount: value.userRatingCount,
    googleMapsUri: mapsUrl.toString()
  }
}

onMounted(async () => {
  const endpoint = config.public.googleReviewsEndpoint
  if (!endpoint) {
    errorMessage.value = 'L’endpoint des avis Google n’est pas configuré.'
    isLoading.value = false
    return
  }

  try {
    const response = await fetch(endpoint, {
      headers: { Accept: 'application/json' }
    })

    if (!response.ok) {
      throw new Error(`Google reviews endpoint returned HTTP ${response.status}.`)
    }

    googleReviews.value = parseGoogleReviewsResponse(await response.json())
  } catch (error) {
    console.error('[google-reviews] Failed to load Google reviews.', error)
    errorMessage.value = 'Les avis Google sont momentanément indisponibles.'
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div id="satisfactionGoogleCopy">
    <div class="pageLayoutPadding">
      <div class="content img">
        <div v-if="googleReviews" class="f-spaceGrotesk-400 fs-h2 c-primary">
          {{ formattedRating }}<span class="fs-paragraph c-fadePrimary">/5</span>
        </div>
        <div v-else class="f-spaceGrotesk-400 fs-h2 c-primary">Google</div>

        <div class="subContentImg">
          <NuxtImg src="images/google.png" alt="Google" />
          <a
            v-if="googleReviews"
            :href="googleReviews.googleMapsUri"
            class="c-fadePrimary fs-small f-inter-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ formattedReviewCount }} avis clients sur Google
          </a>
          <span v-else-if="isLoading" class="c-fadePrimary fs-small f-inter-300" role="status">
            Chargement de la note Google…
          </span>
          <span v-else class="c-fadePrimary fs-small f-inter-300" role="status">
            {{ errorMessage }}
          </span>
        </div>
      </div>

      <div class="content text">
        <p class="c-primary fs-paragraph f-spaceGrotesk-400">Un seul interlocuteur.</p>
        <span class="c-fadePrimary fs-subtitle f-inter-300">Du design à la production, je vous accompagne sur l’ensemble de votre projet.</span>
      </div>

      <div class="content text">
        <p class="c-primary fs-paragraph f-spaceGrotesk-400">Un premier pas, gratuit.</p>
        <span class="c-fadePrimary fs-subtitle f-inter-300">Un rendez-vous de 30 minutes maximum pour faire le point, en présentiel, en visio ou par téléphone.</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/styles/portable.scss';

#satisfactionGoogleCopy {
  border-top: 1px solid map-get($map: $colors, $key: 'gray');
  border-bottom: 1px solid map-get($map: $colors, $key: 'gray');
  padding: 48px 0;

  .pageLayoutPadding {
    @include flex(12px, space-between);

    .content {
      width: 20%;

      &.img {
        .subContentImg {
          @include flex(4px, flex-start, center, row, nowrap);

          img {
            width: 20px;
            height: 20px;
          }

          a {
            text-decoration: none;
          }
        }
      }

      &.text {
        p {
          margin-bottom: 8px;
        }
      }
    }
  }
}
</style>
