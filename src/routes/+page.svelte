<script>
// @ts-nocheck
  import axios from "axios";
  import { v4 as uuidv4 } from "uuid";
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";
  import * as Select from "$lib/components/ui/select";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";

  let name = null;
  let number = null;
  let firstMessage = "";
  let description = "";
  let overallCall = "";
  let callTone = "";
  let voiceRecording = null;
  const uuid = uuidv4();
  let voiceId = "";

  const handleCall = () => {
    const form = new FormData();
    form.append("name", uuid);
    form.append("files", voiceRecording);
    form.append("description", description);

    axios({
      method: "post",
      url: "https://api.elevenlabs.io/v1/voices/add",
      data: form,
      headers: {
        "xi-api-key": import.meta.env.VITE_ELEVEN_KEY,
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        voiceId = response.data.voice_id;
        const test = {
          transcriber: {
            provider: "deepgram",
            model: "nova-2",
            language: "en",
          },
          model: {
            provider: "openai",
            model: "gpt-4-1106-preview",
            fallbackModels: ["gpt-4-0125-preview", "gpt-4-0613"],
            semanticCachingEnabled: true,
            temperature: 1,
            maxTokens: 525,
          },
          voice: {
            provider: "11labs",
            voiceId: voiceId,
          },
          silenceTimeoutSeconds: 30,
          responseDelaySeconds: 0.4,
          llmRequestDelaySeconds: 0.1,
          numWordsToInterruptAssistant: 2,
          maxDurationSeconds: 1800,
          firstMessage: firstMessage,
        };

        console.log("About to make call");

        axios
          .post(
            "https://api.vapi.ai/call/phone",
            {
              phoneNumberId: "1fbca4d5-fcf5-426d-8ffd-f771216ab7c2",
              assistant: test,
              customer: { number: "+14355659477", name: "Justin" },
            },
            {
              headers: {
                Authorization: `Bearer ${import.meta.env.VITE_VAPI_KEY}`,
                "Content-Type": "application/json",
              },
            },
          )
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFileInput = (event) => {
    voiceRecording = event.target.files[0];
  };
</script>

<h1 class="text-3xl font-semibold text-center mt-20 mb-10">Call your lad</h1>

<label for=""></label>
<input type="text" />

<label for=""></label>
<input type="text" />

<Card.Root class="w-[600px]">
  <Card.Header>
    <Card.Title>Have a bit of fun with your lad</Card.Title>
    <Card.Description>Enter a but of info on your lad below</Card.Description>
  </Card.Header>
  <Card.Content>
    <form>
      <div class="grid w-full items-center gap-4">
        <div class="flex flex-col space-y-1.5">
          <Label for="name">Lad's Name</Label>
          <Input bind:value={name} id="name" placeholder="Name of your project" />
        </div>
        <div class="flex flex-col space-y-1.5">
          <Label for="number">Lad's Number</Label>
          <Input bind:value={number} id="number" placeholder="444-555-3333" />
        </div>
        <div class="flex flex-col space-y-1.5">
          <Label for="description">Brief description of lad</Label>
          <Input bind:value={description} id="description" placeholder="444-555-3333" />
        </div>
        <div class="flex flex-col space-y-1.5">
          <Label for="firstMessage">Opening message</Label>
          <Input bind:value={firstMessage} id="firstMessage" placeholder="444-555-3333" />
        </div>
        <div class="flex flex-col space-y-1.5">
          <Label for="overall">Overall call</Label>
          <Input bind:value={overallCall} id="overall" placeholder="444-555-3333" />
        </div>
        <div class="flex flex-col space-y-1.5">
          <Label for="framework">Call Tone</Label>
          <Select.Root>
            <Select.Trigger id="framework">
              <Select.Value placeholder="Select" />
            </Select.Trigger>
            <Select.Content>
            </Select.Content>
          </Select.Root>
        </div>
        <div class="flex items-center justify-center w-full">
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                class="w-8 h-8 mb-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p class="mb-2 text-sm text-gray-500">
                <span class="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p class="text-xs text-gray-500">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              on:change={handleFileInput}
              id="dropzone-file"
              type="file"
              class="hidden"
            />
          </label>
        </div>
      </div>
    </form>
  </Card.Content>
  <Card.Footer class="flex justify-between">
    <Button on:click={handleCall}>Call</Button>
  </Card.Footer>
</Card.Root>

<form class="max-w-sm mx-auto">
  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900"
      >What's your lads name?</label
    >
    <input
      type="email"
      id="email"
      bind:value={name}
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      placeholder="Ayan"
      required
    />
  </div>

  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900"
      >What's your lads number?</label
    >
    <input
      type="email"
      id="email"
      bind:value={number}
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      placeholder="Ayan"
      required
    />
  </div>

  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900"
      >Please briefly describe your lad</label
    >
    <input
      type="email"
      id="email"
      bind:value={description}
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      placeholder="A young indian boy"
      required
    />
  </div>

  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900"
      >First message</label
    >
    <input
      type="email"
      id="email"
      bind:value={firstMessage}
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      placeholder="name@flowbite.com"
      required
    />
  </div>

  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900"
      >Overall Call</label
    >
    <input
      type="email"
      id="email"
      bind:value={overallCall}
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      placeholder="name@flowbite.com"
      required
    />
  </div>

  <label for="countries" class="block mb-2 text-sm font-medium text-gray-900"
    >Call Tone</label
  >
  <select
    id="countries"
    class="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
  >
    <option selected>Choose a tone</option>
    <option value="US">Angry</option>
    <option value="CA">Happy</option>
    <option value="FR">Sad</option>
    <option value="DE">Normal</option>
  </select>

  <div class="flex items-center justify-center w-full">
    <label
      for="dropzone-file"
      class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
    >
      <div class="flex flex-col items-center justify-center pt-5 pb-6">
        <svg
          class="w-8 h-8 mb-4 text-gray-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 16"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
          />
        </svg>
        <p class="mb-2 text-sm text-gray-500">
          <span class="font-semibold">Click to upload</span> or drag and drop
        </p>
        <p class="text-xs text-gray-500">
          SVG, PNG, JPG or GIF (MAX. 800x400px)
        </p>
      </div>
      <input
        on:change={handleFileInput}
        id="dropzone-file"
        type="file"
        class="hidden"
      />
    </label>
  </div>
</form>

<button
  type="button"
  on:click={handleSubmit}
  class="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
>
  Submit
</button>
