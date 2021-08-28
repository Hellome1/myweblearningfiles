<template>
  <div>
    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>
  </div>
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
    console.log('局部盘查')
    // if (to.path === '/cc') {
    //   next()
    // } else {
    //   next('/login')
    // }
    next()
  }
}
</script>
