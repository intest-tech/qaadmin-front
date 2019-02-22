<template>
    <div>
        <!--<VersionSteps></VersionSteps>-->
        <Row :gutter="16">
            <Col span="16">
                <Tabs>
                    <TabPane label="Overview" icon="md-stats">标签二的内容</TabPane>
                    <TabPane label="Traceback" icon="md-code">
                        <!--传入traceback内容-->
                        <Traceback :details="jobDetail.details"></Traceback>
                    </TabPane>
                </Tabs>
            </Col>
            <Col span="8">
                <h2>Version {{ version }}</h2>
                <Divider/>
                步骤选择:
                <br/>
                <Select v-model="defautOption" style="width:200px" @on-change="getJobListOfStage">
                    <Option v-for="item in pipeLineList" :value="item" :key="item">{{ item }}</Option>
                </Select>
                <Divider/>
                <Timeline>
                    <TimelineItem v-for="item in jobList" :key="item._id.$oid" color="green"><a @click="getJobDetail(item._id.$oid)">{{ item.stage }}</a></TimelineItem>
                </Timeline>
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
                // 下拉框选项
                pipeLineList: [],
                defautOption: '',
                // 任务列表
                jobList: [],
                defautJob: '',
                // 任务详情
                jobDetail: {}
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
                        vm.defautOption = vm.pipeLineList[0];
                        vm.getJobListOfStage(vm.defautOption);
                    })
            },
            getJobListOfStage(option) {
                // 获取某一步骤的所有Job
                var vm = this;
                vm.$http
                    .get(`http://0.0.0.0:5000/api/version/get-job-list?project=${vm.project_id}&version=${vm.version}&stage=${option}`)
                    .then(res => {
                        vm.jobList = res.data.data;
                        if (vm.jobList.length !== 0){
                            vm.defautJob = vm.jobList[0]._id.$oid;
                            vm.getJobDetail(vm.defautJob);
                        }
                    })
            },
            getJobDetail(id) {
                // 获取某一Job的具体信息
                var vm = this;
                vm.$http
                    .get(`http://0.0.0.0:5000/api/job?id=${id}`)
                    .then(res => {
                        vm.jobDetail = res.data.data;
                    })
            }
        }
    }
</script>

<style scoped>

</style>