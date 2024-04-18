//@ts-nocheck

import { doc, getDoc, collection } from "firebase/firestore";
import { db } from "$lib/utils/firebase.js";

const validateCallRequest = async (slug) => {
    let isPaid = false;
    let shouldRing = null;

    const urlParams = new URLSearchParams(window.location.search);
    isPaid = urlParams.has("success") && urlParams.get("success") === "true";

    const docRef = doc(db, "callInfo", slug);
    const docSnap = await getDoc(docRef);
    let docData = null;

    if (docSnap.exists()) {
        docData = docSnap.data();
        if(docData.used === false){
            shouldRing = true
        } else {
            shouldRing = false;
        }
    } 
    return({isPaid, shouldRing})
}  

export {validateCallRequest};