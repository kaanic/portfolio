<script>
    import InfoItem from './components/InfoItem.svelte';
    
    // first three  are for .about-right-column
    // other ones   are for .mini-info-container
    import { Zap, Gamepad2, Trophy, MapPin, GraduationCap, Briefcase, Code } from 'lucide-svelte';

    const miniInfo = [
        { icon: MapPin, label: "LOCATION", value: "Kanta-Häme, Finland"},
        { icon: GraduationCap, label: "EDUCATION", value: "Computer Applications"},
        { icon: Briefcase, label: "CURRENT_ROLE", value: "Student Assistant"},
        { icon: Code, label: "FAV_LANGUAGE", value: "C#"},
    ];
</script>

<div class="about-container container">
    <h1><span class="title-arrow">>></span> ABOUT_ME.TXT</h1>
    <div class="about-content">
        <div class="about-left-column about-info-box about-profile">
            <div class="about-profile-header">
                <span class="header-icon">▸</span><span>LOADING PROFILE...</span>
            </div>
            
            <div class="about-paragraphs">
                <p class="profile-text font-mono">
                    Hello! I'm Kaan, lorem ipsum dolor sit amet consectetur adipisicing elit. Quis vero iste, incidunt quos, quo eos est excepturi enim sequi, ad dolore temporibus doloremque quae harum doloribus reiciendis magni tenetur. Laboriosam?
                </p>
                
                <p class="profile-text font-mono">
                    Hello! I'm Kaan, lorem ipsum dolor sit amet consectetur adipisicing elit. Quis vero iste, incidunt quos, quo eos est excepturi enim sequi, ad dolore temporibus doloremque quae harum doloribus reiciendis magni tenetur. Laboriosam?
                </p>
                
                <p class="profile-text font-mono">
                    Hello! I'm Kaan, lorem ipsum dolor sit amet consectetur adipisicing elit. Quis vero iste, incidunt quos, quo eos est excepturi enim sequi, ad dolore temporibus doloremque quae harum doloribus reiciendis magni tenetur. Laboriosam?
                </p>
            </div>

            <div class="mini-info-container">
                <h3>> INFO_ABOUT_ME</h3>
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
                <h3 class="about-box-heading"><Gamepad2 size={16}/>INTERESTS</h3>
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
                    <div class="achievement-icon"><Trophy size={48}/></div>
                    <div class="achievement-text">ACHIEVEMENT UNLOCKED</div>
                    <div class="achievement-title">INDIE ENJOYER</div>
                    <div class="achievement-badge">★ UNCOMMON ★</div>
                </div>
            </div>

            <div class="about-status > about-info-box">
                <h3 class="about-box-heading"><Zap size={16}/>STATUS</h3>
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
                        <span class="status-text">Currently learning Ruby</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .about-container {
        max-width: var(--contentMaxWidth);
        margin: 0 auto;
        padding: 4rem 0rem;
    }

    .about-container h1 {
        font-size: 1.2rem;
        margin-bottom: 2rem;
        
        color: var(--text);
    }

    .about-container > h1 > .title-arrow {
        color: var(--accent1);
    }

    .about-content {
        display: grid;
        /* 2/1 ratio */
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

    .mini-info-container > h3 {
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

        gap: .75rem;
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
        font-size: 1.25rem;
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
        /* makes a dot */
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

    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
    }
</style>