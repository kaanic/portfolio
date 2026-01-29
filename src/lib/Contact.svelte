<script>
    import { Github, Mail, Linkedin } from "lucide-svelte";
    import ContactItem from "./components/ContactItem.svelte";
</script>

<div class="contact-container section">
    <h1 class="h1-title"><span class="title-arrow">>></span> CONTACT.INI</h1>

    <div class="contact-content">
        <p class="font-mono">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta enim dolor, quae at doloribus.</p>

        <div class="contact-items">
            <ContactItem Icon={Mail} type={"EMAIL"} address={"kaanic1337@gmail.com"}/>
            <ContactItem Icon={Linkedin} type={"LINKEDIN"} address={"linked.in/kaanic"}/>
            <ContactItem Icon={Github} type={"GITHUB"} address={"github.com/kaanic"}/>
        </div>
    </div>
</div>

<style>
    .contact-items {
        display: flex;
        justify-content: space-between;
        flex-direction: row;

        gap: 1rem;
        padding: 1rem 0;
    }

    .contact-content {
        background-color: var(--cardBg);
        padding: 1.5rem 1.5rem .5rem;

        border: 5px solid var(--border);
        box-shadow: 8px 8px color-mix(in srgb, var(--borderAccent), transparent 80%);
    }

    .contact-content > p {
        font-size: .8rem;
    }
</style>