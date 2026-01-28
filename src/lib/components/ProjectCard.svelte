<script>
    import { Code } from "lucide-svelte";

    let { project } = $props();
</script>

<div class="project-card">
    <div class="project-image-container">
        <img 
            class="project-image" 
            src="{project.image}" 
            alt="{project.title}" 
        />

        <!-- status is converted to css class automatically -->
        <div class="status-badge 
                    {project.status.toLowerCase().replace(' ', '-')}"                    
        >
            {project.status}
        </div>

        <!-- tube tv lines -->
        <div class="scanline-layer"></div>

        <!-- tube tv glow -->
        <div class="glow-layer"></div>
    </div>

    <div class="project-content">
        <div class="project-header">
            <div class="color-squares">
                <span class="color-square square-accent1"></span>
                <span class="color-square square-accent2"></span>
                <span class="color-square square-accent3"></span>
            </div>
            <h3 class="project-title">{project.title}</h3>
            <Code size={16} class="code-icon" />
        </div>

        <p class="project-desc font-mono">
            {project.desc}
        </p>

        <div class="tech-stack">
            {#each project.tech as tech}
                <div class="tech-pill">{tech}</div>
            {/each}
        </div>

        <!-- TODO: if code or demo doesnt exist, grey it out -->
        <div class="action-buttons">
            <button class="btn-demo">VIEW DEMO</button>
            <button class="btn-code">&lt;/&gt; CODE</button>
        </div>
    </div>
    
    <!-- TODO: cabinet deco -->
    <!-- remove if opt issues -->
    <!-- <div class="decoration-left"></div>
    <div class="decoration-rigth"></div> -->
</div>

<style>
    .project-card {
        position: relative;

        background-color: var(--cardBg);
        border: 5px solid var(--borderAccent);
        box-shadow: 8px 8px color-mix(in srgb, var(--borderAccent), transparent 80%);

        cursor: pointer;
        transition: all .3s ease;
    }

    .project-card:hover {
        transform: translate(2px, 2px);
        box-shadow: 6px 6px color-mix(in srgb, var(--borderAccent), transparent 80%);
    }

    .project-image-container {
        position: relative;
        overflow: hidden;
        height: 280px;

        border-bottom: 5px solid var(--border);
    }

    .project-image {
        width: 100%;
        height: 100%;
        object-fit: cover;

        /* converts img from linear to nearest */
        /* https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/image-rendering */
        image-rendering: pixelated;
    }

    .status-badge {
        position: absolute;
        top: 1rem;
        right: 1rem;
        padding: .5rem 1rem;
        border: 4px solid;

        font-size: .75rem;
        color: white; /* change this */
        box-shadow: 4px 4px rgba(0, 0, 0, .5); /* and this */

        z-index: 10;
    }

    .status-badge.completed {
        background-color: var(--accent3);
        border-color: var(--accent3);
    }

    .status-badge.in-progress {
        background-color: var(--accent1);
        border-color: var(--accent1);
    }

    .scanline-layer {
        position: absolute;
        inset: 0;

        opacity: .2;
        background-size: 100% 4px;
        background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            var(--border) 2px,
            var(--border) 4px
        );

        pointer-events: none;
    }

    .glow-layer {
        position: absolute;
        inset: 0;
        
        opacity: 0;
        background: radial-gradient(
            circle at center,
            color-mix(in srgb, var(--accent2), transparent 60%),
            transparent 70%
        );
        transition: all .3 ease;

        pointer-events: none;
    }

    .project-card:hover .glow-layer {
        opacity: .3;
    }

    .project-content {
        display: flex;
        flex-direction: column;
        
        padding: 1.5rem;
        gap: 1rem;
    }

    .project-header {
        display: flex;
        align-items: center;
        
        gap: .75rem;
        padding-bottom: .75rem;
        border-bottom: 2px solid var(--border);
    }

    .color-squares {
        display: flex;

        gap: .25rem;
    }

    .color-square {
        width: 12px;
        height: 12px;
        border: 2px solid;
    }

    /* TODO: HOLY REFACTOR ? */

    .square-accent1 {
        background-color: var(--accent1);
        border-color: var(--accent1);
    }

    .square-accent2 {
        background-color: var(--accent2);
        border-color: var(--accent2);
    }

    .square-accent3 {
        background-color: var(--accent3);
        border-color: var(--accent3);
    }

    .project-title {
        flex: 1;
        
        font-size: .75rem;
        color: var(--accent3);
    }

    .project-content :global(.code-icon) {
        color: var(--accent1);

        flex-shrink: 0;
    }

    .project-desc {
        font-size: .75rem;
        line-height: 1.6;
        color: var(--textMuted);
    }

    .tech-stack {
        display: flex;
        flex-wrap: flex;

        gap: .5rem;
        padding-top: .5rem;
    }

    .tech-pill {
        padding: .5rem .75rem;
        border: 2px solid var(--accent2);

        font-size: .75rem;
        color: var(--accent2);
        background-color: var(--bg);
    }

    .action-buttons {
        display: flex;

        gap: .75rem;
        padding-top: .75rem;
    }

    .action-buttons button {
        flex: 1;

        padding: .75rem 1rem;
        border: 4px solid;

        font-size: .75rem;
        background-color: var(--bg);

        cursor: pointer;
        transition: all .3s ease;
    }

    .btn-demo {
        border-color: var(--accent1);
        color: var(--accent1);
        box-shadow: 4px 4px color-mix(in srgb, var(--accent1), transparent 50%);
    }

    .btn-demo:hover {
        transform: translate(1px, 1px);
        box-shadow: 3px 3px color-mix(in srgb, var(--accent1), transparent 50%);
    }

    .btn-code {
        border-color: var(--accent3);
        color: var(--accent3);
        box-shadow: 4px 4px color-mix(in srgb, var(--accent3), transparent 50%);
    }

    .btn-code:hover {
        transform: translate(1px, 1px);
        box-shadow: 3px 3px color-mix(in srgb, var(--accent3), transparent 50%);
    }
</style>