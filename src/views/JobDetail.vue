<template>
    <div>
        <!--<VersionSteps></VersionSteps>-->
        <Row :gutter="16">
            <Col span="16">
                <Tabs>
                    <TabPane label="Overview" icon="logo-windows">标签二的内容</TabPane>
                    <TabPane label="Traceback" icon="logo-apple">
                        <Traceback></Traceback>
                    </TabPane>
                </Tabs>
            </Col>
            <Col span="8">
                <h2>Version xxx</h2>
                <Divider/>
                bbb
                <br/>
                <Select v-model="model1" style="width:200px">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
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
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                ],
                model1: ''
            }
        }
    }
</script>

<style scoped>

</style>