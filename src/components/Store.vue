<template>

    <div class="village">
        <div class="village-header bg-complete-darker">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xs-5">
                        <div class="account">
                            <div class="row">
                                <div class="col-xs-6">
                                    <img src="src/assets/village/avatar.png" alt="avatar" class="img-responsive avatar-img">
                                </div>
                                <div class="col-xs-6">
                                    <div class="name">Mavis</div>
                                    <div class="level">LV. 1</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-7">
                        <div class="row">
                            <div class="col-xs-6">
                                二月 十一
                            </div>
                            <div class="col-xs-6">
                                大寒
                                <img src="src/assets/village/snowflake.png" alt="snowflake" class="pull-right" width="20px">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-6">
                                <img src="src/assets/village/weather.png" alt="weather" class="pull-left" width="30px">
                                南投縣
                            </div>
                            <div class="col-xs-6">
                                農地編號
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="village-npc">
            <img src="src/assets/village/store-npc.png" alt="npc">
        </div>
        <div class="village-services">
            <ul class="list-unstyled container-fluid">
                <li v-for="(service, index) in services" class="village-service row">
                    <router-link :to="'/' + index">
                        <div class="col-xs-8">
                            {{ service }}
                        </div>
                        <div class="col-xs-4">
                            <div class="row">
                                <div class="village-book pull-right"></div>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="village-buttons">
            <ul class="list-unstyled container-fluid">
                <li v-for="(button, index) in buttons" class="village-button row">
                    <router-link :to="'/' + index">
                        <div class="col-xs-4">
                            <div class="row">
                                <div class="village-book pull-left"></div>
                            </div>
                        </div>
                        <div class="col-xs-8">
                            {{ button }}
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <router-link to="/village" class="back-btn"></router-link>
    </div>

</template>

<script>
  export default {
    name: 'Village',
    data () {
      return {
        buttons: {
          'land': '土地購買',
          'seedling': '種苗場',
          'fertilizer': '肥藥農藥',
          'machine': '農機代耕',
          'shipping': '包裝物流'
        },
        services: {
          'assessment': '財評',
          'loan': '農貸'
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .village {
        background-image: url('/src/assets/village/store-bg.png');
    }
</style>
