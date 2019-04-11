<template>
    <Card>
        <p slot="title">{{ project_id }} 版本列表</p>
        <VersionCreate :project_id="project_id" slot="extra"></VersionCreate>
        <Table :data="versionList" :columns="versionColums"></Table>
        <!--<Row style="padding: 2px" v-for="item in version_list">-->
            <!--<VersionCard :version_detail="item" @click="gotoVersion"></VersionCard>-->
        <!--</Row>-->
        <Row>
            <div style="margin: 10px;overflow: hidden">
                <div style="float: right;">
                    <Page :total="total" :current="1" @on-change="changePage"></Page>
                </div>
            </div>
        </Row>
    </Card>
</template>
<script>
    import VersionCard from '@/components/version/Card.vue'
    import VersionCreate from '@/components/version/Create.vue'
    import {getVersion} from '../apis/version'

    export default {
        name: "VersionList",
        components: {
            VersionCard,
            VersionCreate
        },
        data() {
            return {
                // 获取当前路由中的变量值
                project_id: this.$route.params.project_id,
                version_list: [],
                versionColums: [
                    {
                        title: 'Status',
                        key: 'status',
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
                        title: 'Version',
                        key: 'version',
                        render: (h, params) => {
                            const row = params.row;
                            return h('router-link', {
                                props:{
                                    to: {
                                        path: `/project/${this.project_id}/v/${row.name}`
                                    }
                                }
                            }, [
                                h('h4', row.name)
                            ])
                        }
                    },
                    {
                        title: 'Updated Time',
                        key: 'datetime',
                        render: (h, params) => {
                            const row = params.row;
                            return h('div', {
                                'style': {
                                    color: '#707070'
                                }}, [
                                h('icon', {
                                    props: {
                                        type:"md-calendar"
                                    }
                                }),
                                row.datetime
                            ]);
                        }
                    }
                ],
                versionList: [],
                total: 0,
            }
        },
        created() {
            this.getVersionList();
        },
        methods: {
            getVersionList(page) {
                if (!page) {
                    page = 1
                }
                var vm = this;
                getVersion(vm.project_id, page).then(([err, data, res]) => {
                    // vm.version_list = data.data;
                    vm.versionList = data.data;
                    vm.total = data.total;
                })
            },
            gotoVersion(data) {
                var vm = this;
                // 跳转到 /project/<project_id> 页面
                vm.$router.push({path: `/project/${data.name}`});
            },
            changePage(page) {
                this.getVersionList(page);
            }
        }
    }
</script>

<style scoped>

</style>