<script>
    import CategoryButton from './components/CategoryButton.svelte';
    import SkillCard from './components/SkillCard.svelte';
    import { techStackCategories, categories } from './data/stacks';
    
    let activeCategory = $state('languages');

    const currentSkills = $derived(techStackCategories[activeCategory]);

    const stats = $derived({
        total: currentSkills.length,
        expert: currentSkills.filter(s => s.proficiency === 'expert').length,
        advanced: currentSkills.filter(s => s.proficiency === 'advanced').length,
        intermediate: currentSkills.filter(s => s.proficiency === 'intermediate').length
    });
</script>

<div class="stack-container section" id="skills">
    <h1 class="h1-title"><span class="title-arrow">>></span> SKILLS.DAT</h1>

    <div class="stack-content">
        <div class="category-header">
            <div class="category-label">SELECT CLASS:</div>
            <div class="category-buttons">
                {#each categories as category}
                    <CategoryButton 
                        {category}
                        isActive={activeCategory === category.id}
                        onclick={() => activeCategory = category.id}
                    />
                {/each}
            </div>
        </div>

        <div class="proficiency-info">
            <div class="info-title">>> SKILL_LEVELS</div>
            <div class="info-items">
                <div class="info-item">
                    <div class="info-squares">
                        <span class="info-square filled expert"></span>
                        <span class="info-square filled expert"></span>
                        <span class="info-square filled expert"></span>
                        <span class="info-square filled expert"></span>
                    </div>
                    <div class="info-text">
                        <div class="info-level expert">EXPERT</div>
                        <div class="info-desc">Master</div>
                    </div>
                </div>
                
                <div class="info-item">
                    <div class="info-squares">
                        <span class="info-square filled advanced"></span>
                        <span class="info-square filled advanced"></span>
                        <span class="info-square filled advanced"></span>
                    </div>
                    <div class="info-text">
                        <div class="info-level advanced">ADVANCED</div>
                        <div class="info-desc">Proficient</div>
                    </div>
                </div>
                
                <div class="info-item">
                    <div class="info-squares">
                        <span class="info-square filled intermediate"></span>
                        <span class="info-square filled intermediate"></span>
                    </div>
                    <div class="info-text">
                        <div class="info-level intermediate">INTERMEDIATE</div>
                        <div class="info-desc">Competent</div>
                    </div>
                </div>
                
                <div class="info-item">
                    <div class="info-squares">
                        <span class="info-square filled beginner"></span>
                    </div>
                    <div class="info-text">
                        <div class="info-level beginner">BEGINNER</div>
                        <div class="info-desc">Learning</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="skills-grid">
            {#each currentSkills as skill}
                <SkillCard {skill} />
            {/each}
        </div> 

        <div class="stats-footer">
            <div class="stats-left">
                TOTAL_ITEMS: {stats.total}
            </div>
            <div class="stats-right">
                <div class="stat-item">
                    <span class="stat-label">EXPERT:</span>
                    <span class="stat-value">{stats.expert}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">ADVANCED:</span>
                    <span class="stat-value">{stats.advanced}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">INTERMEDIATE:</span>
                    <span class="stat-value">{stats.intermediate}</span>
                </div>
            </div>
        </div>

    </div>
</div>

<style>
    .stack-content {
        padding: 2rem;

        background-color: var(--cardBg);
        border: 5px solid var(--border);
        box-shadow: 8px 8px color-mix(in srgb, var(--borderAccent), transparent 80%);
    }

    .category-header {
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        gap: 1rem;
        padding-bottom: 2rem;
        margin-bottom: 2rem;
        border-bottom: 4px solid var(--border);
    }

    .category-label {
        font-size: .75rem;
        color: var(--accent1);
    }

    .category-buttons {
        display: flex;
        flex-wrap: wrap;

        gap: .5rem;
    }

    .proficiency-info {
        background-color: var(--bg);
        border: 2px solid var(--border);

        padding: 1rem;
        margin-bottom: 2rem;
    }

    .info-title {
        font-size: .75rem;
        color: var(--textMuted);

        margin-bottom: 1rem;
    }

    .info-items {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

        gap: 1rem;
    }

    .info-item {
        display: flex;
        align-items: center;

        gap: .5rem;
    }

    .info-squares {
        display: flex;

        gap: .25rem;
    }

    .info-square {
        width: 8px;
        height: 8px;

        border: 2px solid var(--border);
    }

    .info-square.filled.expert {
        background-color: var(--accent3);
        border-color: var(--accent3);
    }

    .info-square.filled.advanced {
        background-color: var(--accent2);
        border-color: var(--accent2);
    }

    .info-square.filled.intermediate {
        background-color: var(--accent1);
        border-color: var(--accent1);
    }

    .info-square.filled.beginner {
        background-color: var(--textMuted);
        border-color: var(--textMuted);
    }

    .info-text {
        display: flex;
        flex-direction: column;

        gap: .1rem;
    }

    .info-level {
        font-size: .75rem;
    }

    .info-level.expert {
        color: var(--accent3);
    }

    .info-level.advanced {
        color: var(--accent2);
    }

    .info-level.intermediate {
        color: var(--accent1);
    }

    .info-level.beginner {
        color: var(--textMuted);
    }

    .info-desc {
        font-size: .6rem;
        color: var(--textMuted);
    }

    .skills-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 1rem;
        margin-bottom: 2rem;
    }

    .stats-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        gap: 1rem;
        padding-top: 1.5rem;
        border-top: 4px solid var(--border);
    }

    .stats-left {
        font-size: .75rem;
        color: var(--textMuted);
    }

    .stats-right {
        display: flex;
        flex-wrap: wrap;

        gap: 1rem;
    }

    .stat-item {
        display: flex;
        align-items: center;

        gap: .5rem;
        font-size: .75rem;
    }

    .stat-label {
        color: var(--textMuted);
    }

    .stat-value {
        color: var(--accent1);
    }
</style>