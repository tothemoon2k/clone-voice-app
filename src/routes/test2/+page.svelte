<script>
    import Landing from "$lib/components/app/Landing.svelte";
    import Step1 from "$lib/components/app/Step1.svelte";
    import Step2 from "$lib/components/app/Step2.svelte";
    import Step3 from "$lib/components/app/Step3.svelte";

    let step = 0;

    let handleNext = () => {
        step++;
    }
</script>


{#if step === 0}
    <Landing>
        <button on:click={handleNext} class="justify-self-end bg-blue-500 w-5/6 py-2.5 font-medium text-white rounded-xl">Get Started</button>
    </Landing>
{:else if step === 1}
    <Step1>
        <button on:click={handleNext} class="justify-self-end bg-blue-500 w-5/6 py-2.5 font-medium text-white rounded-xl">Continue</button>
    </Step1>
{:else if step === 2}
    <Step2>
        <button on:click={handleNext} class="justify-self-end bg-blue-500 w-5/6 py-2.5 font-medium text-white rounded-xl">Continue</button>
    </Step2>
{:else if step === 3}
    <Step3>
        <button on:click={handleNext} class="justify-self-end bg-blue-500 w-5/6 py-2.5 font-medium text-white rounded-xl">Continue</button>
    </Step3>
{/if}