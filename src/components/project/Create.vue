<template>
    <div>
        <Button @click="value3 = true" type="primary">Create</Button>
        <Drawer
                title="Create"
                v-model="value3"
                width="720"
                :mask-closable="false"
                :styles="styles"
        >
            <Form :model="formData">
                <Row :gutter="32">
                    <Col span="24">
                        <FormItem label="Project" label-position="top">
                            <Input v-model="formData.name" placeholder="please enter new project name"/>
                        </FormItem>
                    </Col>
                </Row>
                <FormItem label="Description" label-position="top">
                    <Input type="textarea" v-model="formData.desc" :rows="4"
                           placeholder="please enter the description"/>
                </FormItem>
            </Form>
            <div class="demo-drawer-footer">
                <Button style="margin-right: 8px" @click="value3 = false">Cancel</Button>
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
                value3: false,
                styles: {
                    height: 'calc(100% - 55px)',
                    overflow: 'auto',
                    paddingBottom: '53px',
                    position: 'static'
                },
                formData: {
                    name: '',
                    desc: ''
                },
            }
        },
        methods: {
            handleSubmit() {
                var vm = this;
                createProject(vm.formData).then(([err, data, res]) => {
                    vm.value3 = false
                })
                // 创建完成立即刷新页面
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
