<template>
  <section class="project-info">
    <div class="project-info__top">
      <div class="project-info__logo-wrapper">
        <img src="@/assets/images/temp/logo-1.jpg" alt="">
      </div>
      <div class="project-info__top-inner">
        <h1 class="project-info__title">

        </h1>
        <app-socials

        ></app-socials>
        <!-- Заполнить app-socials данными тоже -->
        <p class="project-info__descr">

        </p>

      </div>
    </div>
    <ul class="project-info__characters">
      <li class="project-info__characters-item">
        <p class="project-info__characters-label">

        </p>
        <p class="project-info__characters-value">

        </p>
      </li>
      <li class="project-info__characters-item">
        <p class="project-info__characters-label">

        </p>
        <p class="project-info__characters-value">
          
        </p>
      </li>
      <li class="project-info__characters-item">
        <p class="project-info__characters-label">

        </p>
        <p class="project-info__characters-value">
          
        </p>
      </li>
      <li class="project-info__characters-item">
        <p class="project-info__characters-label">

        </p>
        <p class="project-info__characters-value">
          
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
import AppSocials from '@/components/App/AppSocials.vue';

export default {
  components: {
    AppSocials,
  },
}
</script>