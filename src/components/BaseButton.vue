<template>
  <button
    class="hover:bg-indigo-300 text-white shadow-md"
    :class="[classSize, classActivated]"
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
      activated: {
        type: Boolean,
        default: false,
      }
  },
  computed: {
    classSize() {
      const { size } = this;

      if(size === 'large') {
        return 'py-8 px-12';
      }

      return 'p-4';
    },
    classActivated() {
      const { activated } = this;

      if(activated) {
        return 'bg-red-800';
      }

      return 'bg-indigo-500';
    },
  }
}
</script>

