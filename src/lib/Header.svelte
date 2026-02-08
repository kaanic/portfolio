<script>
    import { Sun, Moon, Menu, X } from "lucide-svelte";
    import { getIsDarkMode, toggleTheme } from "../themeStore.svelte";

    let isDarkMode = $derived(getIsDarkMode());
    let isMenuOpen = $state(false);

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    function closeMenu() {
        isMenuOpen = false;
    }
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

        <div class="header-actions">
            <button class="theme-toggle" aria-label="Toggle theme" onclick={toggleTheme}>
                {#if isDarkMode}
                    <Sun size={20} />
                {:else}
                    <Moon size={20} />
                {/if}
            </button>

            <button class="burger-menu" aria-label="Toggle menu" onclick={toggleMenu}>
                {#if isMenuOpen}
                    <X size={20} />
                {:else}
                    <Menu size={20} />
                {/if}
            </button>
        </div>
    </div>

    {#if isMenuOpen}
        <div class="mobile-menu">
            <nav class="mobile-nav">
                <a href="#about" class="mobile-nav-link" onclick={closeMenu}>ABOUT</a>
                <a href="#projects" class="mobile-nav-link" onclick={closeMenu}>PROJECTS</a>
                <a href="#skills" class="mobile-nav-link" onclick={closeMenu}>SKILLS</a>
                <a href="#contact" class="mobile-nav-link" onclick={closeMenu}>CONTACT</a>
            </nav>
        </div>
    {/if}
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
        background-color: transparent;
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

    .header-actions {
        display: flex;
        align-items: center;
        gap: .75rem;
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

    .burger-menu {
        display: none;
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

    .burger-menu:hover {
        background-color: var(--border);
    }

    .mobile-menu {
        max-width: var(--contentMaxWidth);
        margin: 0 auto;
        margin-top: .8rem;
        padding: 1rem;

        background-color: var(--cardBg);
        border-top: 2px solid var(--border);

        animation: slideDown .3s ease;
    }

    .mobile-nav {
        display: flex;
        flex-direction: column;

        gap: .75rem;
    }

    .mobile-nav-link {
        padding: .75rem 1rem;
        border: 3px solid var(--border);
        background-color: transparent;
        color: var(--text);

        font-size: .75rem;
        text-decoration: none;
        text-align: center;

        transition: all .3s ease;
    }

    .mobile-nav-link:hover {
        background-color: var(--border);
    }

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        } to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (max-width: 850px) {
        #navigation {
            display: none;
        }

        .header-content {
            gap: 1rem;
        }

        .burger-menu {
            display: flex;
        }
    }

    @media (max-width: 480px) {
        header {
            padding: .5rem .75rem;
        }

        .logo-img {
            height: 40px;
        }

        .theme-toggle, .burger-menu {
            padding: .4rem;
            border-width: 2px;
        }

        .mobile-nav-link {
            padding: .6rem .8rem;
            border-width: 2px;
        }
    }
</style>