<template>
    <Steps :current="1" direction="vertical">
        <Step title="单元测试" content="这里是该步骤的描述信息"></Step>
        <Step title="冒烟测试" content="这里是该步骤的描述信息"></Step>
        <Step title="接口自动化测试" content="这里是该步骤的描述信息"></Step>
        <Step title="UI自动化测试" content="这里是该步骤的描述信息"></Step>
        <Step title="手工回归测试" content="这里是该步骤的描述信息"></Step>
        <Step title="手工回归测试" content="这里是该步骤的描述信息"></Step>
    </Steps>
</template>

<script>
    export default {
        name: "VersionSteps"
    }
</script>

<style scoped>

</style>