import { loadStripe } from '@stripe/stripe-js';
import Stripe from 'stripe';

class PaymentService {
    Stripe = require('stripe');
    
    constructor() {
    }

    async initiatePayment(products, shippingCost) {
        // Initialize Stripe
        const stripePromise = await loadStripe('pk_test_51QUS6XLcwjX8HWuVStGKwDHn2A0wVNuXfKCpVtO8PHwai5PxxDp9oaH8bqkVgL3P70UabCUc9ypuvAgI67Nm9k0500rfmw92QA');
        const stripe = Stripe('sk_test_51QUS6XLcwjX8HWuV8weify38ok51ZsM0EnO5YuB3XSseXSzjTVDgo8fOTwji42lRxfVie2uIdn3mVWVvQ7pg8BXa00QljIS1o8');

        // Add products
        const lineItems = products.map((product) => ({
            price_data: {
                currency: "ron",
                product_data: {
                    name: product.title,
                    images: [product.image]
                },
                unit_amount: Math.round(product.price * 100),
            },
            quantity: product.qty
        }))

        // Add shipping
        lineItems.push({
            price_data: {
                currency: "ron",
                product_data: {
                    name: "Shipping",
                },
                unit_amount: Math.round(shippingCost * 100), 
            },
            quantity: 1
        });

        // Create session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/error',
        });
    
        // Redirect to checkout
        stripePromise.redirectToCheckout({
            sessionId: session.id,
            lineItems: session.lineItems
        })
    }
}

export default new PaymentService();
