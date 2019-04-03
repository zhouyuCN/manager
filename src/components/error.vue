<template>
  <img class="error" src="../assets/404page.jpg" alt>
</template>

<script>
export default {
  name: "error",
  created() {
    setTimeout(() => {
      this.$router.push("/login");
    }, 3000);
  }
};
</script>

<style>
.error {
  display: block;
  width: 100%;
}
</style>
