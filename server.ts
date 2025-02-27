import 'dotenv/config'; // Load environment variables
import express, { Request, Response } from 'express';
import Stripe from 'stripe';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors()); // Allow frontend requests

const PORT = process.env.PORT || 5001;

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY must be defined in environment variables');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2023-10-16',
});

// Subscription plans
const plans = [
  {
    title: 'Standard',
    price: '3,900',
    period: 'month',
    subtitle: 'Billed monthly',
    buttonText: 'Get started',
    buttonStyle: 'border',
    priceId: 'price_1QvrFuRDoML1xyXm2CK1ZhW0',
    features: ['Unlimited requests', 'Unlimited users', 'Pause or cancel anytime'],
  },
  {
    title: 'Quarterly',
    price: '2,900',
    period: 'month',
    subtitle: 'Commit to 3 months',
    buttonText: 'Sign up now →',
    buttonStyle: 'gradient',
    popular: true,
    priceId: 'price_1QvrMTRDoML1xyXm6p9CZ8Zl',
    features: ['Unlimited requests', 'Unlimited users', 'Pause or cancel anytime'],
  },
  {
    title: 'Ad-hoc',
    price: 'Custom',
    period: '',
    subtitle: 'For one-off needs, contact sales',
    buttonText: 'Contact sales',
    buttonStyle: 'border',
    features: [
      'Documentation with every project',
      '45-minute project consultation',
      'Discounted subscription transition',
    ],
  },
];

// Stripe Checkout API Endpoint
app.post('/create-checkout-session', (req: Request, res: Response) => {
  (async () => {
    try {
      const { priceId } = req.body;

      if (!priceId) {
        return res.status(400).json({ error: 'Price ID is required' });
      }

      // Find the plan by priceId
      const selectedPlan = plans.find((plan) => plan.priceId === priceId);
      if (!selectedPlan) {
        return res.status(400).json({ error: 'Invalid price ID' });
      }

      // Fetch price details from Stripe to check if it's metered
      const price = await stripe.prices.retrieve(priceId);

      // Prepare the line item dynamically
      const lineItem: Stripe.Checkout.SessionCreateParams.LineItem = {
        price: priceId,
        ...(price.recurring?.usage_type !== 'metered' ? { quantity: 1 } : {}), // Only add quantity if not metered
      };

      const session = await stripe.checkout.sessions.create({
        mode: 'subscription',
        payment_method_types: ['card'],
        line_items: [lineItem],
        success_url: `${process.env.CLIENT_URL || 'http://localhost:5173'}/success`,
        cancel_url: `${process.env.CLIENT_URL || 'http://localhost:5173'}/`,
      });

      res.json({ sessionId: session.id });
    } catch (error) {
      console.error('Stripe Checkout Error:', error);

      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred' });
      }
    }
  })();
});

// Start the Express server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));