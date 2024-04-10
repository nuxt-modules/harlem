<template>
  <div class="app">
    <h1>Hello {{ fullName }}</h1>
    <input
      v-model="firstName"
      type="text"
      placeholder="First name"
    >
    <input
      v-model="lastName"
      type="text"
      placeholder="Last name"
    >
  </div>
</template>

<script lang="ts" setup>
import { state, fullName, setFirstName, setLastName } from '~/store/user'

const firstName = computed({
  get: () => state.firstName,
  set: value => setFirstName(value),
})

const lastName = computed({
  get: () => state.lastName,
  set: value => setLastName(value),
})

setLastName('Doe')
</script>
