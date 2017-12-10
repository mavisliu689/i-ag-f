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
                        <img src="src/assets/village/seedling.jpg" alt="seedling" class="img-responsive" height="60">
                    </div>
                    <div class="col-xs-8">
                        <div class="row">
                            <div class="name">
                                {{ seedling.name }}
                            </div>
                            <div class="info p-t-10">
                                {{ seedling.cycle }} / {{ seedling.period }}
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
            'name': '小白菜1',
            'cycle': '農作物週期',
            'period': '建議播種期'
          },
          '2': {
            'name': '小白菜2',
            'cycle': '農作物週期',
            'period': '建議播種期'
          },
          '3': {
            'name': '小白菜3',
            'cycle': '農作物週期',
            'period': '建議播種期'
          },
          '4': {
            'name': '小白菜4',
            'cycle': '農作物週期',
            'period': '建議播種期'
          },
          '5': {
            'name': '小白菜5',
            'cycle': '農作物週期',
            'period': '建議播種期'
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
