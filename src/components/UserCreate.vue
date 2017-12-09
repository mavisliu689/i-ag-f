<template>
    <div class="user-create">
        <div class="register-container full-height sm-p-t-30 bg-white">
            <div class="container-sm-height full-height">
                <div class="row row-sm-height">
                    <div class="col-sm-12 col-sm-height col-middle">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="form-group form-group-default required">
                                    <label>大頭照</label>
                                    <input type="file" name="avatar" placeholder="John" class="form-control" required=""
                                           aria-required="true">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="form-group form-group-default required">
                                    <label>角色名稱</label>
                                    <input type="text" name="name" placeholder="Smith" class="form-control required"
                                           required="true"
                                           aria-required="true">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="form-group form-group-default form-group-default-select2 required">
                                    <label class="">選擇起始縣市</label>
                                    <select name="city" class="full-width" data-placeholder="Select City"
                                            data-init-plugin="select2" required="true">
                                        <option></option>
                                        <option value="基隆市">基隆市</option>
                                        <option value="台北市">台北市</option>
                                        <option value="新北市">新北市</option>
                                        <option value="桃園縣">桃園縣</option>
                                        <option value="新竹市">新竹市</option>
                                        <option value="新竹縣">新竹縣</option>
                                        <option value="苗栗縣">苗栗縣</option>
                                        <option value="台中市">台中市</option>
                                        <option value="彰化縣">彰化縣</option>
                                        <option value="南投縣">南投縣</option>
                                        <option value="雲林縣">雲林縣</option>
                                        <option value="嘉義市">嘉義市</option>
                                        <option value="嘉義縣">嘉義縣</option>
                                        <option value="台南市">台南市</option>
                                        <option value="高雄市">高雄市</option>
                                        <option value="屏東縣">屏東縣</option>
                                        <option value="台東縣">台東縣</option>
                                        <option value="花蓮縣">花蓮縣</option>
                                        <option value="宜蘭縣">宜蘭縣</option>
                                        <option value="澎湖縣">澎湖縣</option>
                                        <option value="金門縣">金門縣</option>
                                        <option value="連江縣">連江縣</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="form-group form-group-default required">
                                    <label class="">輸入自備金額</label>
                                    <input type="text" name="amount" placeholder="Amount" class="form-control required"
                                           required="true" aria-required="true" aria-invalid="false">
                                </div>
                            </div>
                        </div>
                        <div class="row m-t-10">
                            <div class="col-md-6">
                                <p>I agree to the <a href="#" class="text-info small">Pages Terms</a> and <a href="#"
                                                                                                             class="text-info small">Privacy</a>.
                                </p>
                            </div>
                        </div>
                        <button class="btn btn-primary btn-cons m-t-10" type="button" @click="createUser">創建角色</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'UserCreate',
    data () {
      return {
        msg: 'UserCreate'
      }
    },
    mounted: function () {
      $('select[data-init-plugin=select2]')
      // init select2
        .select2()
    },
    methods: {
      createUser () {
        this.$router.push('/village')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>