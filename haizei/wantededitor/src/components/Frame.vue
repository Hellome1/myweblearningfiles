<template>
  <div class="frame">
    <div class="spec">MONKEY</div>
    <!-- <img src="@/assets/haizei.webp" ref="img1" alt="图片未能加载" />
    <img src="@/assets/logo.png" ref="img2" alt="图片未能加载" /> -->
    <canvas id="canvas1" width="1000" height="600"></canvas>
  </div>
</template>

<script>
export default {
  name: 'Frame',
  props: {
    // src: ''
  },
  data() {
    return {
      src: '@/assets/haizei.webp',
      src2: '@/assets/logo.png'
    };
  },
  created() {
    // this.drawImage();
  },
  mounted() {
    this.drawImage();
  },
  methods: {
    drawImage() {
      let cdom = document.getElementById('canvas1'),
        ctx = cdom.getContext('2d'),
        img2 = new Image(),
        img = new Image();

      img.src = require('@/' + this.src.replace('@/', ''));
      img.setAttribute('crossOrigin', 'Anonymous');
      img2.src = require('@/' + this.src2.replace('@/', ''));
      img2.setAttribute('crossOrigin', 'Anonymous');

      ctx.font = '30px sans-serif';
      ctx.font = '50px Baskerville-old-face';

      img.onload = function () {
        ctx.drawImage(img, 0, 0);
      };
      img2.onload = function () {
        ctx.drawImage(img2, 0, 0);
        ctx.fillText('MONKEY', 100.5, 100);
      };
      cdom.onclick = () => {
        // this.downloadImage(cdom.toDataURL('image/png'), '123');
      };
    },
    downloadImage(url, fileName = new Date().valueOf()) {
      const url2 = url.replace(/\\/g, '/');
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url2, true);
      xhr.responseType = 'blob';
      xhr.onload = () => {
        if (xhr.status === 200) {
          var blob = xhr.response;
          const urlObject = window.URL || window.webkitURL || window;
          const export_blob = new Blob([blob]);
          const save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
          save_link.href = urlObject.createObjectURL(export_blob);
          let type = blob.type.split('/')[1] || '';
          save_link.download = fileName + '.' + type;
          save_link.click();
        }
      };
      xhr.send();
    }
  }
};
</script>

<style lang="scss">
.spec {
  font-family: 'Baskerville';
}
</style>