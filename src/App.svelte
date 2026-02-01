<script>
    import { onMount } from "svelte";
    import { initializeTheme } from "./themeStore.svelte";
    import AnimatedBackground from "./lib/components/AnimatedBackground.svelte";

    import Header from "./lib/Header.svelte";
    import Main from "./lib/Main.svelte";
    import About from "./lib/About.svelte";
    import Stack from "./lib/Stack.svelte";
    import Projects from "./lib/Projects.svelte";
    import Contact from "./lib/Contact.svelte";
    import Career from "./lib/Career.svelte";
    import Footer from "./lib/Footer.svelte";

    onMount(() => {
        initializeTheme();
    });
</script>

<div class="container">
    <AnimatedBackground />
    <Header />
    <Main />
    <About />
    <Stack />
    <Projects />
    <Career />
    <Contact />
    <Footer />
</div>
