<script>

</script>

<div class="main-section section">
    <div class="main-left-column">
        <div class="title">
            <span class="main-head-text">> INITIALIZING<span class="blink-anim">_</span></span>
            <span class="main-title-name">KAANIC</span>
            <span class="main-title-1">SOFTWARE</span>
            <span class="main-title-2">DEVELOPER</span>
        </div>
        <p class="main-desc font-mono">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum laudantium numquam voluptas, nostrum autem blanditiis nemo consequatur accusamus voluptatem dolorum ab consequuntur voluptates quam similique eveniet optio, quas, atque aspernatur?</p>
        <div class="main-buttons">
            <button class="btn-primary">VIEW PROJECTS</button>
            <button class="btn-secondary">CONTACT ME</button>
        </div>
    </div>
    <div class="main-right-column">
        <img class="main-img" src="https://placehold.co/600x400" alt="placeholder">
    </div>
</div>

<style>
    .main-section {
        min-height: 500px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .main-left-column {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .main-right-column {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        max-width: 480px;
        width: 100%;
    }

    .main-img {
        width: 100%;
        height: auto;
        display: block;

        border: 5px solid var(--border);
        box-shadow: 10px 10px color-mix(in srgb, var(--border), transparent 50%);
    }

    .title {
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }

    .main-head-text {
        font-size: .75rem;
        color: var(--accent1);
    }

    .main-title-name {
        font-size: 2.5rem;
        font-weight: 400;
        line-height: 1.2;

        color: var(--text);
    }

    .main-title-1 {
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 1.2;

        color: var(--accent2);
    }

    .main-title-2 {
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 1.2;

        color: var(--accent3);
    }

    .main-desc {
        font-size: .85rem;
        line-height: 1.6;
        font-family: monospace;
        max-width: 70ch;
    }

    .main-buttons {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .main-buttons > button {
        padding: .75rem 1.5rem;
        font-size: .9rem;
        
        color: var(--text);
        box-shadow: 6px 6px black;
        
        cursor: pointer;
        transition: all .3s ease;
    }

    .btn-primary {
        background-color: var(--buttonPrimary);
    }

    .btn-primary:hover {
        background-color: var(--buttonPrimaryHover);
        transform: translate(3px, 3px);
        box-shadow: 3px 3px black;
    }

    .btn-secondary {
        background-color: var(--buttonSecondary);
        border: 5px solid var(--buttonSecondary);
    }

    .btn-secondary:hover {
        background-color: var(--buttonSecondaryHover);
        border-color: var(--buttonSecondaryHover);
        transform: translate(3px, 3px);
        box-shadow: 3px 3px black;
    }

    .blink-anim {
        animation: blink 1.5s steps(1) infinite;
    }

    @keyframes blink {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
    }
</style>