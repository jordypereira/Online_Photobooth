<template>
  <input
    type="text"
    class="border border-blue-500"
    :placeholder="placeholder"
    :value="value"
    @onChange="this.$emit('onChange')"
  >
</template>

<script>
export default {
  name: 'BaseTextInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
  }
}
</script>

