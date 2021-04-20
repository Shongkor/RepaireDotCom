import React, { useState } from 'react';
import { Elements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51Ii0bvSExVWdd2bGlmyKr0otrCEbIFspnwMvhg0BvvgSfyzw96nxDJ5TN4PKPgxem9RQDtgKu0cZuWZuA1LT5i5y00jyNcvqw6');

const Payment = ({handleCheckOut}) => {
    return (
        <div className="text-center">
            <Elements stripe={stripePromise}>

<SimpleCardForm handleCheckOut={handleCheckOut}></SimpleCardForm>
</Elements>
        </div>
    );
};
export default Payment;