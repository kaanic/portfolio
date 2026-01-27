<script>
    let { category, isActive = false, onclick } = $props();
</script>

<button class="category-btn" class:active={isActive} {onclick}>
    <category.icon size={16} class="category-icon" />
    <span>{category.label}</span>
</button>

<style>
    .category-btn {
        display: flex;
        align-items: center;

        gap: .5rem;
        padding: .5rem 1rem;
        
        font-size: .75rem;
        border: 4px solid var(--border);
        background-color: var(--bg);
        color: var(--text);

        transition: all .3s ease;

        cursor: pointer;
    }

    .category-btn.active {
        background-color: var(--accent1);
        border-color: var(--accent1);
        color: #ffffff;
        box-shadow: 4px 4px 0px 0px color-mix(in srgb, var(--accent1), transparent 50%);
    }

    .category-btn.active :global(.category-icon) {
        color: #ffffff;
    }

    .category-btn:hover:not(.active) {
        background-color: var(--border);
    }

    .category-btn :global(.category-icon) {
        flex-shrink: 0;
    }
</style>