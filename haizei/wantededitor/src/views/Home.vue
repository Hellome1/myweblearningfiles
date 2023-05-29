<template>
  <div class="home">
    <div class="display">
      <div ref="imgArea" class="imgArea" :style="{ height: imgAreaHeight + 'px' }">
        <div
          class="img-con front-con"
          ref="frontCon"
          :class="frontSrc ? 'allSelected' : ''"
          :style="posi_frontCon"
          @mousedown="handleMouseDown('frontCon', $event)"
          @mouseup="handleMouseUp('frontCon', $event)"
          @mousemove="handleMouseMove('frontCon', $event)"
        >
          <img class="img front-img" @mousedown.prevent ref="frontImg" :src="frontSrc" alt="还未选择嵌入图片" />
        </div>
        <div
          class="img-con back-con"
          ref="backCon"
          :class="backSrc ? 'allSelected' : ''"
          :style="posi_backCon"
          @mousedown="handleMouseDown('backCon', $event)"
          @mouseup="handleMouseUp('backCon', $event)"
          @mousemove="handleMouseMove('backCon', $event)"
        >
          <img class="img back-img" @mousedown.prevent ref="backImg" :src="backSrc" alt="还未选择背景图片" />
        </div>
      </div>
      <div
        class="textcon"
        ref="nameCon"
        :style="nameConStyle"
        @mousedown="handleMouseDown('nameCon', $event)"
        @mouseup="handleMouseUp('nameCon', $event)"
        @mousemove="handleMouseMove('nameCon', $event)"
      >
        <span class="text name" @mousedown.prevent :style="{ fontSize: namefontsize + 'px', lineHeight: namefontsize + 'px', color: fontColor }">{{
          name
        }}</span>
      </div>
      <div
        class="textcon"
        ref="moneyCon"
        :style="moneyConStyle"
        @mousedown="handleMouseDown('moneyCon', $event)"
        @mouseup="handleMouseUp('moneyCon', $event)"
        @mousemove="handleMouseMove('moneyCon', $event)"
      >
        <span class="text money" @mousedown.prevent :style="{ fontSize: moneyfontsize + 'px', lineHeight: moneyfontsize + 'px', color: fontColor }">{{
          money
        }}</span>
      </div>
    </div>
    <div class="setting">
      <div class="row">
        <span class="button">
          <span class="text">选择嵌入图片</span>
          <input class="fileSelectInput" ref="frontSelectInput" type="file" @change="selectImg('frontSelectInput')" />
        </span>
      </div>
      <div class="row">
        <span v-if="adjustingFront" class="button" @click="frontJustifyDone">
          <span class="text">确定</span>
        </span>
        <span v-else class="button" @click="frontJustify">
          <span class="text">调整嵌入图片</span>
        </span>
      </div>
      <div class="row">
        <span class="button">
          <span class="text">选择背景图片</span>
          <input class="fileSelectInput" ref="backSelectInput" type="file" @change="selectImg('backSelectInput')" />
        </span>
      </div>
      <div class="row">
        <input type="text" v-model="name" placeholder="名字" />
        <input type="number" v-model="namefontsize" placeholder="字体大小" />
        <input type="text" v-model="namews" placeholder="名字宽缩放" />
        <input type="text" v-model="namehs" placeholder="名字长缩放" />
      </div>
      <div class="row">
        <input type="text" v-model="money" placeholder="赏金" />
        <input type="number" v-model="moneyfontsize" placeholder="字体大小" />
        <input type="text" v-model="moneyws" placeholder="赏金宽缩放" />
        <input type="text" v-model="moneyhs" placeholder="赏金长缩放" />
      </div>
      <!-- <div class="row">字体颜色：<input type="text" v-model="fontColor" /></div> -->
      <!-- <div class="row">背景颜色：<input type="text" v-model="backbgColor" /></div> -->
      <div class="row"><input type="text" v-model="fileName" placeholder="文件名" /></div>
      <button @click="preview">预览</button>
      <button @click="download">下载</button>
      <button @click="save">保存</button>
      <button @click="clear">清空</button>
    </div>
    <div class="canvasCon">
      <canvas id="canvas1" :width="canvaswidth" :height="canvasheight"></canvas>
    </div>
  </div>
</template>

<script>
import Frame from '@/components/Frame.vue';
// import FileReader from '@/components/FileReader.vue';

export default {
  name: 'Home',
  components: {
    Frame,
    FileReader
  },
  data() {
    return {
      fileName: '',
      frontSrc: '',
      backSrc: '',
      name: '',
      money: '',
      adjustingFront: false,
      namefontsize: 60,
      moneyfontsize: 30,
      imgAreaHeight: 500,
      canvaswidth: 1000,
      canvasheight: 800,
      namews: 1,
      namehs: 1,
      moneyws: 1,
      moneyhs: 1,
      fontColor: '#000',
      backbgColor: '#ffffff',
      oriposi_frontCon: {},
      posi_frontCon: { left: 0, top: 0 },
      posileave_frontCon: { left: 0, top: 0 },
      oriposi_backCon: {},
      posi_backCon: { left: 0, top: 0 },
      posileave_backCon: { left: 0, top: 0 },
      oriposi_nameCon: {},
      posi_nameCon: { left: 0, top: 0 },
      posileave_nameCon: { left: 0, top: 0 },
      oriposi_moneyCon: {},
      posi_moneyCon: { left: 0, top: 0 },
      posileave_moneyCon: { left: 0, top: 0 }
    };
  },
  computed: {
    allSrcDone: function () {
      return this.frontSrc && this.backSrc;
    },
    nameConStyle: function () {
      return Object.assign({}, this.posi_nameCon, {
        transform: 'scale(' + this.namews + ',' + this.namehs + ')'
      });
    },
    moneyConStyle: function () {
      return Object.assign({}, this.posi_moneyCon, {
        transform: 'scale(' + this.moneyws + ',' + this.moneyhs + ')'
      });
    }
  },
  watch: {
    allSrcDone: function () {
      setTimeout(() => {
        let backImg = this.$refs.backImg,
          frontImg = this.$refs.frontImg;
        let maxWidth = Math.max(backImg.offsetWidth, frontImg.offsetWidth),
          maxHeight = Math.max(backImg.offsetHeight, frontImg.offsetHeight);
        console.log(maxWidth, maxHeight);
        this.canvaswidth = maxWidth;
        this.canvasheight = maxHeight;
        this.imgAreaHeight = maxHeight;
      }, 500);
    }
  },
  created() {
    this.restoreCheapPs();
  },
  mounted() {},
  methods: {
    selectImg(fileKey) {
      let file = this.$refs[fileKey];
      console.log(file);
      if (!file.files || !file.files[0]) return;
      let reader = new FileReader();
      reader.onload = evt => {
        console.log(1);
        let srckey = fileKey === 'frontSelectInput' ? 'frontSrc' : 'backSrc';
        this[srckey] = evt.target.result;
        console.log(evt.target.result);
      };
      reader.readAsDataURL(file.files[0]);
    },
    handleMouseDown(key, e) {
      let mousekey = 'mousedown_' + key,
        positionkey = 'posi_' + key,
        oriposikey = 'oriposi_' + key,
        dom = this.$refs[key],
        pageX = e.pageX,
        pageY = e.pageY;
      console.log(e);
      this[mousekey] = true;
      this[oriposikey] = { pageX, pageY };
    },
    handleMouseMove(key, e) {
      let mousekey = 'mousedown_' + key,
        positionkey = 'posi_' + key,
        oriposikey = 'oriposi_' + key,
        posileavekey = 'posileave_' + key,
        dom = this.$refs[key],
        pageX = e.pageX,
        pageY = e.pageY;
      console.log(1);
      if (this[mousekey]) {
        let curleft = parseInt(this[posileavekey].left);
        let curtop = parseInt(this[posileavekey].top);
        let left = curleft + pageX - this[oriposikey].pageX;
        let top = curtop + pageY - this[oriposikey].pageY;

        console.log(curleft, curtop, left, top);
        this[positionkey].left = left + 'px';
        this[positionkey].top = top + 'px';
      }
    },
    handleMouseUp(key, e) {
      let mousekey = 'mousedown_' + key,
        positionkey = 'posi_' + key,
        oriposikey = 'oriposi_' + key,
        posileavekey = 'posileave_' + key,
        dom = this.$refs[key];
      this[mousekey] = false;
      this[posileavekey] = JSON.parse(JSON.stringify(this[positionkey]));
    },
    frontJustify() {
      this.adjustingFront = true;
      this.$set(this.posi_frontCon, 'zIndex', 11);
      this.$set(this.posi_frontCon, 'opacity', 0.3);
    },
    frontJustifyDone() {
      this.adjustingFront = false;
      this.$set(this.posi_frontCon, 'zIndex', 1);

      this.$set(this.posi_frontCon, 'opacity', 1);
    },
    restoreCheapPs() {
      let cheapPs = JSON.parse(localStorage.getItem('cheapPs'));
      for (let k in cheapPs) {
        this[k] = cheapPs[k];
      }
    },
    save() {
      let cheapPs = {
        frontSrc: '',
        backSrc: '',
        name: '',
        money: '',
        adjustingFront: false,
        namefontsize: 50,
        moneyfontsize: 20,
        canvaswidth: 1000,
        canvasheight: 800,
        namews: 1,
        namehs: 1,
        moneyws: 1,
        moneyhs: 1,
        fontColor: '#2c3e50',
        backbgColor: '#ffffff',
        oriposi_frontCon: {},
        posi_frontCon: { left: 0, top: 0 },
        posileave_frontCon: { left: 0, top: 0 },
        oriposi_backCon: {},
        posi_backCon: { left: 0, top: 0 },
        posileave_backCon: { left: 0, top: 0 },
        oriposi_nameCon: {},
        posi_nameCon: { left: 0, top: 0 },
        posileave_nameCon: { left: 0, top: 0 },
        oriposi_moneyCon: {},
        posi_moneyCon: { left: 0, top: 0 },
        posileave_moneyCon: { left: 0, top: 0 }
      };
      for (let k in cheapPs) {
        cheapPs[k] = this[k];
      }
      localStorage.setItem('cheapPs', JSON.stringify(cheapPs));
    },
    clear() {
      let cheapPs = {
        frontSrc: '',
        backSrc: '',
        name: '',
        money: '',
        adjustingFront: false,
        namefontsize: 50,
        moneyfontsize: 20,
        canvaswidth: 1000,
        canvasheight: 800,
        namews: 1,
        namehs: 1,
        moneyws: 1,
        moneyhs: 1,
        fontColor: '#2c3e50',
        backbgColor: '#ffffff',
        oriposi_frontCon: {},
        posi_frontCon: { left: 0, top: 0 },
        posileave_frontCon: { left: 0, top: 0 },
        oriposi_backCon: {},
        posi_backCon: { left: 0, top: 0 },
        posileave_backCon: { left: 0, top: 0 },
        oriposi_nameCon: {},
        posi_nameCon: { left: 0, top: 0 },
        posileave_nameCon: { left: 0, top: 0 },
        oriposi_moneyCon: {},
        posi_moneyCon: { left: 0, top: 0 },
        posileave_moneyCon: { left: 0, top: 0 }
      };
      for (let k in cheapPs) {
        this[k] = cheapPs[k];
      }
      localStorage.removeItem('cheapPs');
    },
    preview() {
      let cdom = document.getElementById('canvas1'),
        ctx = cdom.getContext('2d'),
        img2 = this.$refs.backImg,
        img = this.$refs.frontImg;

      var dpr = window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio || 1;

      // Get the size of the canvas in CSS pixels.
      var oldWidth = this.canvaswidth;
      var oldHeight = this.canvasheight;
      // Give the canvas pixel dimensions of their CSS
      // size * the device pixel ratio.
      cdom.width = Math.round(oldWidth * dpr);
      cdom.height = Math.round(oldHeight * dpr);
      cdom.style.width = oldWidth + 'px';
      cdom.style.height = oldHeight + 'px';
      // Scale all drawing operations by the dpr, so you
      // don't have to worry about the difference.
      ctx.scale(dpr, dpr);

      // img.src = this.frontSrc;
      img.setAttribute('crossOrigin', 'Anonymous');
      // img2.src = this.backSrc;
      img2.setAttribute('crossOrigin', 'Anonymous');

      console.log('download');
      ctx.font = '50px Baskerville-old-face';
      ctx.fillStyle = this.backbgColor;
      // ctx.fillRect(0, 0, this.canvaswidth, this.canvasheight);

      let img1d = false,
        img2d = false;

      img.onload = () => {};
      img1d = true;
      let x = parseInt(this.posi_frontCon.left) - parseInt(this.posi_backCon.left),
        y = parseInt(this.posi_frontCon.top) - parseInt(this.posi_backCon.top);
      console.log(x, y);
      ctx.drawImage(img, x, y);
      // if (img1d && img2d) this.downloadImage(cdom.toDataURL('image/png'), '123');
      img2.onload = () => {};
      img2d = true;
      ctx.drawImage(img2, 0, 0);

      let namex = parseInt(this.posi_nameCon.left) - parseInt(this.posi_backCon.left),
        namey = parseInt(this.posi_nameCon.top) - parseInt(this.posi_backCon.top);
      ctx.font = this.namefontsize + 'px Baskerville-old-face';
      ctx.fillStyle = this.fontColor;
      let xoffset = 0,
        yoffset = 0.5;
      ctx.textBaseline = 'top';
      ctx.save();
      ctx.scale(this.namews, this.namehs);
      ctx.fillText(this.name, namex / this.namews, namey / this.namehs - 4);
      ctx.restore();

      let moneyx = parseInt(this.posi_moneyCon.left) - parseInt(this.posi_backCon.left),
        moneyy = parseInt(this.posi_moneyCon.top) - parseInt(this.posi_backCon.top);
      ctx.font = this.moneyfontsize + 'px huakangcaidai';
      ctx.save();
      ctx.scale(this.moneyws, this.moneyhs);
      ctx.fillText(this.money, moneyx / this.moneyws, moneyy / this.moneyhs + 6);
      ctx.restore();
      // if (img1d && img2d) this.downloadImage(cdom.toDataURL('image/png'), '123');
    },
    download() {
      let cdom = document.getElementById('canvas1'),
        ctx = cdom.getContext('2d'),
        img2 = this.$refs.backImg,
        img = this.$refs.frontImg;

      var dpr = window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio || 1;

      // Get the size of the canvas in CSS pixels.
      var oldWidth = this.canvaswidth;
      var oldHeight = this.canvasheight;
      // Give the canvas pixel dimensions of their CSS
      // size * the device pixel ratio.
      cdom.width = Math.round(oldWidth * dpr);
      cdom.height = Math.round(oldHeight * dpr);
      cdom.style.width = oldWidth + 'px';
      cdom.style.height = oldHeight + 'px';
      // Scale all drawing operations by the dpr, so you
      // don't have to worry about the difference.
      ctx.scale(dpr, dpr);

      // img.src = this.frontSrc;
      img.setAttribute('crossOrigin', 'Anonymous');
      // img2.src = this.backSrc;
      img2.setAttribute('crossOrigin', 'Anonymous');

      console.log('download');
      ctx.font = '50px Baskerville-old-face';
      ctx.fillStyle = this.backbgColor;
      // ctx.fillRect(0, 0, this.canvaswidth, this.canvasheight);

      let img1d = false,
        img2d = false;

      img.onload = () => {};
      img1d = true;
      let x = parseInt(this.posi_frontCon.left) - parseInt(this.posi_backCon.left),
        y = parseInt(this.posi_frontCon.top) - parseInt(this.posi_backCon.top);
      console.log(x, y);
      ctx.drawImage(img, x, y);
      // if (img1d && img2d) this.downloadImage(cdom.toDataURL('image/png'), '123');
      img2.onload = () => {};
      img2d = true;
      ctx.drawImage(img2, 0, 0);

      let namex = parseInt(this.posi_nameCon.left) - parseInt(this.posi_backCon.left),
        namey = parseInt(this.posi_nameCon.top) - parseInt(this.posi_backCon.top);
      ctx.font = this.namefontsize + 'px Baskerville-old-face';
      ctx.fillStyle = this.fontColor;
      let xoffset = 0,
        yoffset = 0.5;
      ctx.textBaseline = 'top';
      ctx.save();
      ctx.scale(this.namews, this.namehs);
      ctx.fillText(this.name, namex / this.namews, namey / this.namehs - 4);
      ctx.restore();

      let moneyx = parseInt(this.posi_moneyCon.left) - parseInt(this.posi_backCon.left),
        moneyy = parseInt(this.posi_moneyCon.top) - parseInt(this.posi_backCon.top);
      ctx.font = this.moneyfontsize + 'px huakangcaidai';
      ctx.save();
      ctx.scale(this.moneyws, this.moneyhs);
      ctx.fillText(this.money, moneyx / this.moneyws, moneyy / this.moneyhs - 4);
      ctx.restore();
      // if (img1d && img2d) this.downloadImage(cdom.toDataURL('image/png'), '123');

      this.downloadImage(cdom.toDataURL('image/png'), this.fileName);
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

<style lang="scss" scoped>
.home {
  display: flex;
  position: relative;
  margin: 60px auto;
  width: 80%;
  .display {
    width: 100%;
    position: relative;
    .imgArea {
      position: relative;
      background-color: #eee;

      .img-con {
        .img {
        }
        .front-img {
        }
        .back-img {
        }
      }
      .back-con {
        z-index: 10;
        top: 0;
        left: 0;
      }
      .img-con.allSelected {
        position: absolute;
      }
    }
    .textcon {
      font-family: baskerville-old-face;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 22;
      color: #000;
      transform-origin: left top;
      .name {
        font-size: 50px;
        display: inline-block;
      }
      .money {
        font-family: huakangcaidai;
        font-size: 20px;
        display: inline-block;
      }
    }
  }
  .setting {
    width: 20%;
    position: absolute;
    right: -100px;
    // background-color: white;
    padding: 20px 5px;
    z-index: 99;
    .row {
      .button {
        position: relative;
        background-color: #ccc;
        border-radius: 3px;
        &:hover {
          background-color: #40a0ff93;
        }
        .text {
          padding: 10px 20px;
        }
        .fileSelectInput {
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
          opacity: 0;
        }
      }
    }
  }
  .canvasCon {
    position: absolute;
    border-top: 1px solid white;
    top: 1999px;
    #canvas1 {
      background-color: #eee;
    }
  }
}
</style>