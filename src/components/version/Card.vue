<template>
    <div style="background:#eee;padding: 1px">
        <Card :bordered="true">
            <p slot="title">No border title</p>
            <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
        </Card>
    </div>
</template>

<script>
    export default {
        name: "VersionCard"
    }
</script>
