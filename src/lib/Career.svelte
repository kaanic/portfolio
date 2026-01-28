<script>
    import JobLog from "./components/JobLog.svelte";

    // test
    const job = {
            level: 'LVL 1',
            role: 'Kössi Engineer',
            company: 'Kössilaatikko Oy',
            period: '2019 - 2021',
            status: 'ACTIVE',
            achievements: [
                'Developed 15 client websites',
                'Learned Recat, Cat.js, and modern cat practices',
                'Contributed to open-source projects'
            ]
        }
</script>

<div class="career-container section">
    <h1 class="h1-title"><span class="title-arrow">>></span> CAREER_LOG.DAT</h1>
    <div class="career-item-container">
        <!-- to be looped -->
        <JobLog {job} />
    </div>
</div>

<style>

</style>