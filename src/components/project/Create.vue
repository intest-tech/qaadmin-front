<template>
    <div>
        <Button @click="drawOpened = true" type="primary">Create</Button>
        <Drawer
                title="Create"
                v-model="drawOpened"
                width="720"
                :mask-closable="false"
                :styles="styles"
        >
            <Form :model="formData">
                <Row :gutter="32">
                    <Col span="24">
                        <FormItem label="项目名称" label-position="top">
                            <Input v-model="formData.name" placeholder="输入项目名"/>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="32">
                    <Col span="24">
                        <FormItem label="测试流程" label-position="top">
                            <Input v-model="formData.pipeline" placeholder="输入Pipeline, 每个阶段用英文逗号分隔, 如: unittest,apitest"/>
                        </FormItem>
                    </Col>
                </Row>
                <FormItem label="项目描述" label-position="top">
                    <Input type="textarea" v-model="formData.desc" :rows="4"
                           placeholder="请输入详细的项目描述信息"/>
                </FormItem>
            </Form>
            <div class="demo-drawer-footer">
                <Button style="margin-right: 8px" @click="drawOpened = false">Cancel</Button>
                <Button type="primary" @click="handleSubmit">Submit</Button>
            </div>
        </Drawer>
    </div>
</template>
<script>
    import {createProject} from "../../apis/project";

    export default {
        name: "ProjectCreate",
        data() {
            return {
                drawOpened: false,
                styles: {
                    height: 'calc(100% - 55px)',
                    overflow: 'auto',
                    paddingBottom: '53px',
                    position: 'static'
                },
                formData: {
                    name: '',
                    pipeline: '',
                    desc: ''
                },
            }
        },
        methods: {
            handleSubmit() {
                var vm = this;
                createProject(vm.formData).then(([err, data, res]) => {
                    vm.drawOpened = false
                })
                // TODO: 更优雅的刷新
                // 创建完成立即刷新页面
                location.reload()
            },
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
