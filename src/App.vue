<template>
  <div id="app">
    <div 
      id="nav" 
      class="tab-area-base">
      <ul class="tab-menu-base">
　　　　　<!-- `router.js` で定義したルーティングルールとの紐付けを行っている -->
        <li><router-link to="/">Home</router-link></li>
        <!-- *** -->
        <!-- 省略 -->
        <!-- *** -->
        <li><router-link to="/routing">Rounting Test</router-link></li>
      </ul>
    </div>
    <router-view />
  </div>
</template>


<style>
ul{
  top:0;
  left:0;
}
li{
  background: grey;
  color: blueviolet;
}
</style>
