<template>
    <Collapse v-model="value2" accordion>
        <Panel v-for="(item, index) in details" :key='index' :name='""+index'>
            {{ item.case_name }}
            <pre slot="content">{{ item.note }}</pre>
        </Panel>
    </Collapse>
</template>

<script>
    export default {
        name: "Traceback",
        props: ['details'],
        data() {
            return {
                value2: '1'
            }
        }
    }
</script>
