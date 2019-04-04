<template>
    <Card title="项目列表">
        <ProjectCreate slot="extra"></ProjectCreate>
        <!--<Button slot="extra">add</Button>-->
        <Row>
            <Table border :columns="columns" :data="data_list" @on-row-click="gotoProject"></Table>
        </Row>
        <Row>
            <div style="margin: 10px;overflow: hidden">
                <div style="float: right;">
                    <!--TODO: changePage function, see table part of iview documents-->
                    <Page :total="total" :page-size="10" :current="1" @on-change="changePage"></Page>
                </div>
            </div>
        </Row>
    </Card>
</template>

<script>
    import ProjectCreate from '@/components/project/Create.vue'
    import {getProject} from '../apis/project'

    export default {
        name: "ProjectList",
        components: {
            ProjectCreate
        },
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
                        title: 'Status',
                        key: 'status'
                    }
                ],
                data_list: [],
                total: 0,
            }
        },
        created() {
            this.getProjectList(1);
        },
        methods: {
            getProjectList(page) {
                var vm = this;
                getProject(page).then(([err, data, res]) => {
                    if (err) {
                        return;
                    }
                    vm.data_list = data.data;
                    vm.total = data.total;
                });
            },
            gotoProject(data) {
                var vm = this;
                // 跳转到 /project/<project_id> 页面
                vm.$router.push({path: `/project/${data.name}`});
            },
            changePage(data){
                this.getProjectList(data);
            }
        }
    }
</script>
