<template>

    <div class="login">
        <!-- START PAGE CONTENT -->
        <div class="content ">
            <!-- START CONTAINER FLUID -->
            <div class="container container-fixed-lg">
                <!-- BEGIN PlACE PAGE CONTENT HERE -->

                <div class="login-container bg-white">
                    <div class="p-l-50 m-l-20 p-r-50 m-r-20 p-t-50 m-t-30 p-b-50 m-b-30 sm-p-l-15 sm-p-r-15 sm-p-t-40">
                        <p class="p-t-35">Sign into your account</p>
                        <!-- START Login Form -->
                        <!-- START Form Control-->
                        <div class="form-group form-group-default">
                            <label class="fade">Account</label>
                            <div class="controls">
                                <input type="text" name="username" placeholder="帳號" class="form-control" required=""
                                       aria-required="true" aria-invalid="false">
                            </div>
                        </div>
                        <!-- END Form Control-->
                        <!-- START Form Control-->
                        <div class="form-group form-group-default">
                            <label class="fade">Password</label>
                            <div class="controls">
                                <input type="password" class="form-control" name="password" placeholder="密碼" required=""
                                       aria-required="true" aria-invalid="false">
                            </div>
                        </div>
                        <button class="btn btn-primary btn-cons m-t-10" type="button" @click="checkLogin">登入</button>
                        <!--END Login Form-->
                    </div>
                </div>

                <!-- END PLACE PAGE CONTENT HERE -->
            </div>
            <!-- END CONTAINER FLUID -->
        </div>
        <!-- END PAGE CONTENT -->
        <!-- START COPYRIGHT -->
        <!-- START CONTAINER FLUID -->
        <!-- START CONTAINER FLUID -->
        <div class="container-fluid container-fixed-lg footer">
            <div class="copyright sm-text-center">
                <p class="small no-margin pull-right sm-pull-reset">
                    <span class="hint-text">Copyright &copy; 2017 EliTe</span>
                </p>
                <div class="clearfix"></div>
            </div>
        </div>
        <!-- END COPYRIGHT -->
    </div>

</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        msg: 'Login'
      }
    },
    methods: {
      checkLogin () {
        this.$router.push('/user-create')
      }
    }
  }
</script>
