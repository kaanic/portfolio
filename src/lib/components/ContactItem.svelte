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
        min-width: 0;

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
        flex-shrink: 0;

        width: 48px;
        color: var(--accent2);
        transition: color .3s ease;
    }

    .contact-text {
        display: flex;
        flex-direction: column;
        text-align: left;
        min-width: 0;

        color: white;
        white-space: nowrap;
        overflow: hidden;

        gap: .3rem;
    }

    .contact-address {
        font-size: .65rem;
        color: var(--text);
        transition: color .3s ease;

        overflow: hidden;
        text-overflow: ellipsis;
    }
    
    .contact-type {
        font-size: .75rem;
        color: var(--textMuted);
        transition: color .3s ease;
    }

    @media (max-width: 768px) {
        .contact-item-container {
            /* grow = 1, shrink = 1, ideal is half minus half rem */
            flex: 1 1 calc(50% - .5rem);
        }

        .contact-text {
            white-space: normal;
        }

        .contact-address {
            font-size: .65rem;
        }

        .contact-type {
            font-size: .7rem;
        }
    }

    @media (max-width: 480px) {
        .contact-item-container {
            flex: 1 1 100%;
            padding: .6rem .2rem;
            border-width: 3px;
        }

        .contact-type-icon {
            width: 40px;
        }

        .contact-address {
            font-size: .6rem;
        }

        .contact-type {
            font-size: .65rem;
        }
    }

    @media (max-width: 360px) {
        .contact-item-container {
            padding: .5rem .15rem;
        }

        .contact-type-icon {
            width: 36px;
        }

        .contact-address {
            font-size: .55rem;
        }

        .contact-type {
            font-size: .6rem;
        }
    }
</style>

