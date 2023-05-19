function makePayment() {
    FlutterwaveCheckout({
        public_key: "FLWPUBK_TEST-a69503fa38db11ad11dc4ea595059e4c-X",
        tx_ref: "titanic-48981487343MDI0NzMx",
        amount: 4600,
        currency: "NGN",
        payment_options: "banktransfer, ussd, card,",
        redirect_url: "https://glaciers.titanic.com/handle-flutterwave-payment",
        customer: {
            email: "rose@unsinkableship.com",
            phone_number: "08102909304",
            name: "Rose DeWitt Bukater",
        },
        customizations: {
            title: "Golden Recharge Investment",
            description: "Payment for GRI",
            logo: "https://goldenrechargeinvestment.com/images/GRI.png",
        },
    });
}