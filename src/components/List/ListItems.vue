<template>
  <section class="list-items">
    <div class="container">
      <div class="list-items__items">
        <router-link class="list-items__item project-card"
        :class="
          item.status == 'upcoming' ? 'project-card--upcoming' :
          item.status == 'live' ? 'project-card--live' : 
          'project-card--ended'
        "

        to="/project/dd"

        v-for='item in info.items'
        :key="item"
        >
          <span class="project-card__imgwrapper">
            <img :src="item.image" alt="">
            <span class="project-card__status">
              {{ 
                item.status == 'upcoming' ? 'Upcoming' :
                item.status == 'live' ? 'Sale Live' : 
                'Sale Ended'
              }}
            </span>
          </span>
          <span class="project-card__info">         
            <span class="project-card__name">
              {{ item.name }}
            </span>
            <span class="project-card__cap">
              <span class="project-card__cap-label project-card__label">
                Soft/Hard Cap:
              </span>
              <span class="project-card__cap-value">
                {{ item.softCap + ' = ' + item.hardCap }}
              </span>
            </span>
            <span class="project-card__progress">
              <span class="project-card__progress-label project-card__label">
                Progress: (0.00%)
              </span>
              <span class="project-card__progress-line"></span>
              <span class="project-card__progress-line project-card__progress-line--done"
              :style="
                'width: ' + item.progress + '%'
              "
              ></span>
              <span class="project-card__progress-values">
                <span class="project-card__progress-value">

                </span>
                <span class="project-card__progress-value">

                </span>
              </span>
            </span>
            <span class="project-card__footer">
              <span class="project-card__sale-info">

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