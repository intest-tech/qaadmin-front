<template>
    <Card>
        <p slot="title">{{ project_id }} 版本列表</p>
        <VersionCreate :project_id="project_id" slot="extra"></VersionCreate>
        <Row style="padding: 2px" v-for="item in version_list">
            <VersionCard :version="item.name" @click="gotoVersion"></VersionCard>
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
                version_list: []
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
                getVersion(vm.project_id).then(([err, data, res]) => {
                    vm.version_list = data.data
                })
            },
            gotoVersion(data) {
                var vm = this;
                // 跳转到 /project/<project_id> 页面
                vm.$router.push({path: `/project/${data.name}`});
            }
        }
    }
</script>

<style scoped>

</style>