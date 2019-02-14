<template>
    <div>
        <h2>project xxx</h2>
        <ul style="list-style-type: none">
            <li>
                <VersionCard></VersionCard>
            </li>
            <li>
                <VersionCard></VersionCard>
            </li>
            <li>
                <VersionCard></VersionCard>
            </li>
        </ul>
        <Page :total="100" show-elevator/>
    </div>
</template>
<script>
    import VersionCard from '@/components/version/Card.vue'

    export default {
        name: "VersionList",
        components: {
            VersionCard
        }
    }
</script>

<style scoped>

</style>