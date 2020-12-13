import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../main';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pacientes: [],
  },
  getters: {
    mostrarPacientes(state) {
      return state.pacientes;
    }
  },
  mutations: {
    mutarPacientes(state, arreglo) {
      state.pacientes = arreglo;
    }
  },
  actions: {
    traerData({commit}) {
      db.collection("pacientes").onSnapshot(respuesta => {
        let arreglo = [];
        respuesta.forEach(element => {
          arreglo.push({
            nombre: element.data().nombre,
            apellido: element.data().apellido,
            anio: element.data().anio,
            id: element.id
          }) 
        });
        commit('mutarPacientes', arreglo);
      });
    },
    agregandoPacientes(context,data){
      db.collection("pacientes").add({
        nombre: data.nombre,
        apellido: data.apellido,
        anio: data.anio
      }).then(resp => {
        console.log(resp);
      })
    },
    eliminarPaciente(context, id) {
      db.collection("pacientes").doc(id).delete().then(() => {
      }).catch (error => {
        console.log(error);
      })
    },
  },

  
  modules: {
  }
})
