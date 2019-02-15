<template>
<div class='ArturKe'>
    <h1>{{msg}}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>
      <BodyA msg="Welcome Pipiski App"/>
    </p>
</div>
</template>

<script>
import BodyA from '@/components/sandbox/BodyA'
export default {
  name: 'ArturKe',
  components: {
    BodyA
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@require '../../styles/sandbox/HelloWorldArturKe'
</style>
