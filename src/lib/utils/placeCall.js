//@ts-nocheck
import axios from "axios";
import { db } from "./firebase";
import { doc, updateDoc } from "firebase/firestore";

const placeCall = async (slug, docData, voiceId) => {
    const assistantConfig = {
        transcriber: {
          provider: "deepgram",
          model: "nova-2",
          language: "en",
        },
        model: {
          provider: "openai",
          model: "gpt-3.5-turbo-0125",
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
        firstMessage: docData.firstMessage,
    };

    const headers = {
        Authorization: `Bearer ${import.meta.env.VITE_VAPI_KEY}`,
        "Content-Type": "application/json",
    }

    const response = await axios.post("https://api.vapi.ai/call/phone",
        {
            phoneNumberId: "1fbca4d5-fcf5-426d-8ffd-f771216ab7c2",
            assistant: assistantConfig,
            //Figure out the number aspect, in db should have properly formatted phone number so no need to add country code here? Setup to format before going in db
            customer: { number: docData.phoneNumber, name: docData.name },//proper number
        },
        { headers },
    )

    await updateDoc(doc(db, "callInfo", slug), {
      callId: response.data.id
    });
    
    return(response.data.id)

}

export {placeCall};