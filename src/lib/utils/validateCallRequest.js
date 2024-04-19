//@ts-nocheck

import { doc, getDoc, collection } from "firebase/firestore";
import { db } from "$lib/utils/firebase.js";

const validateCallRequest = async (slug) => {
    let isPaid = false;
    let alreadyUsed = false;

    const urlParams = new URLSearchParams(window.location.search);
    isPaid = urlParams.has("success") && urlParams.get("success") === "true";

    const docSnap = await getDoc(doc(db, "callInfo", slug));
    let docData = null;

    if (docSnap.exists()) {
        docData = docSnap.data();
        alreadyUsed = docData.used;
    } 
    return({isPaid, alreadyUsed, docData})
}  

export {validateCallRequest};