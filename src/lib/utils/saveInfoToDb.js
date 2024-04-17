//@ts-nocheck
import { db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';

const saveInfoToDb = async(forMe, name, phoneNumber, shortDescription, voiceRecording, firstMessage) => {
    const storage = getStorage();
    const storageRef = ref(storage, uuidv4());
    let audioRef = null;

    audioRef = (await uploadBytes(storageRef, voiceRecording)).ref.fullPath
    
    const callInfoCollection = collection(db, "callInfo");

    const docRef = await addDoc(callInfoCollection, {
        forMe: forMe,
        name: name,
        phoneNumber: phoneNumber,
        shortDescription: shortDescription,
        voiceRecording: audioRef,
        firstMessage: firstMessage,
        paid: false,
    });

    const refId = docRef.id;
    return refId;
}

export { saveInfoToDb };