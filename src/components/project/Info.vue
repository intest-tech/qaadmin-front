<template>
    <Drawer
            title="项目详情"
            v-model="drawOpened"
            width="720"
            :mask-closable="false"
            :closable="false"
            :styles="styles"
    >
        <Form :model="formData">
            <Row :gutter="32">
                <Col span="24" style="margin-bottom: 24px;">
                    <label class="ivu-form-item-label">项目名称</label>
                    <Input :value="projectDetail._id" disabled/>
                </Col>
            </Row>
            <Row :gutter="32">
                <Col span="24">
                    <FormItem label="测试流程" label-position="top">
                        <Input v-model="formData.pipeline" placeholder="输入Pipeline, 每个阶段用英文逗号分隔, 如: unittest,apitest" :value="projectDetail.pipeline"/>
                    </FormItem>
                </Col>
            </Row>
            <Row :gutter="32">
                <Col span="24" style="margin-bottom: 24px;">
                    <label class="ivu-form-item-label">Access Token</label>
                    <Input :value="projectDetail.token" disabled/>
                </Col>
            </Row>
            <FormItem label="项目描述" label-position="top">
                <Input type="textarea" v-model="formData.desc" :rows="4"
                       />
            </FormItem>
        </Form>
        <div class="demo-drawer-footer">
            <Button style="margin-right: 8px" @click="handleClose()">Cancel</Button>
            <Button type="primary" @click="handleSubmit">Submit</Button>
        </div>
    </Drawer>
</template>
<script>
    import {updateProject} from "../../apis/project";

    export default {
        name: "ProjectInfo",
        props: ['drawOpened', 'projectDetail'],
        data() {
            return {
                styles: {
                    height: 'calc(100% - 55px)',
                    overflow: 'auto',
                    paddingBottom: '53px',
                    position: 'static'
                },
                formData: {
                    pipeline: '',
                    desc: ''
                },
            }
        },
        watch: {
            projectDetail(val){
                this.formData.desc = val.desc;
                this.formData.pipeline = val.pipeline;
            }

        },
        methods: {
            handleSubmit() {
                var vm = this;
                updateProject(vm.projectDetail._id, vm.formData).then(([err, data, res]) => {
                    this.$emit('on-close',false)
                })
                // TODO: 更优雅的刷新
                // 创建完成立即刷新页面
                location.reload()
            },
            handleClose(){
                this.$emit('on-close',false)
            }
        }
    }
</script>
<style>
    .demo-drawer-footer {
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        border-top: 1px solid #e8e8e8;
        padding: 10px 16px;
        text-align: right;
        background: #fff;
    }
</style>
