<template>
  <div>
    <BaseHeading>Settings</BaseHeading>
    <ul class="text-center">
      <li class="flex flex-col">
        <BaseHeading :level="3">Camera</BaseHeading>
        <div>
          <BaseButton class="mr-4">Webcam</BaseButton>
          <BaseTextInput type="text" placeholder="192.168.0.104"/>
        </div>
      </li>
      <li class="flex flex-col">
        <BaseHeading :level="3">Frames</BaseHeading>
        <div>
          <input type="file">
        </div>
      </li>
      <li class="flex flex-col">
        <BaseHeading :level="3">FFMPEG</BaseHeading>
        <div>
          <BaseButton class="mr-4">Use online server</BaseButton>
          <BaseTextInput type="text" placeholder="192.168.0.104"/>
        </div>
      </li>
    </ul>
    <router-link to="/login">
      <BaseButton>Continue</BaseButton>
    </router-link>
  </div>
</template>
