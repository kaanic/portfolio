<script>
    import ProjectCard from "./components/ProjectCard.svelte";
    import { projects } from "$lib/data";
</script>

<div class="projects-container section" id="projects">
    <h1 class="h1-title"><span class="title-arrow">>></span> PROJECTS.ZIP</h1>

    <div class="projects-grid">
        {#each projects as project}
            <ProjectCard {project}/>
        {/each}
    </div>

    <div class="show-more">
        <div class="show-more-text"> <!-- change to button later on -->
            <!-- https://stackoverflow.com/questions/7381974/which-characters-need-to-be-escaped-in-html -->
            &gt;&gt; SHOW MORE PROJECTS &lt;&lt;
        </div>
    </div>
</div>

<style>
    .projects-container {
        padding: 4rem 0;
    }

    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(100%, 400px), 1fr));

        gap: 2rem;
        margin-bottom: 2rem;
    }

    .show-more {
        /* remove this after implementing single post for each, or something else idk */
        display: none !important;

        text-align: center;

        margin-top: 3rem;
    }

    .show-more-text {
        display: inline-block;

        padding: 1rem 1.5rem;
        border: 4px solid var(--accent1);
        box-shadow: 6px 6px color-mix(in srgb, var(--accent1), transparent 50%);

        background-color: var(--bg);
        color: var(--accent1);
        /* animation: blink 1.5s steps(2) infinite; */

        font-size: .75rem;
    }

    @keyframes blink {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: .5;
        }
    }

    @media (max-width: 768px) {
        .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }
    }

    @media (max-width: 640px) {
        .projects-grid {
            gap: 1rem;    
        }

        .projects-container {
            padding: 2rem 0;
        }
    }
</style>