//@ts-nocheck
import axios from "axios";
import { db } from "./firebase";
import { doc, updateDoc } from "firebase/firestore";


const checkCall = async (voiceId, callId, slug) => {
    const response = await axios.get(`https://api.vapi.ai/call/${callId}`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_VAPI_KEY}`,
        }
    })

    console.log(response)

    if(response.data.status === "ended"){
        const headers = {
            'xi-api-key': import.meta.env.VITE_ELEVEN_KEY,
        }

        /*
        await axios.delete(`https://api.elevenlabs.io/v1/voices/${voiceId}`, { headers });
        */

        axios.delete(`https://api.elevenlabs.io/v1/voices/${voiceId}`, { headers })
        .then(response => {
            console.log('Voice deleted successfully');
            console.log(response.data);
        })
        .catch(error => {
            console.error('Error deleting voice:', error);
        });

        await updateDoc(doc(db, "callInfo", slug), {
            used: true,
            callRecording: response.data.recordingUrl
        });

        return(response.data.recordingUrl);
    }

    return(null);
}

export {checkCall};