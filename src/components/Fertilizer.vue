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
        <div class="store">
            <div class="container">
                <div class="row fertilizer-item" v-for="(fertilizer, index) in fertilizers">
                    <div class="col-xs-12">
                        <div class="row">
                            <div class="fertilizer-name">
                                {{ fertilizer.name }}
                            </div>
                        </div>
                        <div class="fertilizer-phone">
                            {{ fertilizer.phone }}
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
        fertilizers: {
          '1': {
            'name': '建鋐農藥行1',
            'phone': '049-2622262'
          },
          '2': {
            'name': '建鋐農藥行2',
            'phone': '049-2622262'
          },
          '3': {
            'name': '建鋐農藥行3',
            'phone': '049-2622262'
          },
          '4': {
            'name': '建鋐農藥行4',
            'phone': '049-2622262'
          },
          '5': {
            'name': '建鋐農藥行5',
            'phone': '049-2622262'
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
