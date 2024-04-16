<script>
    import img from "$lib/assets/1.png"
</script>

<div class="w-screen h-screen pt-20 pb-10 flex flex-col items-center justify-between test" >  
    <div class="w-5/6 flex flex-col items-center">
        <img class="h-32" src={img} alt="Person">
        <h1 class="text-2xl font-medium mt-8">For you or a friend</h1>

        <p class="text-center text-sm mt-4 mx-4">Please confirm your country code and enter your phone number. </p>

        <div class="w-full flex flex-col gap-7 mt-12">
            <button class="justify-self-end bg-blue-500 w-full py-2.5 font-medium text-white rounded-xl">For Me</button>
            <button class="justify-self-end bg-blue-500 w-full py-2.5 font-medium text-white rounded-xl">For a friend</button>
        </div>
    </div>

    <slot/>
</div>

<!--
<style>
    @keyframes example {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-1000px);
        }
    }

    /* The element to apply the animation to */
    .test {
        animation-name: example;
        animation-duration: 1.5s;
    }
</style>
-->
