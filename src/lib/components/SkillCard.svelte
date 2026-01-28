<script>
    let { skill } = $props();

    function getProficiencyLevel(proficiency) {
        switch (proficiency) {
            case 'expert': return 4;
            case 'advanced': return 3;
            case 'intermediate': return 2;
            case 'beginner': return 1;
            default: return 1;
        }
    }

    const level = $derived(getProficiencyLevel(skill.proficiency));
</script>

<div class="skill-card {skill.proficiency}">
    <div class="skill-header">
        <div class="skill-name">{skill.name}</div>
        <div class="skill-badge {skill.proficiency}">
            {skill.proficiency.toUpperCase()}
        </div>
    </div>

    <div class="skill-power">
        <div class="power-label">PWR</div>
        <div class="power-bar-container">
            <div 
                class="power-bar {skill.proficiency}"
                style="width: {level * 25}%"
            ></div>
        </div>
    </div>

    <div class="skill-squares">
        <!-- might need to refactor here -->
        {#each Array(4) as _, i} 
            <span 
                class="skill-square {skill.proficiency}"
                class:filled={i < level}
            ></span>
        {/each}
    </div>

    <div class="skill-overlay {skill.proficiency}">

    </div>
</div>

<style>
    .skill-card {
        position: relative;
        border: 4px solid var(--border);
        padding: 1rem;
        
        background-color: var(--bg);

        transition: all .3s ease;
        cursor: pointer;
    }

    .skill-card.expert {
        border-color: var(--accent3);
        box-shadow: 4px 4px 0px 0px color-mix(in srgb, var(--accent3), transparent 50%);
    }

    .skill-card.advanced {
        border-color: var(--accent2);
        box-shadow: 4px 4px 0px 0px color-mix(in srgb, var(--accent2), transparent 50%);
    }

    .skill-card.intermediate {
        border-color: var(--accent1);
        box-shadow: 4px 4px 0px 0px color-mix(in srgb, var(--accent1), transparent 50%);
    }

    .skill-card.beginner {
        border-color: var(--textMuted);
        box-shadow: 4px 4px 0px 0px color-mix(in srgb, var(--textMuted), transparent 50%);
    }

    .skill-card:hover {
        transform: translate(1px, 1px);
    }

    .skill-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        
        margin-bottom: 1rem;
        gap: .5rem;
    }

    .skill-name {
        font-size: .75rem;
        font-weight: bold;
        color: var(--text);
    }

    .skill-badge {
        font-size: .6rem;
        white-space: nowrap;

        padding: .25rem .5rem;
        border: 2px solid;
    }

    .skill-badge.expert {
        border-color: var(--accent3);
        color: var(--accent3);
    }

    .skill-badge.advanced {
        border-color: var(--accent2);
        color: var(--accent2);
    }

    .skill-badge.intermediate {
        border-color: var(--accent1);
        color: var(--accent1);
    }

    .skill-badge.beginner {
        border-color: var(--textMuted);
        color: var(--textMuted);
    }

    .skill-power {
        display: flex;
        align-items: center;

        gap: .5rem;
        margin-bottom: 1rem;
    }

    .power-label {
        font-size: .65rem;
        color: var(--textMuted);
    }

    .power-bar-container {
        flex: 1;

        height: 8px;

        border: 2px solid var(--border);

        overflow: hidden;
    }

    .power-bar {
        height: 100%;
        transition: width 1s ease;
    }

    .power-bar.expert {
        background-color: var(--accent3);
    }

    .power-bar.advanced {
        background-color: var(--accent2);
    }

    .power-bar.intermediate {
        background-color: var(--accent1);
    }

    .power-bar.beginner {
        background-color: var(--textMuted);
    }

    .skill-card:hover .power-bar {
        animation: pulse .5s ease-in-out;
    }

    .skill-squares {
        display: flex;

        gap: .25rem;
    }

    .skill-square {
        width: 12px;
        height: 12px;

        border: 2px solid var(--border);
    }

    .skill-square.filled.expert {
        background-color: var(--accent3);
        border-color: var(--accent3);
    }

    .skill-square.filled.advanced {
        background-color: var(--accent2);
        border-color: var(--accent2);
    }

    .skill-square.filled.intermediate {
        background-color: var(--accent1);
        border-color: var(--accent1);
    }

    .skill-square.filled.beginner {
        background-color: var(--textMuted);
        border-color: var(--textMuted);
    }

    .skill-overlay {
        position: absolute;
        inset: 0;

        border: 4px solid;
        opacity: 0;

        transition: opacity .3s ease;
        pointer-events: none;
    }

    .skill-card:hover .skill-overlay {
        opacity: 1;
    }

    .skill-overlay.expert {
        border-color: var(--accent3);
        background-color: color-mix(in srgb, var(--accent3), transparent 90%);
    }

    .skill-overlay.advanced {
        border-color: var(--accent2);
        background-color: color-mix(in srgb, var(--accent2), transparent 90%);
    }

    .skill-overlay.intermediate {
        border-color: var(--accent1);
        background-color: color-mix(in srgb, var(--accent1), transparent 90%);
    }

    .skill-overlay.beginner {
        border-color: var(--textMuted);
        background-color: color-mix(in srgb, var(--textMuted), transparent 90%);
    }

    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.7;
        }
    }
</style>
