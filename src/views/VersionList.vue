<template>
    <div>
        <div class="version-head">
            <h2>project {{ project_id }}</h2>
            <VersionCreate :project_id="project_id"></VersionCreate>
        </div>
        <ul style="list-style-type: none">
            <li v-for="item in version_list">
                <VersionCard :version="item.name" @click="gotoVersion"></VersionCard>
            </li>
        </ul>
        <Page :total="100" show-elevator/>
    </div>
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