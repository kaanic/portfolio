<script>
    import ProjectCard from "./components/ProjectCard.svelte";

    // test
    const project = {
            title: 'GAME ENGINE',
            desc: 'Custom 2D game engine built from scratch',
            tech: ['C++', 'OpenGL', 'SDL'],
            status: 'IN PROGRESS',
            image: 'https://opengl.bassi.li/devlog/lesson-6-shading.png'
        }
</script>

<div class="projects-container section">
    <h1 class="h1-title"><span class="title-arrow">>></span> PROJECTS.DAT</h1>

    <div class="projects-grid">
        <!-- to be looped -->
         <ProjectCard {project}/>
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
        grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));

        gap: 2rem;
        margin-bottom: 2rem;
    }

    .show-more {
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

        font-size: .75rem;
    }
</style>