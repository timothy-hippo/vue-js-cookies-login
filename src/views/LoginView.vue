<template>
  <div class="wrapper">
    <main class="form-signin">
      <form @submit.prevent="handleLogin(loginData)">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" v-model="loginData.account">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" v-model="loginData.password">
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </main>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  data () {
    return {
      loginData: {
        account: '',
        password: '',
        token: ''
      }
    }
  },
  methods: {
    handleLogin (loginData) {
      const token = 'asds32adsavrAS3Fadf5567'
      const { account, password } = loginData
      // 帳號密碼需驗證不能為空
      if (account !== '' && password !== '') {
        loginData.token = token
        const expireTime = 1 / 24 / 60 * 5
        Cookies.set('token', token, { expires: expireTime })
        this.$router.push('/')
      } else {
        alert('帳號密碼不能為空')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
main{
  width: 30%;
}
</style>
