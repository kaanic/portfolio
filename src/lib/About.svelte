<script>
    import InfoItem from './components/InfoItem.svelte';
    
    import { Zap, Gamepad2, Trophy } from 'lucide-svelte';
    import { miniInfo } from '$lib/data'
</script>

<div class="about-container section" id="about">
    <h1 class="h1-title"><span class="title-arrow">>></span> ABOUT_ME.TXT</h1>
    <div class="about-content">
        <div class="about-left-column about-info-box about-profile">
            <div class="about-profile-header">
                <span class="header-icon">▸</span><span>LOADING PROFILE...</span>
            </div>
            
            <div class="about-paragraphs">
                <p class="profile-text font-secondary">
                    I love building softwares that people can actually interact with and enjoy using. Whether it's a web application or a game project, I always prioritize the user experience to feel responsive, fun and "alive" instead of just functional.
                </p>
                
                <p class="profile-text font-secondary">
                    When I develop something; I care a lot about UX, accessibility, and performance. I also often think in terms of architecture. I tend to mentally break down the structure of anything I see, and I enjoy applying that same mindset when designing my own projects.
                </p>
                
                <p class="profile-text font-secondary">
                    I'm also someone who naturally enjoys helping others, especially when it comes to debugging and solving tricky problems. I'm always excited to learn and improve, and I'm especially motivated by projects that are interactive, creative, and genuinely fun to work on.
                </p>
            </div>

            <div class="mini-info-container">
                <h2>> INFO_ABOUT_ME</h2>
                <div class="info-grid">
                    {#each miniInfo as info}
                        <InfoItem 
                            Icon={info.icon} 
                            label={info.label} 
                            value={info.value}
                        />
                    {/each}
                </div>
            </div>
        </div>

        <div class="about-right-column">
            <div class="about-interests about-info-box">
                <h3 class="about-box-heading"><Gamepad2 size={16} aria-hidden="true"/>INTERESTS</h3>
                <ul class="about-interests-list">
                    <li><span class="bullet">▸</span> Game Development</li>
                    <li><span class="bullet">▸</span> Pixel Art</li>
                    <li><span class="bullet">▸</span> UI/UX Design</li>
                    <li><span class="bullet">▸</span> Embedded Systems</li>
                    <li><span class="bullet">▸</span> Backend Development</li>
                </ul>
            </div>

            <div class="about-achievement about-info-box">
                <div class="achievement-content">
                    <div class="achievement-icon"><Trophy size={32} aria-hidden="true"/></div>
                    <div class="achievement-text">ACHIEVEMENT UNLOCKED</div>
                    <div class="achievement-title">CERTIFIED ENJOYER</div>
                    <div class="achievement-badge">★ UNCOMMON ★</div>
                </div>
            </div>

            <div class="about-status > about-info-box">
                <h3 class="about-box-heading"><Zap size={16} aria-hidden="true"/>STATUS</h3>
                <div class="about-status-list">
                    <div class="status-item">
                        <span class="status-dot status-dot-accent1"></span>
                        <span class="status-text">Available for work</span>
                    </div>
                    <div class="status-item">
                        <span class="status-dot status-dot-accent2"></span>
                        <span class="status-text">Open to collaborations</span>
                    </div>
                    <div class="status-item">
                        <span class="status-dot status-dot-accent3"></span>
                        <span class="status-text">Currently learning C++</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .about-container {
        padding: 4rem 0rem;
    }
    
    .about-content {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 1.5rem;
    }

    .about-info-box {
        padding: 1.5rem;

        background-color: var(--cardBg);
        border: 5px solid var(--border);
        box-shadow: 8px 8px color-mix(in srgb, var(--borderAccent), transparent 80%);
    }

    .about-profile {
        display: flex;
        flex-direction: column;

        gap: 1.5rem;
    }

    .about-profile-header {
        display: flex;
        align-items: center;
        gap: .5rem;
        font-size: .75rem;
        color: var(--accent3);
    }

    .header-icon {
        font-size: 1rem;
    }

    .profile-text {
        font-size: 1rem;
        line-height: 1.7;
        
        color: var(--text);
    }

    .about-paragraphs {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        
        flex: 1;
    }

    .mini-info-container {
        padding-top: 1.5rem;
        border-top: 2px solid var(--border);
    }

    .mini-info-container > h2 {
        font-size: .75rem;
        margin-bottom: 1rem;

        color: var(--accent2);
    }

    .info-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }

    .about-right-column {
        display: flex;
        flex-direction: column;

        gap: 1.5rem;
    }

    .about-interests, .about-status {
        cursor: default;
    }

    .about-box-heading {
        display: flex;
        align-items: center;

        gap: .5rem;
        margin-bottom: 1rem;
        font-size: .75rem;

        color: var(--accent1);
    }

    .about-interests-list {
        display: flex;
        flex-direction: column;

        gap: .6rem;
        padding: 0;
        margin: 0;

        list-style: none;
    }

    .about-interests-list li {
        display: flex;
        align-items: center;

        font-size: .75rem;
        color: var(--textMuted);

        gap: .5rem;
    }

    .about-interests-list li:hover {
        color: var(--text);
    }

    .bullet {
        color: var(--accent3);
    }

    .about-achievement {
        text-align: center;
    }

    .achievement-content {
        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 1rem;
    }

    .achievement-icon {
        font-size: 2rem;
        color: var(--accent1);
    }

    .achievement-text {
        font-size: .75rem;
        color: var(--textMuted);
    }

    .achievement-title {
        font-size: 1rem;
        color: var(--accent2);
    }

    .achievement-badge {
        display: inline;

        color: var(--accent1);
        border: 2px solid var(--accent1);
        
        font-size: .75rem;
        padding: .5rem 1rem;
    }

    .about-status .about-box-heading {
        color: var(--accent3);
    }

    .about-status-list {
        display: flex;
        flex-direction: column;

        gap: .6rem;
    }

    .status-item {
        display: flex;
        align-items: center;

        gap: 1rem;
        font-size: .75rem;
    }

    .status-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        display: inline-block;
    }

    .status-dot-accent1 {
        background-color: var(--accent1);
        animation: pulse 2s ease-in-out infinite;
    }

    .status-dot-accent2 {
        background-color: var(--accent2);
    }

    .status-dot-accent3 {
        background-color: var(--accent3);
    }

    .status-text {
        color: var(--textMuted);
    }

    .status-text:hover {
        color: var(--text);
    }

    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.25;
        }
    }

    @media (max-width: 968px) {
        .about-content {
            grid-template-columns: 1fr;
        }

        .about-right-column {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        }
    }
    
    @media (max-width: 768px) {
        .about-container {
            padding: 2rem 0;
        }

        .about-content {
            gap: 1rem;
        }

        .profile-text {
            font-size: .9rem;
            line-height: 1.6;
        }

        .about-right-column {
            gap: 1rem;
        }
    }
    
    @media (max-width: 640px) {
        .about-right-column {
            grid-template-columns: 1fr;
        }
    }
    
    @media (max-width: 480px) {
        .about-info-box {
            padding: 1rem;
            border-width: 4px;
            box-shadow: 4px 4px color-mix(in srgb, var(--borderAccent), transparent 80%);
        }

        .about-profile {
            gap: 1rem;
        }

        .about-profile-header {
            font-size: .65rem;
        }

        .profile-text {
            font-size: .85rem;
        }

        .about-paragraphs {
            gap: .75rem;
        }

        .mini-info-container {
            padding-top: 1rem;
        }

        .mini-info-container > h2 {
            font-size: .65rem;
            margin-bottom: .75rem;
        }

        .info-grid {
            grid-template-columns: 1fr;
            gap: .75rem;
        }

        .about-box-heading {
            font-size: .65rem;
            margin-bottom: .75rem;
        }

        .about-interests-list {
            gap: .5rem;
        }

        .about-interests-list li {
            font-size: .65rem;
        }

        .achievement-content {
            gap: .75rem;
        }

        .achievement-icon {
            font-size: 1.5rem;
        }

        .achievement-text {
            font-size: .65rem;
        }

        .achievement-title {
            font-size: .85rem;
        }

        .achievement-badge {
            font-size: .65rem;
            padding: .4rem .75rem;
        }

        .about-status-list {
            gap: .5rem;
        }

        .status-dot {
            width: 6px;
            height: 6px;
        }

        .status-item {
            font-size: .65rem;
            gap: .75rem;
        }
    }
    
</style>