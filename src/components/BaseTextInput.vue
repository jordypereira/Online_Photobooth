<template>
  <input
    type="text"
    class="border border-blue-500"
    :placeholder="placeholder"
    :value="value"
    @input="$emit('input', $event.target.value)"
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

