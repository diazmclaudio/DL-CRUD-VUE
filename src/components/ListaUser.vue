<template>
    <div class="container mb-5">
        <h1 class="mb-5">Lista de usuarios</h1>

        <el-table
            :data="dataUsers"
            style="width: 100%">
            <el-table-column
                label="ID"
                width="250">
                <template slot-scope="scope">
                    <i class="el-icon-s-custom"></i>
                    <span style="margin-left: 10px">{{ scope.row.id }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="Nombre"
                width="180">
                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                    <p>Name: {{ scope.row.nombre }}</p>
                    <div slot="reference" class="name-wrapper">
                        <el-tag size="medium">{{ scope.row.nombre }}</el-tag>
                    </div>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column
                label="Apellido"
                width="180">
                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                    <p>Name: {{ scope.row.apellido }}</p>
                    <div slot="reference" class="name-wrapper">
                        <el-tag size="medium">{{ scope.row.apellido }}</el-tag>
                    </div>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column
                label="Edad"
                width="250">
                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                    <p>Name: {{ scope.row.anio }}</p>
                    <div slot="reference" class="name-wrapper">
                        <el-tag size="medium">{{ scope.row.anio }}</el-tag>
                    </div>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column
                label="Operaciones">
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