<template>
    <div style="background:#eee;padding: 1px">
        <Card :bordered="true">
            <router-link :to="{ path: `/project/${project_id}/v/${version}` }">{{ version }}</router-link>
            <p>Content of no border type. Content of no border type. Content of no border type. Content of no border
                type. </p>
        </Card>
    </div>
</template>

<script>
    export default {
        name: "VersionCard",
        props: ['version'],
        data() {
            return{
                project_id: this.$route.params.project_id
            }
        }
    }
</script>
