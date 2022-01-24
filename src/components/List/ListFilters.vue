<template>
  <section class="list-filters">
    <div class="container">
      <div class="list-filters__inner">
        <div class="list-filters__search-wrapper">
          <app-input
          placeholderText="Search"
          view="search"
          ></app-input>
          <img src="@/assets/images/search.svg" alt="">
        </div>
        <div class="list-filters__checkboxes-mobileoverflow">
          <div class="list-filters__checkboxes-wrapper">
            <div class="list-filters__checkboxes">
              <app-input
              v-for='item in info.filtersCheckboxes'
              :key='item'
              radio
              :checkboxValue='item.value'
              :descr='item.text'
              :checkboxChecked='item.checked'
              :checkboxName='info.filtersName'
              @choosed='setType'
              v-show='item.show !== false'
              ></app-input>

              <app-select
              :options='info.filtersSelects[0].options'
              @selectedBlockchain='setFilterStatus'
              :placeholderValue="info.filtersSelects[0].text"
              ></app-select>

              <app-select
              :options='info.filtersSelects[1].options'
              @selectedBlockchain='setFilterSort'
              :placeholderValue="info.filtersSelects[1].text"
              ></app-select>
            </div>
        </div>
      </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppSelect from '@/components/App/AppSelect.vue';

export default {
  methods: {
    setFilterStatus(value) {
      this.filters.status = value
    },
    setFilterSort(value) {
      this.filters.sort = value
    },
    setType(value){
      this.filters.type = value
    }
  },
  watch: {
    filters: {
      deep: true,
      handler(value){
        console.log(value)
      }
    }
  },
  data() {
    return {
      filters:{
        type: '',
        status: '',
        sort: '',
      },
      info:{
        filtersName: 'list-filters',
        filtersCheckboxes:[
          {
            text: 'All Launchpads',
            value: 'all',
            checked: true,
          },
          {
            text: 'My Contributions',
            value: 'my-contrubs',
          },
        ],
        filtersSelects:[
          {
            text: 'All Status',
            options:[
              {
                label: 'Upcoming',
                value: 'upcoming',
              },
              {
                label: 'Sale Live',
                value: 'live',
              },
              {
                label: 'Sale Ended',
                value: 'ended',
              },
            ],
          },
          {
            text: 'No Filter',
            options:[
              {
                label: 'No filter',
                value: 'nofilter',
              },
              {
                label: 'Hard Cap',
                value: 'hardcap',
              },
              {
                label: 'Soft Cap',
                value: 'softcap',
              },
              {
                label: 'LP Percent',
                value: 'lppercent',
              },
              {
                label: 'Start Time',
                value: 'starttime',
              },
              {
                label: 'End Time',
                value: 'endtime',
              },
            ],
          },
        ]
      },
    }
  },
  components: {
    AppSelect,
  },
}
</script>