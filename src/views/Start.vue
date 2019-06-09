<template>
  <div>
    <BaseHeading>{{ $store.state.heading || 'Welcome to the party!'}}</BaseHeading>
    <div class="flex justify-around">
      <BaseButton size="large">Take a Picture</BaseButton>
      <BaseButton size="large">Take a GIF</BaseButton>
    </div>
  </div>
</template>
