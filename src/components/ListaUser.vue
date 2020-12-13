<template>
    <div class="container">
        <h2 class="mb-5">Listado de usuarios</h2>

        <el-table
            :data="dataUsers"
            style="width: 70%">
            <el-table-column
                label="Nombre"
                width="180">
                <template slot-scope="scope">
                    <div slot="reference" class="name-wrapper">
                        <el-tag size="medium">{{ scope.row.nombre }}</el-tag>
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                label="Apellido"
                width="180">
                <template slot-scope="scope">
                    <div slot="reference" class="name-wrapper">
                        <el-tag size="medium">{{ scope.row.apellido }}</el-tag>
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                label="Edad"
                width="250">
                <template slot-scope="scope">
                    <div slot="reference" class="name-wrapper">
                        <el-tag size="medium">{{ scope.row.anio }}</el-tag>
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                label="Acción">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.row.id)">Eliminar</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: 'ListaUser',
    computed: {
        dataUsers() {
            return this.$store.getters.mostrarPacientes;
        }
    },
    methods: {
        handleDelete(id) {
            this.$store.dispatch('eliminarPaciente', id);
        }
    }
}
</script>