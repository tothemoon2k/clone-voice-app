import axios from "axios";

const payWithStripe = async () => {
    const checkoutUrl = await axios.post('http://localhost:5173/api/stripe/checkout');
    window.location.href = checkoutUrl.data.url;
}

export { payWithStripe };