<template>
  <section class="list-filters">
    <div class="container">
      <!-- {{ filters }} -->
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

              v-for="item in info.filtersSelects"
              :key="item"
              :options='item.options'
              @selectedBlockchain='setSelectValue'
              :placeholderValue="item.text"
              >
              </app-select>
            </div>
        </div>
      </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppInput from '@/components/App/AppInput.vue';
import AppSelect from '@/components/App/AppSelect.vue';

export default {
  methods: {
    setSelectValue(value) {
      console.log(value)
      let index = this.filtersSelects.indexOf(value)
      if (index !== -1){
        this.filters.splice(index, 1)
      } else{
        this.filters.push(value)
      } 
    }
  },
  data() {
    return {
      filters:[],
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
                label: 'Noo filters',
                value: 'noofilters',
              },
              {
                label: 'NooNoo Live',
                value: 'noonoofilters',
              },
              {
                label: 'NooNooNoo Ended',
                value: 'noonoonoofilters',
              },
            ],
          },
        ]
      },
    }
  },
  components: {
    AppInput,
    AppSelect,
  },
}
</script>