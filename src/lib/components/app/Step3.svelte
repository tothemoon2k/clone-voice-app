<script>
    //@ts-nocheck
    import img from "$lib/assets/8.png";
    
    let confirming = false;
    let countryCode = "+1";
    export let phoneNumber = null;
    let phoneError = false;

    function checkPhoneNumber() {
        try {
            var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            if(phoneNumber.match(phoneno)) {
                phoneError = false;
            }
            else {
                phoneError = true;
            }
        } catch (error) {
            console.log(error)
            phoneError = true;
        } 
    }

    const handleConfirm = () => {
        checkPhoneNumber()
        console.log(phoneError)
        if(phoneError){ return }

        confirming = true;
    }

    const handleCloseConfirm = () => {
        confirming = false;
    }

    const handleNext = () => {
        console.log("Test")
    }
</script>

<div class="w-screen h-screen pb-10 flex flex-col items-center justify-between">
  <div class="w-5/6 flex flex-col items-center pt-20">
    <img class="h-20" src={img} alt="Person" />
    <h1 class="text-2xl font-medium mt-8">Phone Number</h1>

    <p class="text-center text-sm mt-4 mx-4">
      Please confirm your country code and enter your phone number.
    </p>

    <select bind:value={countryCode} class="mt-10 py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
      <option value="+1" selected>🇺🇸 United States</option>
      <option value="+93">🇦🇫 Afghanistan</option>
      <option value="+355">🇦🇱 Albania</option>
      <option value="+213">🇩🇿 Algeria</option>
      <option value="+1684">🇦🇸 American Samoa</option>
      <option value="+376">🇦🇩 Andorra</option>
      <option value="+244">🇦🇴 Angola</option>
      <option value="+1264">🇦🇮 Anguilla</option>
      <option value="+672">🇦🇶 Antarctica</option>
      <option value="+1268">🇦🇬 Antigua and Barbuda</option>
      <option value="+54">🇦🇷 Argentina</option>
      <option value="+374">🇦🇲 Armenia</option>
      <option value="+297">🇦🇼 Aruba</option>
      <option value="+61">🇦🇺 Australia</option>
      <option value="+43">🇦🇹 Austria</option>
      <option value="+994">🇦🇿 Azerbaijan</option>
      <option value="+1242">🇧🇸 Bahamas</option>
      <option value="+973">🇧🇭 Bahrain</option>
      <option value="+880">🇧🇩 Bangladesh</option>
      <option value="+1246">🇧🇧 Barbados</option>
      <option value="+375">🇧🇾 Belarus</option>
      <option value="+32">🇧🇪 Belgium</option>
      <option value="+501">🇧🇿 Belize</option>
      <option value="+229">🇧🇯 Benin</option>
      <option value="+1441">🇧🇲 Bermuda</option>
      <option value="+975">🇧🇹 Bhutan</option>
      <option value="+591">🇧🇴 Bolivia</option>
      <option value="+387">🇧🇦 Bosnia and Herzegovina</option>
      <option value="+267">🇧🇼 Botswana</option>
      <option value="+55">🇧🇷 Brazil</option>
      <option value="+246">🇮🇴 British Indian Ocean Territory</option>
      <option value="+1284">🇻🇬 British Virgin Islands</option>
      <option value="+673">🇧🇳 Brunei</option>
      <option value="+359">🇧🇬 Bulgaria</option>
      <option value="+226">🇧🇫 Burkina Faso</option>
      <option value="+257">🇧🇮 Burundi</option>
      <option value="+855">🇰🇭 Cambodia</option>
      <option value="+237">🇨🇲 Cameroon</option>
      <option value="+1">🇨🇦 Canada</option>
      <option value="+238">🇨🇻 Cape Verde</option>
      <option value="+1345">🇰🇾 Cayman Islands</option>
      <option value="+236">🇨🇫 Central African Republic</option>
      <option value="+235">🇹🇩 Chad</option>
      <option value="+56">🇨🇱 Chile</option>
      <option value="+86">🇨🇳 China</option>
      <option value="+61">🇨🇽 Christmas Island</option>
      <option value="+672">🇨🇨 Cocos (Keeling) Islands</option>
      <option value="+57">🇨🇴 Colombia</option>
      <option value="+269">🇰🇲 Comoros</option>
      <option value="+242">🇨🇬 Congo</option>
      <option value="+682">🇨🇰 Cook Islands</option>
      <option value="+506">🇨🇷 Costa Rica</option>
      <option value="+225">🇨🇮 Côte d'Ivoire</option>
      <option value="+385">🇭🇷 Croatia</option>
      <option value="+53">🇨🇺 Cuba</option>
      <option value="+599">🇨🇼 Curaçao</option>
      <option value="+357">🇨🇾 Cyprus</option>
      <option value="+420">🇨🇿 Czech Republic</option>
      <option value="+243">🇨🇩 Democratic Republic of the Congo</option>
      <option value="+45">🇩🇰 Denmark</option>
      <option value="+253">🇩🇯 Djibouti</option>
      <option value="+1767">🇩🇲 Dominica</option>
      <option value="+1809">🇩🇴 Dominican Republic</option>
      <option value="+593">🇪🇨 Ecuador</option>
      <option value="+20">🇪🇬 Egypt</option>
      <option value="+503">🇸🇻 El Salvador</option>
      <option value="+240">🇬🇶 Equatorial Guinea</option>
      <option value="+291">🇪🇷 Eritrea</option>
      <option value="+372">🇪🇪 Estonia</option>
      <option value="+268">🇸🇿 Eswatini</option>
      <option value="+251">🇪🇹 Ethiopia</option>
      <option value="+500">🇫🇰 Falkland Islands</option>
      <option value="+298">🇫🇴 Faroe Islands</option>
      <option value="+679">🇫🇯 Fiji</option>
      <option value="+358">🇫🇮 Finland</option>
      <option value="+33">🇫🇷 France</option>
      <option value="+594">🇬🇫 French Guiana</option>
      <option value="+689">🇵🇫 French Polynesia</option>
      <option value="+241">🇬🇦 Gabon</option>
      <option value="+220">🇬🇲 Gambia</option>
      <option value="+995">🇬🇪 Georgia</option>
      <option value="+49">🇩🇪 Germany</option>
      <option value="+233">🇬🇭 Ghana</option>
      <option value="+350">🇬🇮 Gibraltar</option>
      <option value="+30">🇬🇷 Greece</option>
      <option value="+299">🇬🇱 Greenland</option>
      <option value="+1473">🇬🇩 Grenada</option>
      <option value="+590">🇬🇵 Guadeloupe</option>
      <option value="+1671">🇬🇺 Guam</option>
      <option value="+502">🇬🇹 Guatemala</option>
      <option value="+44">🇬🇬 Guernsey</option>
      <option value="+224">🇬🇳 Guinea</option>
      <option value="+245">🇬🇼 Guinea-Bissau</option>
      <option value="+592">🇬🇾 Guyana</option>
      <option value="+509">🇭🇹 Haiti</option>
      <option value="+0">🇻🇦 Holy See</option>
      <option value="+504">🇭🇳 Honduras</option>
      <option value="+852">🇭🇰 Hong Kong</option>
      <option value="+36"> </option>
    </select>

    {#if !phoneError}
        <div class="relative w-full">
            <div class="flex items-center pl-5 mt-6">
                <p class="ml-0.5 text-sm">{countryCode}</p>
                <div class="ml-5 inline-block h-full min-h-[2.7em] w-0.5 self-stretch bg-gray-200"></div>
                <input bind:value={phoneNumber} type="text" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="000 000 000"/>
            </div>
        </div>
    {:else}
        <div class="relative w-full">
            <div class="flex items-center pl-5 mt-6 w-full">
                <p class="ml-0.5 text-sm">{countryCode}</p>
                <input bind:value={phoneNumber} type="text" id="hs-validation-name-error" name="hs-validation-name-error" class="ml-3 py-3 px-4 block w-full rounded-[7px] border-2 border-red-500 text-sm focus:border-red-500 focus:ring-red-500 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400" required="" aria-describedby="hs-validation-name-error-helper">
                <div class="absolute right-4 end-0 flex items-center pointer-events-none">
                    <svg class="flex-shrink-0 size-4 text-red-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" x2="12" y1="8" y2="12"></line>
                        <line x1="12" x2="12.01" y1="16" y2="16"></line>
                    </svg>
                </div>
            </div>
            <p class="text-xs text-red-600 mt-2 ml-[54px]" id="hs-validation-name-error-helper">Please enter a valid phone number</p>
        </div>
    {/if}
</div>

  {#if confirming}
    <div class="bg-black bg-opacity-55 w-screen h-screen absolute flex justify-center items-center" >
        <div class="bg-white w-5/6 h-64 rounded-xl flex flex-col items-center pt-10">
            <h2 class="text-3xl font-semibold">{countryCode} {phoneNumber}</h2>
            <p class="text-sm mt-3">Is this the correct number?</p>
            <button on:click={handleCloseConfirm} class="mt-3.5 mb-6 text-blue-500">Edit</button>
        

            <slot />
        </div>
    </div>
  {/if}

  <button on:click={handleConfirm} class="justify-self-end bg-blue-500 w-5/6 py-2.5 font-medium text-white rounded-xl">Continue</button>
</div>
