<script>
    //@ts-nocheck
    export let data;
    import { onMount } from "svelte";
    import { payWithStripe } from "$lib/utils/payWithStripe";
    import {validateCallRequest} from "$lib/utils/validateCallRequest.js";
    import img from "$lib/assets/8.png";

    let isPaid = false;
    let shouldRing = false;

    onMount(async () => {
        ({isPaid, shouldRing}  = await validateCallRequest(data.slug))
        console.log(isPaid, shouldRing)
    })

    const handleRetry = () => {
        payWithStripe(data.slug)
    }
</script>

<div class="w-screen h-screen flex flex-col items-center justify-center gap-20">

    {#if isPaid && shouldRing}
        <!--Another If statement for if should ring-->
        <div class="w-5/6 flex flex-col items-center">
            <img class="h-20" src={img}  alt="Person">
            <h1 class="text-2xl font-medium mt-8">Ringing...</h1>

            <p class="text-center text-sm mt-4 mx-4">Please confirm your country code and enter your phone number. </p>
        </div> 
    {:else if !isPaid}
        <div class="w-5/6 flex flex-col items-center">
            <img class="h-20" src={img}  alt="Person">
            <h1 class="text-2xl font-medium mt-8">Payment Failed</h1>

            <p class="text-center text-sm mt-4 mx-4">Please confirm your country code and enter your phone number. </p>
        </div>
    {:else}
        <div class="w-5/6 flex flex-col items-center">
            <img class="h-20" src={img}  alt="Person">
            <h1 class="text-2xl font-medium mt-8">An Error Has Occured</h1>

            <p class="text-center text-sm mt-4 mx-4">Please try again later or contact support - +1 (304)-967-2601.</p>
        </div>
    {/if}
    
    {#if !isPaid}
        <button on:click={handleRetry} class="justify-self-end bg-blue-500 w-5/6 py-2.5 font-medium text-white rounded-xl">Retry</button>
    {/if}
</div>