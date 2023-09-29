<template>

  <section id="menu">

      <section class="base-link">

        <div class="title" id="titlemenu">MENU</div>

        <div class="container-link">

          <nuxt-link to="/" class="link onLink linkCloseNav">ACCUEIL</nuxt-link>
          <nuxt-link to="/contact" class="link onLink">CONTACT</nuxt-link>
          <button id="navigationClose" class="close link onLink">FERMER</button>

        </div>

      </section>

      <section class="global-link-container">

        <ul>

          <li>
            <nuxt-link to="/photographie" class="link onLink"><span><span>PHOTOGRAPHIE</span></span></nuxt-link>
            <div class="line"></div>
          </li>
          <li>
            <nuxt-link to="/developpementweb" class="link onLink"><span><span>DEVELOPPEMENT WEB</span></span></nuxt-link>
            <div class="line"></div>
          </li>
          <li>
            <nuxt-link to="/webdesign" class="link onLink"><span><span>WEB DESIGN</span></span></nuxt-link>
            <div class="line"></div>
          </li>

        </ul>

      </section>

      <section class="social-media-container">
        <ul>
          <li><nuxt-link to="/" class="link onLink">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
              <path d="M27.7083 4.375C28.4819 4.375 29.2237 4.68229 29.7707 5.22927C30.3177 5.77625 30.625 6.51812 30.625 7.29167V27.7083C30.625 28.4819 30.3177 29.2237 29.7707 29.7707C29.2237 30.3177 28.4819 30.625 27.7083 30.625H7.29167C6.51812 30.625 5.77625 30.3177 5.22927 29.7707C4.68229 29.2237 4.375 28.4819 4.375 27.7083V7.29167C4.375 6.51812 4.68229 5.77625 5.22927 5.22927C5.77625 4.68229 6.51812 4.375 7.29167 4.375H27.7083ZM26.9792 26.9792V19.25C26.9792 17.9891 26.4783 16.7799 25.5867 15.8883C24.6951 14.9967 23.4859 14.4958 22.225 14.4958C20.9854 14.4958 19.5417 15.2542 18.8417 16.3917V14.7729H14.7729V26.9792H18.8417V19.7896C18.8417 18.6667 19.7458 17.7479 20.8688 17.7479C21.4102 17.7479 21.9295 17.963 22.3124 18.3459C22.6953 18.7288 22.9104 19.2481 22.9104 19.7896V26.9792H26.9792ZM10.0333 12.4833C10.6831 12.4833 11.3063 12.2252 11.7657 11.7657C12.2252 11.3063 12.4833 10.6831 12.4833 10.0333C12.4833 8.67708 11.3896 7.56875 10.0333 7.56875C9.37969 7.56875 8.75281 7.82841 8.29061 8.29061C7.82841 8.75281 7.56875 9.37969 7.56875 10.0333C7.56875 11.3896 8.67708 12.4833 10.0333 12.4833ZM12.0604 26.9792V14.7729H8.02083V26.9792H12.0604Z" fill="#1C1919"/>
            </svg>
          </nuxt-link></li>
          <li><nuxt-link to="/" class="link onLink">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
              <path d="M11.3748 2.91699H23.6248C28.2915 2.91699 32.0832 6.70866 32.0832 11.3753V23.6253C32.0832 25.8686 31.192 28.02 29.6058 29.6063C28.0195 31.1925 25.8681 32.0837 23.6248 32.0837H11.3748C6.70817 32.0837 2.9165 28.292 2.9165 23.6253V11.3753C2.9165 9.13204 3.80765 6.98063 5.39389 5.39438C6.98014 3.80814 9.13155 2.91699 11.3748 2.91699ZM11.0832 5.83366C9.69078 5.83366 8.35543 6.38678 7.37086 7.37135C6.38629 8.35591 5.83317 9.69127 5.83317 11.0837V23.917C5.83317 26.8191 8.18109 29.167 11.0832 29.167H23.9165C25.3089 29.167 26.6442 28.6139 27.6288 27.6293C28.6134 26.6447 29.1665 25.3094 29.1665 23.917V11.0837C29.1665 8.18158 26.8186 5.83366 23.9165 5.83366H11.0832ZM25.1561 8.02116C25.6396 8.02116 26.1032 8.21322 26.4451 8.55508C26.7869 8.89694 26.979 9.36061 26.979 9.84408C26.979 10.3275 26.7869 10.7912 26.4451 11.1331C26.1032 11.4749 25.6396 11.667 25.1561 11.667C24.6726 11.667 24.209 11.4749 23.8671 11.1331C23.5252 10.7912 23.3332 10.3275 23.3332 9.84408C23.3332 9.36061 23.5252 8.89694 23.8671 8.55508C24.209 8.21322 24.6726 8.02116 25.1561 8.02116ZM17.4998 10.2087C19.4337 10.2087 21.2884 10.9769 22.6558 12.3443C24.0233 13.7118 24.7915 15.5665 24.7915 17.5003C24.7915 19.4342 24.0233 21.2889 22.6558 22.6563C21.2884 24.0238 19.4337 24.792 17.4998 24.792C15.566 24.792 13.7113 24.0238 12.3439 22.6563C10.9764 21.2889 10.2082 19.4342 10.2082 17.5003C10.2082 15.5665 10.9764 13.7118 12.3439 12.3443C13.7113 10.9769 15.566 10.2087 17.4998 10.2087ZM17.4998 13.1253C16.3395 13.1253 15.2267 13.5863 14.4062 14.4067C13.5858 15.2272 13.1248 16.34 13.1248 17.5003C13.1248 18.6606 13.5858 19.7734 14.4062 20.5939C15.2267 21.4144 16.3395 21.8753 17.4998 21.8753C18.6602 21.8753 19.773 21.4144 20.5934 20.5939C21.4139 19.7734 21.8748 18.6606 21.8748 17.5003C21.8748 16.34 21.4139 15.2272 20.5934 14.4067C19.773 13.5863 18.6602 13.1253 17.4998 13.1253Z" fill="#1C1919"/>
            </svg>
          </nuxt-link></li>
        </ul>
      </section>

  </section>



</template>

<script setup>
  import {gsap} from "gsap";

  onMounted(() => {
    const tmenu = menuTimeline();
    const openMenu = document.querySelector('#navigationOpen');
    const closeMenu = document.querySelector('#navigationClose');
    const body = document.querySelector('body');

    const LinkCloseMenu = document.querySelectorAll('.linkCloseNav');

    openMenu.onclick = () => {
      tmenu.timeScale( 1 );
      tmenu.play();
      body.style.overflowY = 'hidden';
    }

    closeMenu.onclick = () => {
      tmenu.timeScale( 1.85 );
      tmenu.reverse();
      body.style.overflowY = 'auto';
    }

    LinkCloseMenu.forEach(el => {
      el.onclick = () => {
        tmenu.timeScale( 2 );
        tmenu.reverse();
        body.style.overflowY = 'auto';
      }
    })

  })

  function menuTimeline() {

    const tlmenu = gsap.timeline({paused:true});

    const LIglobalContainerLink = document.querySelectorAll('#menu .global-link-container li');

    tlmenu.set('#menu',{display : 'grid'})
        .to('#menu',{opacity:1},0)
        .to('#titlemenu', {yPercent:0,opacity:1},0.1)
        .to('#menu .container-link .link',{y:0,stagger:0.3},0.1)
        // .to('#menu .global-link-container .link span span',{y:0,stagger:0.3},0.3)
        // .to('#menu .global-link-container li .line',{scaleX:1})

    let time = 0.3;
    LIglobalContainerLink.forEach(el => {

      const tUnderMenu = gsap.timeline();
      tUnderMenu
          .to(el.children[0].children[0].children[0],{y:0})
          .to(el.children[1],{scaleX:1},0.1);

      tlmenu.add(tUnderMenu,time)

      time+=0.2;

    })

    tlmenu.to('.social-media-container ul li', {y:0,opacity:1,stagger:0.2});

    return tlmenu;

  }

</script>