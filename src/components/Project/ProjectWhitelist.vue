<template>
  <section class="project-whitelist">
    <div class="project-whitelist__inner">
      <h6 class="project-whitelist__title">
        User Whitelist
      </h6>
      <ul class="project-whitelist__items">
        <li class="project-whitelist__item project-whitelist__item--label">
          <p class="project-whitelist__index project-whitelist__index--label">
            No.
          </p>
          <p class="project-whitelist__wallet project-whitelist__wallet--label">
            {{ 'Address (' + project.whitelistLength + ')'}}
          </p>
        </li>
        <li class="project-whitelist__item"
        v-for="(item, index) in project.whitelist"
        :key="index"
        >
          <p class="project-whitelist__index">
            {{ index + 1 }}
          </p>
          <p class="project-whitelist__wallet">
            <span class="project-whitelist__wallet-value">
              {{ item }}
            </span>
            <button class="project-whitelist__copy btn-clear">
              <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5 0H2.5C1.4 0 0.5 0.9 0.5 2V16H2.5V2H14.5V0ZM17.5 4H6.5C5.4 4 4.5 4.9 4.5 6V20C4.5 21.1 5.4 22 6.5 22H17.5C18.6 22 19.5 21.1 19.5 20V6C19.5 4.9 18.6 4 17.5 4ZM17.5 20H6.5V6H17.5V20Z" fill="#C5C5DC"/>
              </svg>
            </button>
          </p>
        </li>
      </ul>
      <pagination v-model="currentPage" :records="project.whitelistLength" :per-page="10" @paginate="myCallback"
      :options="paginationSetup"
      />
      <!-- :options="
      {
        hideCount: true,
        edgeNavigation: false,
        template: this.ProjectCustomPagination,
      } -->
    </div>
  </section>
</template>

<script>
import Pagination from 'v-pagination-3';

import ProjectCustomPagination from '@/components/Project/ProjectCustomPagination.vue';

export default {
  setup () {
    const paginationSetup = 
      {
        template: ProjectCustomPagination,
      }
  
    return {
      paginationSetup,
    }
  },
  data() {
    return {
      currentPage: 1,
      totalPages: 3,
      arrayData: [
        {
          data: 'Page № 1'
        },
        {
          data: 'Page № 2'
        },
        {
          data: 'Page № 3'
        },
      ],
    }
  },
  inject:[
    'project',
  ],
  methods: {
    myCallback(e) {
      console.log(e)
    }
  },
  components: {
    Pagination,
  },
}
</script>