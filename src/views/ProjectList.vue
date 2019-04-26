<template>
    <Card title="项目列表">
        <ProjectCreate slot="extra"></ProjectCreate>
        <Row>
            <Table border :columns="columns" :data="data_list" @on-row-click="gotoProject">
            </Table>
        </Row>
        <Row>
            <div style="margin: 10px;overflow: hidden">
                <div style="float: right;">
                    <Page :total="total" :page-size="10" :current="1" @on-change="changePage"></Page>
                </div>
            </div>
        </Row>
        <ProjectInfo :drawOpened="drawOpened" :projectDetail="projectDetail" @on-close="listenDrawStatus"></ProjectInfo>
    </Card>
</template>

<script>
    import ProjectCreate from '@/components/project/Create.vue'
    import ProjectInfo from '@/components/project/Info.vue'
    import {getProject, getProjectDetail} from '../apis/project'

    export default {
        name: "ProjectList",
        components: {
            ProjectCreate,
            ProjectInfo
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
                        key: 'status',
                        width: 100,
                        align: 'center',
                        render: (h, params) => {
                            const row = params.row;
                            var color, text;
                            if (row.status === 'success') {
                                color = 'success';
                                text = 'Success';
                            } else if (row.status === 'error') {
                                color = 'error';
                                text = 'Error';
                            } else {
                                color = 'default';
                                text = 'waiting';
                            }
                            return h('Tag', {
                                props: {
                                    color: color
                                }
                            }, text);
                        }
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 100,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.drawOpened = true
                                            this.projectID = params.row.name
                                            this.getProjectInfo()
                                        }
                                    },
                                    nativeOn: {
                                        click: (event) => {
                                            event.stopPropagation();
                                        }
                                    }
                                }, 'View'),
                                // h('Button', {
                                //     props: {
                                //         type: 'error',
                                //         size: 'small'
                                //     },
                                //     on: {
                                //         click: () => {
                                //             this.remove(params.index)
                                //         }
                                //     },
                                //     nativeOn: {
                                //         click: (event) => {
                                //             event.stopPropagation();
                                //         }
                                //     }
                                // }, 'Delete')
                            ]);
                        }
                    }
                ],
                projectID: '',
                projectDetail: {},
                data_list: [],
                total: 0,
                drawOpened: false
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
            changePage(data) {
                this.getProjectList(data);
            },
            getProjectInfo() {
                var vm = this;
                getProjectDetail(vm.projectID).then(([err, data, res]) => {
                    vm.projectDetail = data
                    console.info(err, data, res)
                })
            },
            listenDrawStatus: function (status) {
                this.drawOpened = status
            }
        }
    }
</script>
