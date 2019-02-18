<template>
    <div class="project-list">
        <h2>项目列表</h2>
        <Table border :columns="columns" :data="data" @on-row-click="gotoProject"></Table>
        <Page :total="100" show-elevator/>
    </div>
</template>

<script>
    // import ProjectCard from '@/components/project/Card.vue'

    export default {
        name: "ProjectList",
        // components: {
        //     ProjectCard
        // },
        data() {
            return {
                columns: [
                    {
                        title: 'Name',
                        key: 'name',
                        sortable: true
                    },
                    {
                        title: 'Last version',
                        key: 'version',
                    },
                    {
                        title: 'Success',
                        key: 'success'
                    },
                    {
                        title: 'Has record',
                        key: 'hasRecord',
                    }
                ],
                data: [],
            }
        },
        created() {
            this.getProjectList();
        },
        methods: {
            getProjectList(page) {
                var vm = this;
                vm.$http
                    .get(`http://0.0.0.0:5000/api/test-result/latest`)
                    .then(res => {
                        vm.data = res.data.data.map(x => {
                            return {
                                name: x.project,
                                hasRecord: x.has_record,
                                version: x.version,
                                success: x.has_record === true ? x.success : ""
                            }
                        });
                    })
            },
            gotoProject(data) {
                var vm = this;
                vm.$router.push({path: '/project/'+data.name})
            }
        }
    }
</script>
