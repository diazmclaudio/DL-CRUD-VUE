<template>
  <div>
    <ListaUser />
    <CreateUser />
  </div>
</template>

<script>
// @ is an alias to /src
import ListaUser from '@/components/ListaUser.vue'
import CreateUser from '@/components/CreateUser.vue'

export default {
  name: 'Home',
  components: {
    ListaUser,
    CreateUser
  }
}
</script>
