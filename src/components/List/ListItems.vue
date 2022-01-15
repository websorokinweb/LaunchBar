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

        :to="'/project/' + item.name"

        v-for='item in allProjects'
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
                {{ item.softCapMask + ' ' + item.blockchainSymbol }}
                <span class="project-card__cap-divider">
                  -
                </span>
                {{ item.hardCapMask + ' ' + item.blockchainSymbol }}
              </span>
            </span>
            <span class="project-card__rate">
              {{ 1 + ' ' + item.blockchainSymbol + ' = ' + item.exchangeRateMask + ' ' + item.tokenSymbol }}
            </span>
            <span class="project-card__progress">
              <span class="project-card__progress-label project-card__label">
                {{ 'Progress: (' + item.progressMask + ')' }}
              </span>
              <span class="project-card__progress-line"></span>
              <span class="project-card__progress-line project-card__progress-line--done"
              :style="item.lineProgress"
              ></span>
              <span class="project-card__progress-values">
                <span class="project-card__progress-value">
                  {{ item.collected + ' ' + item.blockchainSymbol }}
                </span>
                <span class="project-card__progress-value">
                  {{ item.hardCapMask + ' ' + item.blockchainSymbol}}
                </span>
              </span>
            </span>
            <span class="project-card__footer">
              <span class="project-card__sale">
                <span class="project-card__sale-label">
                  Presale:
                </span>
                <span class="project-card__sale-time">
                  Ended
                </span>
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
import maskTextMixin from '@/mixins/maskTextMixin'

export default {
  computed: {
    allProjects() {
      return this.info.items.map( (item) => {

        let percentageRate = item.hardCap / 100
        item.progress = item.collected / percentageRate
        if(item.progress > 100){
          item.lineProgress = 'width: 100%'
        }else{
          item.lineProgress = 'width:' + item.progress + '%'
        }
        
        item.progressMask = item.progress.toFixed(2) + '%'

        item.exchangeRateMask = this.maskText(item.exchangeRate)
        item.softCapMask = this.maskText(item.softCap)
        item.hardCapMask = this.maskText(item.hardCap)

        return item
      })
    }
  },
  mixins:[
    maskTextMixin,
  ],
  data() {
    return {
      info:{
        items:[
          {
            name: 'BabyMafia',
            status: 'upcoming',
            image: require('@/assets/images/temp/list-item-1.png'),
            blockchainSymbol: 'BNB',
            tokenSymbol: 'SOFT',
            collected: 0,
            saleStart: '',
            softCap: 75,
            hardCap: 150,
            exchangeRate: 5000000000,

            presaleAdress: '',  
            tokenDecimals: 9,
            tokenAdress: '0xB4B57F17635134eA65deF7237292ba5ED8e4C975',
            totalSupply: 1000000000000000,
            tokenForPresale: 229999999999950,
            tokenForLiquadity: 160999999999965,
            presaleRate: 1533333333333,
            listingRate: 1533333333333,
            initialMarketCap: 147636,
            unsoldTokens: 'Refund',

            presaleStartTime: '2022.01.12 18:00 (UTC)',
            presaleEndTime: '2022.01.12 18:00 (UTC)',

            listingOn: 'Pancakeswap',
            liquadityPercent: 70,
            liquadityLockupTime: '120 days after pool ends',
          },
          {
            name: 'NameProject',
            status: 'live',
            image: require('@/assets/images/temp/list-item-2.png'),
            blockchainSymbol: 'BNB',
            tokenSymbol: 'SOFT',
            collected: 250,
            saleStart: '',
            softCap: 250,
            hardCap: 500,
            exchangeRate: 7347030021,
          },
          {
            name: 'NameProject',
            status: 'ended',
            image: require('@/assets/images/temp/list-item-3.png'),
            blockchainSymbol: 'BNB',
            tokenSymbol: 'SOFT',
            collected: 100,
            saleStart: '',
            softCap: 50,
            hardCap: 100,
            exchangeRate: 3240071022,
          },
          {
            name: 'NameProject',
            status: 'upcoming',
            image: require('@/assets/images/temp/list-item-1.png'),
            blockchainSymbol: 'BNB',
            tokenSymbol: 'SOFT',
            collected: 0,
            saleStart: '',
            softCap: 75,
            hardCap: 150,
            exchangeRate: 5000000000,
          },
          {
            name: 'NameProject',
            status: 'live',
            image: require('@/assets/images/temp/list-item-2.png'),
            blockchainSymbol: 'BNB',
            tokenSymbol: 'SOFT',
            collected: 250,
            saleStart: '',
            softCap: 250,
            hardCap: 500,
            exchangeRate: 7347030021,
          },
          {
            name: 'NameProject',
            status: 'ended',
            image: require('@/assets/images/temp/list-item-3.png'),
            blockchainSymbol: 'BNB',
            tokenSymbol: 'SOFT',
            collected: 100,
            saleStart: '',
            softCap: 50,
            hardCap: 100,
            exchangeRate: 3240071022,
          },
        ],
      },
    }
  },
}
</script>