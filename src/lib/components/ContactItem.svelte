<script>
    let { Icon, type, address, url } = $props();

    function handleClick() {
        if (url) {
            window.open(url, '_blank');
        }
    }
</script>

<button class="contact-item-container" onclick={handleClick}>
    <div class="contact-type-icon">
        <Icon size={24} />
    </div>
    <div class="contact-text">
        <span class="contact-type">{type}</span>
        <span class="contact-address">{address}</span>
    </div>
</button>

<style>
    .contact-item-container {
        display: flex;
        flex-direction: row;
        text-align: left;

        background-color: var(--bg);
        border: 4px solid var(--accent2);

        padding: .75rem .25rem;
        flex: 1;

        cursor: pointer;
        transition: all .3s ease;
    }

    .contact-item-container:hover {
        background-color: var(--accent2);
        transform: translate(2px, 2px);
        box-shadow: 4px 4px color-mix(in srgb, var(--accent2), transparent 50%);
    }

    .contact-item-container:hover .contact-type-icon,
    .contact-item-container:hover .contact-address,
    .contact-item-container:hover .contact-type {
        color: #ffffff; /* might refactor */
    }

    .contact-type-icon {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 48px;
        color: var(--accent2);
        transition: color .3s ease;
    }

    .contact-text {
        display: flex;
        flex-direction: column;
        text-align: left;

        color: white;
        white-space: nowrap;
    }

    .contact-address {
        font-size: .65rem;
        color: var(--text);
        transition: color .3s ease;
    }
    
    .contact-type {
        font-size: .75rem;
        color: var(--textMuted);
        transition: color .3s ease;
    }
</style>

