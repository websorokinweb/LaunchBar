<template>
  <section class="list-items">
    <div class="container">
      <div class="list-items__items">
        <router-link class="list-items__item project"
        :class="
          item.status == 'upcoming' ? 'project--upcoming' :
          item.status == 'live' ? 'project--live' : 
          'project--ended'
        "
        to="/"
        v-for='item in info.items'
        :key="item"
        >
          <span class="project__imgwrapper">
            <img :src="item.image" alt="">
          </span>
          <span class="project__info">         
            <span class="project__name">
              {{ item.name }}
            </span>
            <span class="project__cap">
              <span class="project__cap-label project__label">
                Soft/Hard Cap:
              </span>
              <span class="project__cap-value">
                {{ item.softCap + ' = ' + item.hardCap }}
              </span>
            </span>
            <span class="project__progress">
              <span class="project__progress-label project__label">
                Progress: (0.00%)
              </span>
              <span class="project__progress-line"></span>
              <span class="project__progress-line project__progress-line--done"
              :style="
                'width: ' + item.progress + '%'
              "
              ></span>
              <span class="project__progress-values">
                <span class="project__progress-value">

                </span>
                <span class="project__progress-value">

                </span>
              </span>
            </span>
            <span class="project__footer">
              <span class="project__sale-info">

              </span>
              <app-button
              title="View"
              view="dark-blue"
              ></app-button>
            </span>
          </span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      info:{
        items:[
          {
            name: 'NameProject',
            status: 'upcoming',
            image: require('@/assets/images/temp/list-item-1.png'),
            progress: 0,
            softCap: '1 BNB',
            hardCap: '5,000,000,000 SOFT',
          },
          {
            name: 'NameProject',
            status: 'live',
            image: require('@/assets/images/temp/list-item-2.png'),
            progress: 50,
            softCap: '1 BNB',
            hardCap: '7,347,030,021 CDR',
          },
          {
            name: 'NameProject',
            status: 'ended',
            image: require('@/assets/images/temp/list-item-3.png'),
            progress: 100,
            softCap: '1 BNB',
            hardCap: '3,240,071,022 SHIBA22',
          },
          {
            name: 'NameProject',
            status: 'upcoming',
            image: require('@/assets/images/temp/list-item-1.png'),
            progress: 0,
            softCap: '1 BNB',
            hardCap: '5,000,000,000 SOFT',
          },
          {
            name: 'NameProject',
            status: 'live',
            image: require('@/assets/images/temp/list-item-2.png'),
            progress: 50,
            softCap: '1 BNB',
            hardCap: '7,347,030,021 CDR',
          },
          {
            name: 'NameProject',
            status: 'ended',
            image: require('@/assets/images/temp/list-item-3.png'),
            progress: 100,
            softCap: '1 BNB',
            hardCap: '3,240,071,022 SHIBA22',
          },
        ],
      },
    }
  },
}
</script>