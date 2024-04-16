<script>
    import img from "$lib/assets/7.png";
</script>

<div class="w-screen h-screen pt-20 pb-10 flex flex-col items-center justify-between">
    <div class="w-5/6 flex flex-col items-center">
        <img class="h-20" src={img} alt="Person">
        <h1 class="text-2xl font-medium mt-8">Name</h1>

        <p class="text-center text-sm mt-4 mx-4">Please confirm your country code and enter your phone number. </p>

        <input type="text" class="mt-14 py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Tommy Electron">
    </div>

    <slot/>
</div>