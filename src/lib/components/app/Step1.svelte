<script>
    //@ts-nocheck
    import img from "$lib/assets/1.png";

    export let forMe = null;

    function onChange(event) {
		forMe = event.currentTarget.value;
	}
</script>

<div class="w-screen h-screen pt-20 pb-10 md:pt-0 flex flex-col items-center justify-between md:justify-center md:gap-20 test" >  
    <div class="w-5/6 flex flex-col items-center">
        <img class="h-32" src={img} alt="Person">
        <h1 class="text-2xl font-medium mt-8">For you or a friend</h1>

        <p class="text-center text-sm mt-4 mx-4">Please confirm your country code and enter your phone number. </p>

        <div class="mt-12 flex flex-col gap-4 md:items-center w-full">
            <label for="hs-vertical-radio-in-form" class="max-w-xs md:max-w-lg flex px-3 py-4 w-full bg-white border border-gray-200 rounded-[7px] text-sm focus:border-blue-500 focus:ring-blue-500">
              <input checked={forMe === true} value="true" on:change={onChange} type="radio" name="forWho" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" id="hs-vertical-radio-in-form">
              <span class="text-sm text-gray-500 ms-3">For Me</span>
            </label>
          
            <label for="hs-vertical-radio-checked-in-form" class="max-w-xs md:max-w-lg flex px-3 py-4 w-full bg-white border border-gray-200 rounded-[7px] text-sm focus:border-blue-500 focus:ring-blue-500">
              <input checked={forMe === false} value="false" on:change={onChange} type="radio" name="forWho" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" id="hs-vertical-radio-checked-in-form">
              <span class="text-sm text-gray-500 ms-3">For a Friend</span>
            </label>
        </div>

        <!--
        <div class="w-full flex flex-col gap-7 mt-12">
            <button class="justify-self-end bg-blue-500 w-full py-2.5 font-medium text-white rounded-xl">For Me</button>
            <button class="justify-self-end bg-blue-500 w-full py-2.5 font-medium text-white rounded-xl">For a friend</button>
        </div>
        -->
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
