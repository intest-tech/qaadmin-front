<template>
    <Card title="项目列表">
        <Button slot="extra">add</Button>
        <Row>
            <Table border :columns="columns" :data="data" @on-row-click="gotoProject"></Table>
        </Row>
        <Row>
            <div style="margin: 10px;overflow: hidden">
                <div style="float: right;">
                    <!--TODO: changePage function, see table part of iview documents-->
                    <Page :total="100" :current="1" @on-change="changePage"></Page>
                </div>
            </div>
        </Row>
    </Card>
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
                        title: 'Status',
                        key: 'status'
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
                getProject().then(([err, data, res]) => {
                    if (err) {
                        return;
                    }
                    vm.data = data;
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
