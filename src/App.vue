<template>
  <div id="app" class="min-h-screen flex flex-col">
    <div class="flex-grow">
      <router-view/>
    </div>
    <footer class="w-screen flex justify-center my-6">
      <span>
        Made by the awesome
        <a href="https://jordypereira.be" class="text-orange-500">Jordy Pereira</a>!
      </span>
    </footer>
  </div>
</template>
