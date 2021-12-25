<template>
  <div>
    <Header></Header>
    <h1>テスト</h1>
    <router-link to="/usage">使い方</router-link>
    <br>
    <router-link to="/game/slide">ゲーム</router-link>
    <br>
    <router-link to="/game/spring">ひょこっと出る型</router-link>
  </div>
</template>
<script>
import Header from "../../components/Header"
export default {
  name: 'top',
  components: {
    Header
  }
}
</script>
