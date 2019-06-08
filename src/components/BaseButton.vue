<template>
  <button class="bg-indigo-500 hover:bg-indigo-300 text-white p-4" v-on="$listeners">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'BaseButton'
}
</script>

