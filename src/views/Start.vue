<template>
  <div>
    <BaseHeading>{{ $store.state.heading || 'Welcome to the party!'}}</BaseHeading>
    <div class="flex justify-around">
      <BaseButton v-if="$store.state.settings.format.single" size="large">Take a Picture</BaseButton>
      <BaseButton v-if="$store.state.settings.format.gif" size="large">Take a GIF</BaseButton>
    </div>
  </div>
</template>
