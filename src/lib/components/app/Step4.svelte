<script>
    //@ts-nocheck
    import img from "$lib/assets/2.png";
    export let shortDescription = null;
</script>

<div class="w-screen h-screen pt-20 pb-10 flex flex-col items-center justify-between md:justify-center md:pt-0 md:gap-20">
    <div class="w-5/6 flex flex-col items-center">
        <img class="h-16" src={img} alt="Person">
        <h1 class="text-2xl font-medium mt-8">Short description</h1>

        <p class="text-center text-sm mt-4 mx-4">Describe you voice in a sentence or two, this field is optional.</p>

        <input bind:value={shortDescription} type="text" class="mt-14 mb-2 pt-3 pb-14 px-4 block w-full max-w-lg border border-gray-200 rounded-[7px] text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="A young white male, with high-pitch voice">
        <p class="w-full max-w-lg self-start md:self-auto ml-1 text-xs">(Optional)</p>
    </div>

    <slot/>
</div>