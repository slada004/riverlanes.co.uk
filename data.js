async function data () {
    const name = document.getElementById('user-name');
    const balance = document.getElementById('balance');
    const referrals = document.getElementById('referrals');
    const pte = document.getElementById('pte');
    const reflink = document.getElementById('reflink');


    const url = 'https://jwhite.onrender.com/api/user/';

    const req = await fetch(url, {
        method: 'GET',
        headers: {
            'auth-token': localStorage.getItem('token'),
        },
    });

    if (req.status !== 200) {
        document.location.href = '/login.html';
    }

    const res = await req.json();
    console.log(res);

    pte.textContent = `NGN${res.user.accountbalance * 5}`;
    referrals.textContent = res.user.referrals;
    reflink.value = res.user.id;
    name.textContent = res.user.name;
    balance.textContent = `NGN${res.user.accountbalance}`;

    localStorage.setItem('name', res.user.name);
    localStorage.setItem('email', res.user.email);
};

data();