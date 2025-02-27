import { loadStripe } from '@stripe/stripe-js';

if (!import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY) {
  throw new Error('VITE_STRIPE_PUBLISHABLE_KEY is not defined');
}

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export const useStripe = () => {
  const redirectToCheckout = async (priceId: string) => {
    try {
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error('Failed to load Stripe');
      }

      // // Create a checkout session on the server
      // const response = await fetch('/.netlify/functions/create-checkout-session', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ priceId }),
      // });
      const isLocal = window.location.hostname === 'localhost';

const response = await fetch(
  isLocal
    ? 'http://localhost:5001/create-checkout-session'  // Local Express server
    : '/.netlify/functions/create-checkout-session',   // Netlify function in production
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ priceId }),
  }
);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Failed to parse error response' }));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (!data.sessionId) {
        throw new Error('No session ID returned from server');
      }

      // Redirect to checkout
      const { error } = await stripe.redirectToCheckout({ sessionId: data.sessionId });
      if (error) {
        throw error;
      }
    } catch (error) {
      console.error('Error redirecting to checkout:', error);
      throw error;
    }
  };

  return { redirectToCheckout };
};