async function verifyPayment (payment) {
    console.log(payment);

    try {
        const url = 'https://jwhite.onrender.com/api/user/verify-payment';
        const data = {
            transaction_id: payment.id,
        };

        const req = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'auth-token': localStorage.getItem('token'),
            },
        });

        const res = await req.json();
        console.log(res);
    } catch (error) {
        alert('Error confirming your payment. Try Again!');
    }
};