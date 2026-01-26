<script>
    // instantiating pixels
    const pixelCount = 20;
    const pixels = Array.from({length: pixelCount}, (_, i) => ({
        id: i,

        // left and top will take percentage value
        left: Math.random() * 100,
        top: Math.random() * 100,

        delay: Math.random() * 5,
        duration: 5 + Math.random() * 10,

        colorIndex: i % 3
    }));

    // getting css variable directly
    // https://stackoverflow.com/questions/41725725/access-css-variable-from-javascript
    const root = getComputedStyle(document.documentElement)
    let colors = [
        root.getPropertyValue("--accent1").trim(),
        root.getPropertyValue("--accent2").trim(),
        root.getPropertyValue("--accent3").trim()
    ];
</script>

<div class="animated-bg">
    <div class="grid-bg"></div>
    <div class="scanline-bg"></div>
    <div class="gradient-effect-bg"></div>
    <div class="pixels-bg">
        {#each pixels as pixel (pixel.id)}
            <div class="pixel" style="
                background-color: {colors[pixel.colorIndex]};
                left: {pixel.left}%;
                top: {pixel.top}%;
                animation-delay: {pixel.delay}s;
                animation-duration: {pixel.duration}s;
            "
            ></div>
        {/each}
    </div>
</div>

<style>
    .animated-bg {
        position: fixed;
        z-index: -100;

        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        pointer-events: none;
    }

    .grid-bg {
        position: absolute;

        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        opacity: .05;

        background-size: 40px 40px;
        background-image: 
        repeating-linear-gradient(
            0deg,
            var(--borderAccent) 0px,
            var(--borderAccent) 2px,
            transparent 2px,
            transparent 40px
            ),
            repeating-linear-gradient(
                90deg,
                var(--borderAccent) 0px,
                var(--borderAccent) 2px,
                transparent 2px,
                transparent 40px
                );
    }

    .scanline-bg {
        position: absolute;

        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        opacity: .1;

        background-size: 100% 4px;
        background-image: 
            repeating-linear-gradient(
                0deg,
                transparent 0px,
                transparent 2px,
                var(--border) 2px,
                var(--border) 4px
            );

        /* questionable optimization */
        /* animation: scanline 8s linear infinite; */
    }

    .gradient-effect-bg {
        position: absolute;

        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        opacity: .2;

        background: 
            radial-gradient(
                ellipse at top,
                color-mix(in srgb, var(--accent2), transparent var(--bgTransparencyRatio)),
                transparent 50%
            ),
            radial-gradient(
                ellipse at bottom right,
                color-mix(in srgb, var(--accent3), transparent var(--bgTransparencyRatio)),
                transparent 50%
            ),
            radial-gradient(
                ellipse at bottom left,
                color-mix(in srgb, var(--accent1), transparent var(--bgTransparencyRatio)),
                transparent 50%
            );
    }

    .pixels-bg {
        position: absolute;

        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        opacity: var(--bgPixelOpacity);
    }

    .pixel {
        position: absolute;
        
        width: var(--bgPixelSize);
        height: var(--bgPixelSize);

        opacity: var(--bgPixelOpacity);

        animation: float ease-in-out infinite;
    }

    @keyframes scanline {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(4px);
        }
    }

    @keyframes float {
        /* 
            a geometrically correct square is created
            using 6-8-10 right triangle 4 times per sprint.
        */

        0%, 100% {
            transform: translate(0px, 0px) rotate(0deg);
        }
        25% {
            transform: translate(6px, 8px) rotate(90deg);
        }
        50% {
            transform: translate(14px, 2px) rotate(180deg);
        }
        75% {
            transform: translate(8px, -6px) rotate(270deg);
        }
    }
</style>