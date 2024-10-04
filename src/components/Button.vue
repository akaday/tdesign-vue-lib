<template>
  <button class="t-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'TButton',
};
</script>

<style scoped>
.t-button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
