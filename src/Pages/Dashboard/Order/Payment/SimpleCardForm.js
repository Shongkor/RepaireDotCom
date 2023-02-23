import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Link } from 'react-router-dom';

const SimpleCardForm = ({handleCheckOut}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError,setCardError] = useState(null)
    const [cardSuccess ,setCardSuccess] = useState(null)
    
    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }


        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setCardError(error.message )
            setCardSuccess(null)
        } else {
            setCardSuccess(paymentMethod.id)
            setCardError(null)
            handleCheckOut(paymentMethod.id);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button type="submit" className='btn btn-outline-success my-4 px-5' disabled={!stripe}>
                    Pay
                </button>
            </form>
            {
            cardError && <p style={{color: 'red'}}>{cardError}</p>
            }
            {
            cardSuccess && <p style={{color: 'green'}}>Payment Successful</p> && <Link to="/add-review"><button className='btn btn-outline-info'>Add Review</button></Link>
            }
        </div>
        
    );
};
export default SimpleCardForm;