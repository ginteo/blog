<template>
  <code><slot /></code>
</template>

<style lang="scss" scoped>
code {
  @apply mx-1 rounded-md bg-gray-200 p-1  before:content-[''] after:content-[''];
}
</style>
