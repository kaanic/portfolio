<script>
    import JobLog from "./components/JobLog.svelte";
    import { experiences } from "$lib/data";
</script>

<div class="career-container section">
    <h1 class="h1-title"><span class="title-arrow">>></span> CAREER_LOG.DAT</h1>
    <div class="career-item-container">
        {#each experiences as job}
            <JobLog {job} />
        {/each}
    </div>
</div>

<style>
    .career-item-container {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
</style>