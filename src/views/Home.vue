<template>
  <div class="w-screen">
    <BaseHeading>Welcome to the online photobooth</BaseHeading>
    <div class="text-center">
      <p>The online photobooth is an application to quickly setup a photobooth using a tablet, laptop or a raspberry pi.</p>
      <p>You can even use a Canon Camera or your webcam.</p>
      <p>Login with your google account and create a shared album. All pictures taken will end up in there!</p>
      <p>Add some frames that can be used to decorate the images.</p>
      <p>The use can choose to take a single picture or a gif containing 4 pictures.</p>
    </div>
    <div class="flex justify-around mt-8">
      <BaseButton @click="$router.push('/login')">I know how it works and want to get started.</BaseButton>
      <BaseButton>I need additional info how to use this application.</BaseButton>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
}
</script>
