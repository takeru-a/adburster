<template>
  <div>
    <Header></Header>
    <!-- クリック  @click="関数名"-->
    <h1 @click="test">使い方</h1>
    <div>{{data}}</div>
  </div>
</template>
<script>
import Header from "../../components/Header";
export default {
  name: "usage",
  components: {
    Header
  },
  data() {
    return {
      data: "テスト"
    };
  },
  methods: {
    test() {
      console.log(this.data);
    }
  }
};
</script>
