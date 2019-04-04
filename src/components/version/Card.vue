<template>
    <div style="background:#eee;padding: 1px">
        <Card :bordered="true">
            <Row>
                <Col span="6">
                    TODO: status
                </Col>
                <Col span="6">
                    <router-link :to="{ path: `/project/${project_id}/v/${version}` }">{{ version }}</router-link>
                </Col>
                <Col span="6">
                    TODO: Pipeline
                </Col>
                <Col span="6">
                    TODO: datetime
                </Col>
            </Row>
        </Card>
    </div>
</template>

<script>
    export default {
        name: "VersionCard",
        props: ['version'],
        data() {
            return {
                project_id: this.$route.params.project_id
            }
        }
    }
</script>
