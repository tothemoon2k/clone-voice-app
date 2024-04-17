//@ts-nocheck
import axios from "axios";

const payWithStripe = async (id) => {
    const checkoutUrl = await axios.post('http://localhost:5173/api/stripe/checkout', {
        id: id
    });
    window.location.href = checkoutUrl.data.url;
}

export { payWithStripe };