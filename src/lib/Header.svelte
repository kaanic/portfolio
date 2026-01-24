<header>
    <a href="kaanic.dev" class="logo">
        >_ KAANIC.DEV
    </a>
    <nav id="navigation">
        <a href="#about" class="nav-link">ABOUT</a>
        <a href="#projects" class="nav-link">PROJECTS</a>
        <a href="#skills" class="nav-link">SKILLS</a>
        <a href="#contact" class="nav-link">CONTACT</a>
    </nav>
    <button class="theme-toggle" aria-label="Toggle theme">
        <!-- placeholder for sun/moon icons -->O
    </button>
</header>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        background-color: #161b22;
        border-bottom: 3px solid #58a6ff;

        position: sticky;
        top: 0;
        z-index: 100;

        font-size: .6rem;
    }

    .logo {
        box-shadow: 3px 3px #58a6ff;
    }

    .logo, .theme-toggle {
        background-color: #0d1117;
        color: #e6e6e6;

        border: 3px solid #58a6ff;
    }

    #navigation {
        display: flex;
        justify-content: center;

        gap: .5rem;
        flex-grow: 1;
    }

    .nav-link {
        background-color: #161b22;
        color: #e6e6e6;

        border: 3px solid #3a3f4f;
    }

    .nav-link:hover {
        background-color: #58a6ff;
        color: #ffffff;
        border-color: #58a6ff;
        box-shadow: 3px 3px #376091;
    }

    .logo, .nav-link, .theme-toggle {
        padding: .4rem .6rem;
    }

    .theme-toggle {
        box-shadow: 3px 3px #376091;
    }
</style>