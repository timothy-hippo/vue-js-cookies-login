<template>
  <div>
    <header class="d-flex align-items-center">
      <div class="logo">js-cookie練習</div>
      <nav>
        <ul>
          <li>
            <router-link to="/">首頁</router-link>
          </li>
          <li>
            <router-link to="/about">關於</router-link>
          </li>
        </ul>
      </nav>
      <button class="btn btn-warning ms-auto" @click="handleLogout()">登出</button>
    </header>
    <section class='home'></section>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  methods: {
    handleLogout () {
      console.log()
      Cookies.remove('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100vh;
  background-image: url('@/assets/A8465C42-A52A-4989-9B1A-B2ECCF6A9147.jpg');
  background-size: cover;
  background-position: center center;
}
header{
  width: 100%;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.191);
  position: fixed;
  padding: 0 20px;
}
.logo {
  font-size: 1.1rem;
  color: rgb(224, 219, 64);
}
nav {
  ul {
    list-style-type: none;
    margin: 0;
    margin-left: 32px;
    padding: 0;
    display: flex;
    li {
      a {
        padding: 6px 12px;
        text-decoration: none;
        color:rgb(113, 113, 113);
        &:hover {
          cursor: pointer;
          border-bottom:2px solid red;
        }
      }
    }
  }
}
</style>
