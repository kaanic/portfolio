<script>
    import { Proportions } from "lucide-svelte";

    let { Icon, type, address } = $props();
</script>

<div class="contact-item-container">
    <div class="contact-type-icon">
        <Icon size={24} />
    </div>
    <div class="contact-text">
        <span class="contact-type">{type}</span>
        <span clasS="contact-address">{address}</span>
    </div>
</div>

<style>
    .contact-item-container {
        display: flex;
        flex-direction: row;

        background-color: black; /* change later */
        border: 4px solid var(--accent2);

        padding: .75rem .25rem;
        flex: 1;
    }

    .contact-type-icon {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 48px;
    }

    .contact-type-icon {
        color: var(--accent2);
    }

    .contact-text {
        display: flex;
        flex-direction: column;

        color: white;
        white-space: nowrap;
    }

    .contact-address {
        font-size: .65rem;
        color: var(--text);
    }
    
    .contact-type {
        font-size: .75rem;
        color: var(--textMuted);
    }
</style>

