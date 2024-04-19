<script>
    //@ts-nocheck
    import img from "$lib/assets/6.png";
    import {fly} from "svelte/transition";
    export let voiceRecording = null;
    export let loading = false;

    const handleFileInput = (event) => {
        const file = event.target.files[0];
        console.log(file)
        const allowedAudioTypes = ['audio/mpeg', 'audio/wav', 'audio/ogg', 'audio/webm']; // Add more audio types if needed

        if (file && allowedAudioTypes.includes(file.type)) {
            voiceRecording = file;
        } else {
            alert('Please upload an audio file.');
            return;
        }
    };
</script>

<div class="w-screen h-screen pt-20 pb-10 flex flex-col items-center justify-between md:justify-center md:pt-0 md:gap-20">
    <div class="w-5/6 flex flex-col items-center">
        <img class="h-16" src={img} alt="Person">
        <h1 class="text-2xl font-medium mt-8">Voice recording</h1>

        <p class="text-center text-sm mt-4 mx-4">Please upload a voice recording, the speaker should speak casually and clearly. <br> Voice recording must be at least 1 minute long.</p>

        <div class="mt-12 flex items-center justify-center w-full max-w-lg">
            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-[10px] cursor-pointer bg-gray-50 hover:bg-gray-100">
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg class="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p class="mb-2 text-sm text-gray-500"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                    <p class="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input on:change={handleFileInput} id="dropzone-file" type="file" class="hidden" />
            </label>
        </div>
    
        {#if voiceRecording}
            <div class="mt-6 flex flex-col gap-4 w-full max-w-lg mb-6" transition:fly>
                <div class="w-full bg-white py-2 px-4 rounded-[8px] border-[1.7px] border-gray-300 flex justify-between items-center">
                    <div class="flex items-center gap-3">
                        <img class="w-8 p-1.5 bg-blue-100 rounded-[3px]" src="https://img.icons8.com/ios-filled/500/2563EB/high-volume--v1.png" alt="">
                        <p class="text-sm">{`${voiceRecording.name.split('.').shift().slice(0, 10)}${voiceRecording.name.split('.').shift().length > 10 ? '...' : ''}${voiceRecording.name.split('.').pop() ? `.${voiceRecording.name.split('.').pop()}` : ''}`}</p>
                    </div>
                    <img class="h-6" src="https://img.icons8.com/ios-filled/200/multiply.png" alt="">
                </div>
            </div>
        {/if}
    </div>

    <slot/>
</div>