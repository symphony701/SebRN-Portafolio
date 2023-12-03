<script>
    import { onMount } from 'svelte';

// Your code here

import Typed from "typed.js";

onMount(() => {
    const typed = new Typed("#typed", {
        strings: [
            "a mobile developer",
            "a frontend developer",
            "a gamer",
            "an anime fan",
            
        ],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
        showCursor: false,
    });
});
</script>
    

<h1
    class="mt-16 px-8 sm:px-6 md:px-0 text-4xl sm:text-5xl md:pt-0 md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl dark:text-bunker-50 font-extrabold"
>
    <span>Hi! I'm Sebastian</span>
    <div class="flex flex-wrap">
        <span
            class="block text-4xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
            >and I'm&nbsp</span
        >
        <span
            class="block text-4xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
            id="typed"></span
        >
    </div>
</h1>

<style>
    #typed {
        color: #f56565;
        height: 30px !important;
    }
</style>