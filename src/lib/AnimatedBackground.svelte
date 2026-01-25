<script>

</script>

<div class="animated-bg">
    <div class="grid-bg"></div>
    <div class="scanline-bg"></div>
    
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

        animation: scanline 8s linear infinite;
    }

    @keyframes scanline {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(4px);
        }
    }
</style>