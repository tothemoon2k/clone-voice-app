<script>
    //@ts-nocheck
    export let data;
    import { onMount } from "svelte";
    import { db } from "$lib/utils/firebase.js";
    import axios from "axios";
    import { getDoc, collection, doc, updateDoc } from "firebase/firestore";
    import { getStorage, ref, getDownloadURL } from "firebase/storage";

    import {fade} from "svelte/transition";
    import img from "$lib/assets/8.png";

    import { payWithStripe } from "$lib/utils/payWithStripe";
    import { validateCallRequest } from "$lib/utils/validateCallRequest.js";
    import { uploadVoice } from "$lib/utils/uploadVoice.js";
    import { placeCall } from "$lib/utils/placeCall.js";
    import { checkCall } from "$lib/utils/checkCall.js";

    let isPaid = false;
    let alreadyUsed = false;
    let docData = null;
    let loading = true;
    let retryLoading = false;
    let callEnded = false;
    let callRecording = null;

    //1st they should have button to call and then it will upload voice, call ect

    onMount(async () => {
        ({isPaid, alreadyUsed, docData}  = await validateCallRequest(data.slug));
        loading = false;

        console.log(isPaid, alreadyUsed);
        if(isPaid && alreadyUsed){
            const response = await axios.get(`https://api.vapi.ai/call/${docData.callId}`, {
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_VAPI_KEY}`,
                }
            })

            callRecording = response.data.recordingUrl;
        }

        if(alreadyUsed || !isPaid) return;

        const voiceId = await uploadVoice(docData);
        
        const callId = await placeCall(data.slug, docData, voiceId) //voiceId

        const checkInterval = setInterval(async () => {
            callRecording = await checkCall(voiceId, callId, data.slug);
            if (callRecording) {
                callEnded = true;
                alreadyUsed = true;
                clearInterval(checkInterval);
            }
        }, 1000);
    })

    const handleRetry = async () => {
        retryLoading = true;
        await payWithStripe(data.slug)
        retryLoading = false;
    }
</script>

<div class="w-screen h-screen flex flex-col items-center justify-center gap-20">
    {#if loading}
        <div class="absolute w-full h-full bg-white flex justify-center items-center" transition:fade>
            <div role="status">
                <svg aria-hidden="true" class="inline w-5 h-5 text-gray-200 animate-spin fill-blue-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    {/if}

    <!--
        //check if call is paid for and if call has already been used
        //if call has not been paid for show update payment method screen
        //if call has been paid for but not used allow user to place call
        //if call has been paid for and used show call recording screen
    -->

    
    {#if !isPaid}
        <div class="w-5/6 flex flex-col items-center">
            <img class="h-20" src={img}  alt="Person">
            <h1 class="text-2xl font-medium mt-8">Payment Failed</h1>

            <p class="text-center text-sm mt-4 mx-4">Please confirm your country code and enter your phone number. </p>
        </div>

        <button disabled={retryLoading} on:click={handleRetry} class="justify-self-end bg-blue-500 w-5/6 py-2.5 font-medium text-white rounded-xl">
            {#if !retryLoading}
                Update Payment Method
            {:else}
                <div role="status">
                    <svg aria-hidden="true" class="inline w-5 h-5 text-gray-200 animate-spin fill-blue-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span class="sr-only">Loading...</span>
                </div>
            {/if}
        </button>
    {:else if isPaid && !alreadyUsed}
        <!--Try Adding Call Button, instead of auto calling?-->
        <div class="w-5/6 flex flex-col items-center">
            <img class="h-20" src={img}  alt="Person">
            <h1 class="text-2xl font-medium mt-8">Calling...</h1>

            <p class="text-center text-sm mt-4 mx-4">Please confirm your country code and enter your phone number. </p>
        </div>
    {:else if isPaid && alreadyUsed}
        <!--Try Adding Call Button, instead of auto calling?-->
        <div class="w-5/6 flex flex-col items-center">
            <img class="h-20" src={img}  alt="Person">
            <h1 class="text-2xl font-medium mt-8">Call Ended</h1>

            <p class="text-center text-sm mt-4 mx-4">Please confirm your country code. Listen to the call recording below.</p>

            <audio class="mt-12 w-full" controls>
                <source src={callRecording} type="audio/mp3">
                Your browser does not support the audio element.
            </audio>
        </div>
    {:else}
        <!--Try Adding Call Button, instead of auto calling?-->
        <div class="w-5/6 flex flex-col items-center">
            <img class="h-20" src={img}  alt="Person">
            <h1 class="text-2xl font-medium mt-8">An Error Has Occured</h1>
    
            <p class="text-center text-sm mt-4 mx-4">Please try again later or contact support - +1 (304)-967-2601.</p>
        </div>
    {/if}
    
    
    {#if isPaid}
        <!--Another If statement for if should ring-->
    <!--
        {#if !callEnded}
            <div class="w-5/6 flex flex-col items-center">
                <img class="h-20" src={img}  alt="Person">
                <h1 class="text-2xl font-medium mt-8">Calling...</h1>

                <p class="text-center text-sm mt-4 mx-4">Please confirm your country code and enter your phone number. </p>
            </div>
        {:else}
            <div class="w-5/6 flex flex-col items-center">
                <img class="h-20" src={img}  alt="Person">
                <h1 class="text-2xl font-medium mt-8">Call Ended</h1>

                <p class="text-center text-sm mt-4 mx-4">Please confirm your country code. Listen to the call recording below.</p>

                <audio class="mt-12 w-full" controls>
                    <source src={callRecording} type="audio/mp3">
                    Your browser does not support the audio element.
                  </audio>
            </div>
        {/if}
    {:else if alreadyUsed === null || alreadyUsed === false}
        <div class="w-5/6 flex flex-col items-center">
            <img class="h-20" src={img}  alt="Person">
            <h1 class="text-2xl font-medium mt-8">An Error Has Occured</h1>

            <p class="text-center text-sm mt-4 mx-4">Please try again later or contact support - +1 (304)-967-2601.</p>
        </div>
    {:else}
        <div class="w-5/6 flex flex-col items-center">
            <img class="h-20" src={img}  alt="Person">
            <h1 class="text-2xl font-medium mt-8">Payment Failed</h1>

            <p class="text-center text-sm mt-4 mx-4">Please confirm your country code and enter your phone number. </p>
        </div>

        <button disabled={retryLoading} on:click={handleRetry} class="justify-self-end bg-blue-500 w-5/6 py-2.5 font-medium text-white rounded-xl">
            {#if !retryLoading}
                Update Payment Details
            {:else}
                <div role="status">
                    <svg aria-hidden="true" class="inline w-5 h-5 text-gray-200 animate-spin fill-blue-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span class="sr-only">Loading...</span>
                </div>
            {/if}
    </button>
    -->
    {/if}
</div>
