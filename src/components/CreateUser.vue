<template>
  <div class="container text-left mt-5 pt-4">

      
      <h2 class="text-center">Creación de Usuario</h2>
    
    <b-form v-if="show" class="mb-5" @submit.prevent="agregar">
       <b-form-group id="input-group-1" label="Nombre" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.nombre"
          required
          placeholder="Escribe tu nombre"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Apellido" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.apellido"
          required
          placeholder="Escribe tu apellido"
        ></b-form-input>
      </b-form-group>
      
      <b-form-group
        id="input-group-3"
        label="Edad"
        label-for="input-3"
      >
        <b-form-input
          id="input-3"
          v-model="form.anio"
          type="number"
          required
          placeholder="Escriba su edad"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="success" class="mr-2">Agregar</b-button>
    </b-form>
      
  </div>
</template>

<script>
export default {
  name: 'CreateUser',
  data() {
    return {
      form: {
        nombre: '',
        apellido: '',
        anio: ''
      },
      show: true
    }
  },
  methods: {
    agregar() {
      if (this.form.nombre && this.form.apellido && this.form.anio){
        this.$store.dispatch('agregandoPacientes', this.form)
      } else {
        console.log('no carga');
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>