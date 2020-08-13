<template>
    <BaseSection>
        <template #header>
            <div id="experience" class="text-h5 text-sm-h4">
        <span class="green--text">02.</span>
        Where I've worked
      </div>
        </template>
        <template #content>
            <Timeline />
        </template>
    </BaseSection>
</template>
<script>
const BaseSection = () => import('@/sections/BaseSection.vue');
const Timeline = () => import('@/components/Timeline.vue');

export default {
    name:"Experience",
    components : {
        BaseSection,
        Timeline
    }
}
</script>