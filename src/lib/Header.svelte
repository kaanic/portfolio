<script>
    import { Sun, Moon } from "lucide-svelte";
    import { getIsDarkMode, toggleTheme } from "../themeStore.svelte";

    let isDarkMode = $derived(getIsDarkMode());
</script>

<header>
    <div class="header-content">
        <a href="kaanic.dev" class="logo">
            <img src="/kaanic-logo.png" alt="KAANIC.DEV" class="logo-img">
        </a>
        <nav id="navigation">
            <a href="#about" class="nav-link">ABOUT</a>
            <a href="#projects" class="nav-link">PROJECTS</a>
            <a href="#skills" class="nav-link">SKILLS</a>
            <a href="#contact" class="nav-link">CONTACT</a>
        </nav>
        <button class="theme-toggle" aria-label="Toggle theme" onclick={toggleTheme}>
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
        padding: 1rem 0rem;
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
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .logo-img {
        height: 48px;
        width: auto;
        display: block;

        /* https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/image-rendering */
        image-rendering: crisp-edges;
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

        transition: all .3s ease;
    }

    .nav-link:hover {
        background-color: var(--borderAccent);
        color: #ffffff;
        border-color: var(--borderAccent);
        box-shadow: 5px 5px color-mix(in srgb, var(--borderAccent), transparent 80%);
    }

    .logo, .nav-link, .theme-toggle {
        padding: .5rem .8rem;
    }

    .theme-toggle {
        box-shadow: 5px 5px color-mix(in srgb, var(--borderAccent), transparent 80%);
        background-color: var(--bg);
        color: var(--text);
        border: 5px solid var(--borderAccent);
        
        cursor: pointer;
        transition: all .3s ease;
    }

    .theme-toggle:hover {
        transform: translate(2px, 2px);
        box-shadow: 3px 3px color-mix(in srgb, var(--borderAccent), transparent 80%);
    }

    @media (max-width: 850px) {
    #navigation {
        display: none;
    }
}
</style>