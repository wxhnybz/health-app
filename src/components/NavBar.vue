<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'home' }">甲康家园</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'home' }" :class="{ 'active-link': $route.name === 'home' }">首页</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'healthinfo' }" :class="{ 'active-link': $route.name === 'healthinfo' }">健康资讯</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'healthfile' }" :class="{ 'active-link': $route.name === 'healthfile' }">健康档案</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'aihealth' }" :class="{ 'active-link': $route.name === 'aihealth' }">AI健康评测</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'wechat' }" :class="{ 'active-link': $route.name === 'wechat' }">互动社区</router-link>
          </li>
        </ul>
        <ul class="navbar-nav">
        <li class="nav-item">
          <router-link id="exit" class="nav-link" :to="{name: 'login'}">退出登录</router-link>
        </li>
      </ul>
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  name: "NavBar",
}
</script>

<style scoped>
.active-link {
  font-weight: bold;
  color: lightseagreen; /* 或者你喜欢的任何颜色 */
}

#exit{
  background-color: yellow;
  color: black;
}
#exit:hover{
  color: lightcoral;
}
</style>