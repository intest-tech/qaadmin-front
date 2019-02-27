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
                    <TimelineItem v-for="item in jobList" :key="item._id.$oid" color="green"><a
                            @click="getJobDetails(item._id.$oid)">{{ item.stage }}</a></TimelineItem>
                </Timeline>
            </Col>
        </Row>
    </div>
</template>

<script>
    import Traceback from '@/components/job/Traceback.vue'
    import {getVersionDetails} from "../apis/version";
    import {getJobList, getJobDetails} from "../apis/job"

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
                getVersionDetails(this.project_id, this.version).then(([err, data, res]) => {
                    vm.pipeLineList = data.pipeline;
                    vm.defautOption = vm.pipeLineList[0];
                    vm.getJobListOfStage(vm.defautOption);
                });
            },
            getJobListOfStage(option) {
                // 获取某一步骤的所有Job
                var vm = this;
                getJobList(vm.project_id, vm.version, option).then(([err, data, res]) => {
                    vm.jobList = data;
                    if (vm.jobList.length !== 0) {
                        vm.defautJob = vm.jobList[0]._id.$oid;
                        vm.getJobDetails(vm.defautJob);
                    }
                })
            },
            getJobDetails(id) {
                // 获取某一Job的具体信息
                var vm = this;
                getJobDetails(id).then(([err, data, res]) => {
                    vm.jobDetail = data.data;
                });
            }
        }
    }
</script>

<style scoped>

</style>