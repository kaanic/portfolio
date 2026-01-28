<script>
    import JobLog from "./components/JobLog.svelte";

    const experiences = [
        {
            level: 'LVL 2',
            role: 'Student Assistant',
            company: 'Hämeen Ammattikorkeakoulu',
            period: '2024 - PRESENT',
            status: 'ACTIVE',
            achievements: [
                'Guiding students through their studies',
                'Organizing sessions and assisting teachers',
                'Also served as team leader fall semester'
            ]
        },
        {
            level: 'LVL 1',
            role: 'Digital Image Technician',
            company: 'Local company',
            period: '2023 - 2024',
            status: 'COMPLETED',
            achievements: [
                'Created temporary color grades on set',
                'Maintained and stored footage backups',
                'Configured camera settings if required'
            ]
        }
    ];
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