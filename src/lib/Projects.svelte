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
        <div class="show-more-text">
            <!-- https://stackoverflow.com/questions/7381974/which-characters-need-to-be-escaped-in-html -->
            &gt;&gt; SHOW MORE PROJECTS &lt;&lt;
        </div>
    </div>
</div>