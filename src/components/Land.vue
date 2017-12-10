<template>

    <div class="village">
        <div class="mask"></div>
        <div class="village-header bg-complete-darker">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xs-5">
                        <div class="account">
                            <div class="row">
                                <div class="col-xs-6">
                                    <div class="row">
                                        <img src="src/assets/village/avatar.png" alt="avatar" class="img-responsive avatar-img">
                                    </div>
                                </div>
                                <div class="col-xs-6 p-t-20">
                                    <div class="name">Mavis</div>
                                    <div class="level">LV. 1</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-7 p-t-20">
                        <div class="row">
                            <div class="col-xs-6">
                                <div class="row">
                                    二月 十一
                                </div>
                            </div>
                            <div class="col-xs-6">
                                大寒
                                <img src="src/assets/village/snowflake.png" alt="snowflake" class="pull-right" width="20px">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-6">
                                <div class="row">
                                    <img src="src/assets/village/weather.png" alt="weather" class="pull-left" width="30px">
                                    南投縣
                                </div>
                            </div>
                            <div class="col-xs-6">
                                農地編號
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="store">
            <div class="container">
                <div class="row store-item" v-for="(land, index) in lands">
                    <div class="col-xs-4">
                        <img src="src/assets/village/land.png" alt="land" class="img-responsive">
                    </div>
                    <div class="col-xs-8">
                        <div class="land">
                            {{ land.name }}
                        </div>
                        <div class="info p-t-10">
                            <div class="row">
                                <div class="col-xs-6">
                                    {{ land.ping }}
                                </div>
                                <div class="col-xs-6">
                                    {{ land.price }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="village-npc">
            <img src="src/assets/village/store-npc.png" alt="npc">
        </div>
        <router-link to="/store" class="back-btn"></router-link>
    </div>

</template>

<script>
  export default {
    name: 'Village',
    data () {
      return {
        lands: {
          '1': {
            'name': '竹山山坡地1',
            'ping': '1435坪',
            'price': '6萬/坪'
          },
          '2': {
            'name': '竹山山坡地2',
            'ping': '1435坪',
            'price': '6萬/坪'
          },
          '3': {
            'name': '竹山山坡地3',
            'ping': '1435坪',
            'price': '6萬/坪'
          },
          '4': {
            'name': '竹山山坡地4',
            'ping': '1435坪',
            'price': '6萬/坪'
          },
          '5': {
            'name': '竹山山坡地5',
            'ping': '1435坪',
            'price': '6萬/坪'
          }
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
