<script>
    //@ts-nocheck
    import img from "$lib/assets/4.png";
    export let firstMessage;
</script>

<div class="w-screen h-screen pt-20 pb-10 flex flex-col items-center justify-between md:justify-center md:gap-20 md:pt-0">
    <div class="w-5/6 flex flex-col items-center">
        <img class="h-16" src={img} alt="Person">
        <h1 class="text-2xl font-medium mt-8">Opening line</h1>

        <p class="text-center text-sm mt-4 mx-4">What should the clone say first?</p>

        <input bind:value={firstMessage} type="text" class="mt-14 mb-2 pt-3 pb-20 px-4 block w-full max-w-lg border border-gray-200 rounded-[7px] text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Tommy Electron">
        <p class="w-full max-w-lg ml-1 self-start md:self-auto text-xs">(Optional)</p>
    </div>

    <slot/>
</div>