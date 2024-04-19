//@ts-nocheck
import axios from "axios";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";


const uploadVoice = async (docData) => {
    const storage = getStorage();
    const downloadUrl = await getDownloadURL(ref(storage, docData.voiceRecording));

    const response = await axios.get(downloadUrl, { responseType: 'arraybuffer' });
    const mp3Blob = new Blob([response.data], { type: 'audio/mpeg' });

    const uuid = uuidv4();
    const form = new FormData();
    form.append("name", uuid);
    form.append("files", mp3Blob);
    
    if(docData.description){
      form.append("description", docData.description);
    }

    const headers = {
      "xi-api-key": import.meta.env.VITE_ELEVEN_KEY,
      "Content-Type": "multipart/form-data",
    }

    const res = await axios.post("https://api.elevenlabs.io/v1/voices/add", form , { headers });

    return res.data.voice_id;
}

export {uploadVoice};