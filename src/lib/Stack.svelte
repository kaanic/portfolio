<script>
    import CategoryButton from './components/CategoryButton.svelte';
    import SkillCard from './components/SkillCard.svelte';
    import { techStackCategories, categories } from './data/stacks';
    
    let activeCategory = $state('languages');

    const currentSkills = $derived(techStackCategories[activeCategory]);
</script>

<div class="stack-container section" id="skills">
    <h2 class="section-title"><span class="title-arrow">>></span> SKILLS.DAT</h2>

    <div class="stack-content">
        <div class="category-header">
            <div class="category-buttons">
                {#each categories as category}
                    <CategoryButton 
                        {category}
                        isActive={activeCategory === category.id}
                        onclick={() => activeCategory = category.id}
                    />
                {/each}

                <div class="category-count">{currentSkills.length} ITEMS</div>
            </div>
        </div>

        <div class="skills-grid">
            {#each currentSkills as skill}
                <SkillCard {skill} />
            {/each}
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

    .category-buttons {
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        gap: .5rem;

        width: 100%;
    }

    .category-count {
        margin-left: auto;
        font-size: .75rem;
        color: var(--textMuted);
    }

    .skills-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
        gap: 1rem;
    }

    @media (max-width: 768px) {
        .stack-content {
            padding: 1.5rem;
        }

        .category-header {
            padding-bottom: 1.5rem;
            margin-bottom: 1.5rem;
        }
    }

    @media (max-width: 480px) {
        .stack-content {
            padding: 1rem;
            border-width: 3px;
        }

        .category-buttons {
            flex-direction: column;
        }
    }

    @media (max-width: 360px) {
        .stack-content {
            padding: .75rem;
            border-width: 3px;
        }

        .category-header {
            gap: .75rem;
            padding-bottom: 1rem;
            margin-bottom: 1rem;
            border-width: 3px;
        }

        .skills-grid {
            gap: .75rem;
            margin-bottom: 1rem;
        }
    }
</style>