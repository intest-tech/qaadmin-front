<!--Deprecated-->
<template>
    <div style="background:#eee;padding: 1px">
        <Card :bordered="true">
            <p slot="title"> {{ project_id }}</p>
            <p>Content of no border type. Content of no border type. Content of no border type. Content of no border
                type. </p>
        </Card>
    </div>
</template>

<script>
    export default {
        name: "ListCard",
        data() {
            return {
                project_id: "test111"
            }
        }
    }
</script>
