<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <section>
    <div style="margin-bottom:20px;">
      <VisButton color="blue">主要按钮</VisButton>
      <VisButton color="green">绿色按钮</VisButton>
      <VisButton color="gray">灰色按钮</VisButton>
      <VisButton color="yellow">黄色按钮</VisButton>
      <VisButton color="red">红色按钮</VisButton>
    </div>
    <div style="margin-bottom:20px;">
      <VisButton color="blue" plain>朴素按钮</VisButton>
      <VisButton color="green" plain>绿色按钮</VisButton>
      <VisButton color="gray" plain>灰色按钮</VisButton>
      <VisButton color="yellow" plain>黄色按钮</VisButton>
      <VisButton color="red" plain>红色按钮</VisButton>
    </div>
    <div style="margin-bottom:20px;">
      <VisButton size="small" plain>小按钮</VisButton>
      <VisButton size="medium" plain>中按钮</VisButton>
      <VisButton size="large" plain>大按钮</VisButton>
    </div>
    <div style="margin-bottom:20px;">
      <VisButton color="blue" round plain icon="search">搜索按钮</VisButton>
      <VisButton color="green" round plain icon="edit">编辑按钮</VisButton>
      <VisButton color="yellow" round plain icon="message">提示按钮</VisButton>
      <VisButton color="red" round plain icon="delete">删除按钮</VisButton>
    </div>
    <div style="margin-bottom:20px;">
      <VisButton color="blue" round plain icon="search"></VisButton>
      <VisButton color="green" round plain icon="edit"></VisButton>
      <VisButton color="gray" round plain icon="check"></VisButton>
      <VisButton color="yellow" round plain icon="message"></VisButton>
      <VisButton color="red" round plain icon="delete"></VisButton>
    </div>
  </section>
  </main>

</template>
