<template>
  <div class="file-reader">
    <img :src="value" alt="wei" />
    <input type="file" ref="file" @change="selectImg" />
  </div>
</template>

<script>
export default {
  name: 'FileReader',
  data() {
    return {
      value: ''
    };
  },
  methods: {
    selectImg() {
      let file = this.$refs.file;
      if (!file.files || !file.files[0]) return;
      let reader = new FileReader();
      reader.onload = evt => {
        this.value = evt.target.result;
        console.log(evt.target.result);
      };
      reader.readAsDataURL(file.files[0]);
    }
  }
};
</script>

<style>
</style>