<template>
    <div style="background:#eee;padding: 1px">
        <Card :bordered="true">
            <Row type="flex" justify="center">
                <Col span="4">
                    <Button icon="md-checkmark-circle" :type="version_detail.status" style="position: center" ghost>{{ version_detail.status }}</Button>
                </Col>
                <Col span="6">
                    <router-link :to="{ path: `/project/${project_id}/v/${version_detail.name}` }">
                        <h4>{{ version_detail.name }}</h4>
                    </router-link>
                </Col>
                <Col span="8">
                        <Tooltip :content="stage.title" placement="top" v-for="(stage, index) in version_detail.stages">
                            <Button shape="circle" size="small" icon="md-close" type="error" ghost v-if="stage.status==='error'"></Button>
                            <Button shape="circle" size="small" icon="md-checkmark" type="success" ghost v-else></Button>

                        </Tooltip>
                </Col>
                <Col span="6">
                    <div class="version-list-datetime">
                        <Icon type="md-calendar" /> {{ version_detail.datetime }}
                    </div>
                </Col>
            </Row>
        </Card>
    </div>
</template>

<script>
    export default {
        name: "VersionCard",
        props: ['version_detail'],
        data() {
            return {
                project_id: this.$route.params.project_id
            }
        }
    }
</script>
<style>
    .version-list-datetime {
        color: #707070;
    }
</style>