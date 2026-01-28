<script>
    import ProjectCard from "./components/ProjectCard.svelte";

    const projects = [
        {
            title: 'E-COMMERCE PLATFORM',
            desc: 'Full-stack online store with payment integration',
            tech: ['React', 'Node.js', 'MongoDB'],
            status: 'COMPLETED',
            image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
        },
        {
            title: 'HGA DISCORD BOT',
            desc: 'A Discord bot dedicated to HAMK Gaming Academy',
            tech: ['JavaScript', 'Node.js', 'discord.js'],
            status: 'COMPLETED',
            image: 'https://netcord.dev/images/making-a-bot_AddBotToServer_1.webp'
        },
        {
            title: 'DUNGEON ROGUELITE 2D',
            desc: 'A roguelite game that includes procedural generation',
            tech: ['Godot', 'GDScript'],
            status: 'COMPLETED',
            image: 'https://blog-uploads.eneba.games/uploads/2025/08/deep-rock-galactic-survivor-horde.jpg'
        },
        {
            title: 'CUSTOM GAME ENGINE',
            desc: 'Custom 2D game engine built from scratch',
            tech: ['C++', 'OpenGL', 'SDL'],
            status: 'IN PROGRESS',
            image: 'https://preshing.com/images/gameengine-step4.png'
        }
    ];
</script>

<div class="projects-container section">
    <h1 class="h1-title"><span class="title-arrow">>></span> PROJECTS.DAT</h1>

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
        animation: blink 1.5s steps(2) infinite;

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
</style>