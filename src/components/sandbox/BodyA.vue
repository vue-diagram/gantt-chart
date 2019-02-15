<template>
<div class='BodyA'>
    <h1>{{msg}}</h1>
    <p>Input value #1: <input v-model="message" placeholder="50"></p>
    <p>Input value #2: <input v-model="message1" placeholder="60"></p>
    <p><button v-on:click="addition()">Сложить</button></p>
    <p>Сумма: {{summary}}  </p>
    <p>Сумма: {{validatory}}  </p>
    <p><button v-on:click="count++">Счётчик кликов — {{ count }}</button></p>
    <p>
     Hello! This is BodyA!
    </p>
    <img alt="Vue logo" src="@/assets/logo.png">
    <BodyB @showResult = "addition" v-bind:msgdata = "count" :msgdata2 = "summary"/>
</div>
</template>

<script>
import BodyB from '@/components/sandbox/BodyB'
export default {
  name: 'BodyA',
  components: {
    BodyB
  },
  props: {
    msg: String
  },
  data: function () {
    return {
      count: 0,
      message: 10,
      message1: 20
    }
  },
  methods: {
    addition: function (message) {
      alert(message)
    }
  },
  computed: {
    summary () {
      return parseInt(this.message) + parseInt(this.message1)
    },
    validatory () {
      return this.message
    }
  }
}
</script>
