<template>
<div class='BodyB'>
    <h1>{{msg}}</h1>
    <p><button v-on:click="count++">Счётчик кликов — {{ count }}</button></p>
    <p>
     Hello! This is BodyB!
    </p>
    <p>
    Количество кликов из BodyA: {{msgdata}}
    </p>
    <p>
    Сумма из BodyA: {{msgdata2}}
    </p>
    <button @click="trans(msgdata2)">Click me!</button>
    <img alt="Vue logo" src="@/assets/logo.png">
</div>
</template>

<script>

export default {
  name: 'BodyB',
  props: [
  'msg',
  'msgdata',
  'msgdata2'
  ], /* {
    msg: String,
    msgdata: Number,
    msgdata2: Number
  }, */
  data: function () {
    return {
      count: 0
    }
  },
  methods: {
    trans (message) {
      this.$emit('showResult', message)
    }
  }
}
</script>
