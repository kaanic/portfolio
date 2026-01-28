<script>
    import { Trophy } from "lucide-svelte";

    let { job } = $props();
</script>

<div class="job-card">
    <div class="job-card-top">
        <div class="job-level-badge" class:active={job.status === 'ACTIVE'}>
            {job.level}
        </div>

        <div class="job-info">
            <h3 class="job-role">{job.role}</h3>
            <div class=job-company>{job.company}</div>
        </div>

        <div class="job-meta">
            <span class="job-period">{job.period}</span>
            {#if job.status === "ACTIVE"}
                <div class="active-indicator">
                    <div class="active-dot"></div>
                    <span>ACTIVE</span>
                </div>
            {/if}
        </div>
    </div>

    <div class="job-card-bottom">
        <h4 class="achievements-title">
            <Trophy size={12}/>
            ACHIEVEMENTS UNLOCKED:
        </h4>
        <ul class="achievements-list">
            {#each job.achievements as ach}
                <li>
                    <span class="bullet">▸</span>
                    <span>{ach}</span>
                </li>
            {/each}
        </ul>
    </div>
</div>

<style>
    .job-card {
        background-color: var(--cardBg);
        border: 5px solid var(--border);
        box-shadow: 8px 8px color-mix(in srgb, var(--borderAccent), transparent 80%);
        padding: 1.5rem;
    }

    .job-card-top {
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        padding-bottom: 1.5rem;
        border-bottom: 2px solid var(--border);
        margin-bottom: 1.5rem;

        gap: 1rem;
    }

    .job-level-badge {
        padding: .5rem 1rem;
        border: 4px solid var(--border);

        font-size: .75rem;
        white-space: nowrap;

        color: var(--text);
        background-color: var(--bg);
    }

    .job-level-badge.active {
        border-color: var(--accent1);
        background-color: var(--accent1);
        color: white; /* change this later */
        box-shadow: 4px 4px color-mix(in srgb, var(--accent1), transparent 50%);
    }

    .job-info {
        flex: 1;
        min-width: 200px;
    }

    .job-role {
        font-size: .75rem;
        color: var(--accent3);

        margin-bottom: .25rem;
    }

    .job-company {
        font-size: .75rem;
        color: var(--textMuted);
    }

    .job-meta {
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        gap: .75rem;
    }

    .job-period {
        font-size: .75rem;
        padding: .25rem .75rem;

        border: 2px solid var(--accent2);
        color: var(--accent2);
    }

    .active-indicator {
        display: flex;
        align-items: center;

        font-size: .75rem;
        color: var(--accent1);

        gap: .25rem;
    }

    .active-dot {
        width: 8px;
        height: 8px;

        border-radius: 50%;
        background-color: var(--accent1);

        animation: pulse 2s ease-in-out infinite;
    }

    .job-card-bottom {
        display: flex;
        flex-direction: column;

        gap: .75rem;
    }

    .achievements-title {
        display: flex;
        align-items: center;

        font-size: .75rem;
        color: var(--accent2);

        gap: .5rem;
    }

    .achievements-list {
        display: flex;
        flex-direction: column;
        
        gap: .5rem;
        padding: 0;
        margin: 0;
        
        list-style: none;
    }

    .achievements-list li {
        display: flex;
        align-items: flex-start;
        
        font-size: .75rem;
        color: var(--textMuted);
        
        gap: .75rem;
    }

    .bullet {
        color: var(--accent1);
        flex-shrink: 0;
    }

    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
    }
</style>