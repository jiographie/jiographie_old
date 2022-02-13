
<template>
    <p>뷰 컴포넌트 입니다.</p>
</template>

<script>
  export default {
    name: 'globalComponent',
      props: {
      msg: String
    }
  }

</script>

<style scoped>
div {
  padding: 20px;
}

div span {
  margin: 20px;
}
</style>