<template>
    <div class="project-list">
        <h2>project xxx</h2>
        <ul style="list-style-type: none">
            <li>
                <ProjectCard></ProjectCard>
            </li>
            <li>
                <ProjectCard></ProjectCard>
            </li>
            <li>
                <ProjectCard></ProjectCard>
            </li>
            <li>
                <ProjectCard></ProjectCard>
            </li>
            <li>
                <ProjectCard></ProjectCard>
            </li>
            <li>
                <ProjectCard></ProjectCard>
            </li>
            <li>
                <ProjectCard></ProjectCard>
            </li>
            <li>
                <ProjectCard></ProjectCard>
            </li>
        </ul>
        <Page :total="100" show-elevator/>
    </div>
</template>

<script>
    import ProjectCard from '@/components/project/Card.vue'

    export default {
        name: "ProjectList",
        components: {
            ProjectCard
        }
    }
</script>
