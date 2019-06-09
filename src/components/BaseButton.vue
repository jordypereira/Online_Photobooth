<template>
  <button
    class="bg-indigo-500 hover:bg-indigo-300 text-white shadow-md"
    :class="[ClassSize]"
    v-on="$listeners"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
      size: {
        type: String,
        default: 'normal'
      },
  },
  computed: {
    ClassSize() {
      const { size } = this;

      if(size === 'large') {
        return 'py-8 px-12';
      }

      return 'p-4';
    }
  }
}
</script>

