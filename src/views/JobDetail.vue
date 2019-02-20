<template>
    <div>
        <!--<VersionSteps></VersionSteps>-->
        <Row :gutter="16">
            <Col span="16">
                <Tabs>
                    <TabPane label="Overview" icon="md-stats">标签二的内容</TabPane>
                    <TabPane label="Traceback" icon="md-code">
                        <Traceback></Traceback>
                    </TabPane>
                </Tabs>
            </Col>
            <Col span="8">
                <h2>Version xxx</h2>
                <Divider/>
                步骤选择:
                <br/>
                <Select v-model="defautOption" style="width:200px" @on-change="getJobListOfStage">
                    <Option v-for="item in pipeLineList" :value="item" :key="item">{{ item }}</Option>
                </Select>
                <Divider/>
                <ul style="list-style-type: none">
                    <li>
                        111
                    </li>
                    <li>
                        222
                    </li>
                    <li>
                        333
                    </li>
                </ul>
            </Col>
        </Row>
    </div>
</template>

<script>
    import Traceback from '@/components/job/Traceback.vue'

    export default {
        name: "JobDetail",
        components: {
            Traceback
        },
        data() {
            return {
                project_id: this.$route.params.project_id,
                version: this.$route.params.version,
                pipeLineList: [],
                // 下拉框默认选项
                defautOption: ''
            }
        },
        created() {
            this.getPipeline();
        },
        methods: {
            getPipeline() {
                // 获取该版本的Pipeline列表
                var vm = this;
                vm.$http
                    .get(`http://0.0.0.0:5000/api/version/get-pipeline?project=${vm.project_id}&version=${vm.version}`)
                    .then(res => {
                        vm.pipeLineList = res.data.data.pipeline;
                        vm.defautOption = vm.pipeLineList[0]
                    })
            },
            getJobListOfStage(option) {
                // 获取某一步骤的所有Job
                debugger;
                console.log(option)
            },
            getJobDetail() {
                // 获取某一Job的具体信息

            }
        }
    }
</script>

<style scoped>

</style>