<template>
    <div class="project-list">
        <h2>项目列表</h2>
        <Table border :columns="columns" :data="data" @on-row-click="gotoProject"></Table>
        <Page :total="100" show-elevator/>
    </div>
</template>

<script>
    // import ProjectCard from '@/components/project/Card.vue'
    import {getProject} from '../apis/project'

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
                getProject().then((err, res) => {
                    debugger
                    if (err){
                        return;
                    }
                    vm.data = res.data;
                });
            },
            gotoProject(data) {
                var vm = this;
                // 跳转到 /project/<project_id> 页面
                vm.$router.push({path: `/project/${data.name}`});
            }
        }
    }
</script>
