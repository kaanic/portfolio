<script>
    let { Icon, label, value } = $props();
</script>

<div class="info-item">
    <span class="info-icon">
        <Icon size={20} aria-hidden="true"/>
    </span>
    <div class="info-content">
        <div class="info-label">{label}:</div>
        <div class="info-value">{value}</div>
    </div>
</div>

<style>
    .info-item {
        display: flex;
        align-items: flex-start;

        gap: .75rem;
    }

    .info-icon {
        font-size: 1.2rem;
        color: var(--accent1);
    }

    .info-content {
        display: flex;
        flex-direction: column;
        
        gap: .25rem;
    }

    .info-label {
        font-size: .65rem;
        color: var(--textMuted);
    }

    .info-value {
        font-size: .75rem;
        color: var(--text);
    }
</style>