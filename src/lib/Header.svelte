<script>
    import { Sun, Moon } from "lucide-svelte";
    import { getIsDarkMode, toggleTheme } from "../themeStore.svelte";

    let isDarkMode = $derived(getIsDarkMode());
</script>

<header>
    <div class="header-content">
        <a href="/" class="logo">
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
        padding: .75rem 1rem;
        background-color: var(--cardBg);
        border-bottom: 4px solid var(--border);

        position: sticky;
        top: 0;
        z-index: 100;
    }

    .header-content {
        display: flex;
        justify-content: space-between;
        align-items: center;

        max-width: var(--contentMaxWidth);
        margin: 0 auto;
        gap: 1.5rem;
    }

    .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;

        transition: opacity .3s ease;
    }

    .logo:hover {
        opacity: .8;
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
        align-items: center;
        flex: 1;

        gap: .75rem;
    }

    .nav-link {
        background-color: var(--cardBg);
        color: var(--text);

        border: 3px solid var(--border);
        padding: .5rem 1rem;

        font-size: .75rem;
        text-decoration: none;

        transition: all .3s ease;
    }

    .nav-link:hover {
        background-color: var(--border);
    }

    .theme-toggle {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;

        background-color: transparent;
        color: var(--text);
        border: 3px solid var(--border);
        
        padding: .5rem;

        cursor: pointer;
        transition: all .3s ease;
    }

    .theme-toggle:hover {
        background-color: var(--border);
    }

    @media (max-width: 850px) {
    #navigation {
        display: none;
    }

    .header-content {
        gap: 1rem;
    }

    @media (max-width: 480px) {
        header {
            padding: .5rem .75rem;
        }

        .logo-img {
            height: 40px;
        }

        .theme-toggle {
            padding: .4rem;
            border-width: 2px;
        }

        .nav-link {
            padding: .4rem .8rem;
            border-width: 2px;
        }
    }
}
</style>