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
        <div class="video">
            <div class="container">
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" :src="'https://www.youtube.com/embed/' + step.video" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                </div>
            </div>
        </div>
        <div class="intro">
            <div class="container">
                <p>
                    {{ step.intro }}
                </p>
            </div>
        </div>
        <div class="village-npc">
            <img src="src/assets/village/normal-npc.png" alt="npc">
        </div>
        <router-link to="/normal" class="back-btn"></router-link>
    </div>

</template>

<script>
  export default {
    name: 'Village',
    data () {
      return {
        'step': {
          'video': '7ZGW_T-UqZ0',
          'intro': '需翻土兩次，目的是將有機質打成細小狀態，方便快速分解釋放養分到農田'
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .village {
        background-image: url('/src/assets/village/normal-bg.png');
    }
</style>
