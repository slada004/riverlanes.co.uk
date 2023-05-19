async function verifyAccountNumber() {
    const accountNumber = document.getElementById('accountNumber').value;
    const bank = document.getElementById('bank').value;

    const url = 'http://localhost:5000/api/user/bank-verification';
    const data = {
        accountNumber,
        bank,
    }

    const req = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })

    const res = await req.json();
    const fetchedName = res.msg.data.account_name;
    document.getElementById('account_name').textContent = fetchedName;
    console.log(fetchedName);
};

async function transfer() {
    const accountNumber = document.getElementById('accountNumber').value;
    const bank = document.getElementById('bank').value;
    const amount = document.getElementById('amount').value;
    const bt = document.getElementById('withdraw');

    bt.textContent = 'Please Wait...'

    const data = {
        accountNumber,
        amount,
        bank,
    }

    const url = 'http://localhost:5000/api/user/withdraw';

    const req = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'auth-token': localStorage.getItem('token'),
        },
    });

    const res = await req.json();
    bt.textContent = 'Withdraw'

    if (req.status !== 200) {
        return alert(res.msg);
    } else {
        return alert('Withdrawal Successful')
    }
};