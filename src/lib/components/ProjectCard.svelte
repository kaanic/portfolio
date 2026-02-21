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
            <Code size={16} class="code-icon" aria-hidden="true"/>
        </div>

        <p class="project-desc font-secondary">
            {project.desc}
        </p>

        <div class="tech-stack">
            {#each project.tech as tech}
                <div class="tech-pill">{tech}</div>
            {/each}
        </div>

        <div class="action-buttons">
            <button 
                class="btn-demo"
                class:disabled={!project.demoUrl}
                disabled={!project.demoUrl}
                aria-disabled={!project.demoUrl}
                onclick={() => project.demoUrl && window.open(project.demoUrl, "_blank")}
            >
                VIEW DEMO
            </button>

            <button 
                class="btn-code"
                class:disabled={!project.codeUrl}
                disabled={!project.codeUrl}
                aria-disabled={!project.codeUrl}
                onclick={() => project.codeUrl && window.open(project.codeUrl, "_blank")}
            >
                &lt;/&gt; CODE
            </button>
        </div>
    </div>
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
        height: 240px;

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
        flex-wrap: wrap;

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

    .action-buttons button.disabled {
        opacity: .4;
        filter: grayscale();

        box-shadow: none;

        cursor: not-allowed;
    }

    .action-buttons button.disabled:hover {
        transform: none;
        box-shadow: none;
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

    @media (max-width: 768px) {
        .projects-image-container {
            height: 200px;
        }
        
        .project-content {
            padding: 1rem;
        }
        
        .status-badge {
            padding: .4rem .8rem;
            font-size: .65rem;
        }

        .project-card:hover, .btn-code:hover, .btn-demo:hover {
            transform: none;
        }

        .btn-code:hover {
            box-shadow: 4px 4px color-mix(in srgb, var(--accent3), transparent 50%);
        }

        .btn-demo:hover {
            box-shadow: 4px 4px color-mix(in srgb, var(--accent1), transparent 50%);
        }

        .project-card:hover {
            box-shadow: 8px 8px color-mix(in srgb, var(--borderAccent), transparent 80%);

        }
    }

    @media (max-width: 640px) {
        .project-image-container {
            height: 180px;
        }

        .project-content {
            padding: .75rem;
            gap: .75rem;
        }

        .project-title {
            font-size: .65rem;
        }

        .project-desc {
            font-size: .65rem;
        }

        .tech-pill {
            padding: .4rem .6rem;
            font-size: .65rem;
        }

        .action-buttons {
            flex-direction: column;
            gap: .5rem;
        }

        .action-buttons button {
            padding: .6rem .8rem;
            font-size: .65rem;
        }

        .status-badge {
            top: .5rem;
            right: .5rem;

            padding: .3rem .6rem;

            font-size: .6rem;
        }

        .project-card {
            border-width: 3px;
            box-shadow: 5px 5px color-mix(in srgb, var(--borderAccent), transparent 80%);
        }

        .project-card:hover {
            box-shadow: 4px 4px color-mix(in srgb, var(--borderAccent), transparent 80%);
        }
    }
</style>