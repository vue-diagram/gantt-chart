<template>
<div class='BodyB'>
    <hr>
    <p>
     Hello! This is BodyB!
    </p>
    <h1>{{msg}}</h1>
    <p><button @click="count++">Счётчик кликов — {{ count }}</button></p>
    <p>
    Количество кликов из BodyA: {{msgdata}}
    </p>
    <p>
    Сумма из BodyA: {{msgdata2}}
    </p>
    <button @click="trans(msgdata2)">Click me!</button>
</div>
</template>

<script>

export default {
  name: 'BodyB',
  props: ['msg', 'msgdata', 'msgdata2'],
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
