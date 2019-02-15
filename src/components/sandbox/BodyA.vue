<template>
<div class='BodyA'>
    <hr>
    <h1>{{msg}}</h1>
    <p>Input value #1: <input type="number" v-model="message" placeholder="50"></p>
    <p>Input value #2: <input type="number" v-model="message1" placeholder="60"></p>
    <p><button @click="addition()">Сложить</button></p>
    <p>Сумма: {{summary}}  </p>
    <p>Сумма: {{validatory}}  </p>
    <p><button @click="count++">Счётчик кликов — {{ count }}</button></p>
    <p>
     Hello! This is BodyA!
    </p>
    <BodyB @showResult="addition" :msgdata="count" :msgdata2="summary"/>
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
