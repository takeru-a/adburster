<template>
  <div>
    <router-link to="/game/start">ゲームスタート</router-link>
    <PlaySelect></PlaySelect>
  </div>
</template>
<script>
import PlaySelect from "../../../components/Play/PlaySelect";
export default {
  name: "",
  components: {
    PlaySelect,
  },
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>