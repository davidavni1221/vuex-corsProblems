

<template>
  <section>
  <header>this is a header</header>
  <router-view/>
  <footer>footerrr</footer>
</section>
</template>


<script>

export default {
  name: 'app',
  created() {
    this.$store.dispatch({ type: 'loadLists' })
  },
  components: {
  },
}
</script>
<style>
header{
  /* position: absolute;
  top: 0; */
  background: #1c1fa2;
  color: #d51010;
  width: 100%;
  height: 5em;
}
footer{
  position: absolute;
  bottom: 0;
  color: #1010d5;
  height: 5em;

  background: #d51010;
  width: 100%;
}
</style>