<template>

    <div class="village">
        <div class="village-header bg-complete-darker">
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
        <div class="village-npc">
            <img src="src/assets/village/npc.png" alt="npc">
        </div>
        <div class="village-buttons">
            <ul>
                <li v-for="(button, index) in buttons" class="village-button">
                    <div class="row">
                        <div class="col-xs-4">
                            <div class="village-book"></div>
                        </div>
                        <div class="col-xs-8">
                            <router-link :to="'/' + index">{{ button }}</router-link>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
  export default {
    name: 'Village',
    data () {
      return {
        buttons: {
          'emergency': '緊急任務',
          'normal': '一般任務',
          'store': '商城銀行'
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .village {
        background: url('/src/assets/village/bg.png') center center no-repeat;
        background-size: cover;
        min-height: 100vh;
    }
</style>
