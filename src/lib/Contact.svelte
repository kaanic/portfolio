<script>
    import ContactItem from "./components/ContactItem.svelte";
    import { contacts } from "$lib/data";
</script>

<div class="contact-container section" id="contact">
    <h1 class="h1-title"><span class="title-arrow">>></span> CONTACT.EXE</h1>

    <div class="contact-content">
        <p class="font-secondary">You can contact me through these methods any time of the day!</p>

        <div class="contact-items">
            {#each contacts as contact}
                <ContactItem 
                    Icon={contact.icon} 
                    type={contact.type} 
                    address={contact.address} 
                    url={contact.url}
                />
            {/each}
        </div>
    </div>
</div>

<style>
    .contact-items {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;

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
        font-size: 1rem;
    }

    @media (max-width: 768px) {
        .contact-content {
            padding: 1.25rem 1.25rem .5rem;
        }

        .contact-content > p {
            font-size: .9rem;
        }

        .contact-items {
            gap: .75rem;
        }
    }

    @media (max-width: 480px) {
        .contact-content {
            padding: 1rem 1rem .5rem;
            border-width: 4px;
            box-shadow: 4px 4px color-mix(in srgb, var(--borderAccent), transparent 80%);
        }

        .contact-content > p {
            font-size: .85rem;
        }

        .contact-items {
            gap: .5rem;
            padding: .75rem 0;
        }
    }

    @media (max-width: 360px) {
        .contact-content {
            padding: .75rem .75rem .5rem;
            border-width: 3px;
        }

        .contact-content > p {
            font-size: .8rem;
        }

        .contact-items {
            gap: .5rem;
        }
    }
</style>