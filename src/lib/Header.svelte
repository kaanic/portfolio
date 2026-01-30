<script>
    import { Sun, Moon } from "lucide-svelte";

    let isDarkMode = true;

    // TODO: make actual function
    function toggleTheme() { isDarkMode = !isDarkMode; };
</script>

<header>
    <div class="header-content">
        <a href="kaanic.dev" class="logo">
            >_ KAANIC.DEV
        </a>
        <nav id="navigation">
            <a href="#about" class="nav-link">ABOUT</a>
            <a href="#projects" class="nav-link">PROJECTS</a>
            <a href="#skills" class="nav-link">SKILLS</a>
            <a href="#contact" class="nav-link">CONTACT</a>
        </nav>
        <button class="theme-toggle" aria-label="Toggle theme" on:click={toggleTheme}>
            <!-- functionality to be implemented -->
            {#if isDarkMode}
                <Sun size={20} />
            {:else}
                <Moon size={20} />
            {/if}
        </button>
    </div>
</header>

<style>
    header {
        padding: 1.5rem 2rem;
        background-color: var(--cardBg);
        border-bottom: 5px solid var(--borderAccent);

        position: sticky;
        top: 0;
        z-index: 100;

        font-size: .8rem;
    }

    .header-content {
        display: flex;
        justify-content: space-between;
        align-items: center;

        max-width: var(--contentMaxWidth);
        margin: 0 auto;
    }

    .logo {
        box-shadow: 5px 5px var(--borderAccent);
    }

    .logo, .theme-toggle {
        background-color: var(--bg);
        color: var(--text);

        border: 5px solid var(--borderAccent);
    }

    #navigation {
        display: flex;
        justify-content: center;

        gap: .5rem;
    }

    .nav-link {
        background-color: var(--cardBg);
        color: var(--text);

        border: 5px solid var(--border);

        transition: all 0.3s ease;
    }

    .nav-link:hover {
        background-color: var(--borderAccent);
        color: #ffffff;
        border-color: var(--borderAccent);
        box-shadow: 5px 5px #376091;
    }

    .logo, .nav-link, .theme-toggle {
        padding: .5rem .8rem;
    }

    .theme-toggle {
        box-shadow: 5px 5px #376091;
    }
</style>