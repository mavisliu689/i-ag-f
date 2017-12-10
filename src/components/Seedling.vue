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
                <div class="row store-item" v-for="(seedling, index) in seedlings">
                    <div class="col-xs-4">
                        <img :src="'src/assets/village/seedling' + index + '.jpg'" alt="seedling" class="img-responsive" height="60">
                    </div>
                    <div class="col-xs-8">
                        <div class="row">
                            <div class="name">
                                {{ seedling.name }}
                            </div>
                            <div class="info p-t-10">
                                週期:{{ seedling.cycle }} / 栽種:{{ seedling.period }}
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
        seedlings: {
          '1': {
            'name': '青江菜',
            'cycle': '一個月',
            'period': '10~12月'
          },
          '2': {
            'name': '小白菜',
            'cycle': '40天',
            'period': '春秋季'
          },
          '3': {
            'name': '油菜',
            'cycle': '50天',
            'period': '8~10月'
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
