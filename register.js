async function Register () {
    try {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('pass').value;
        const referralCode = localStorage.getItem('refCode');

        const data = {
            name,
            email,
            password,
            referralCode,
        }

        const url = 'https://jwhite.onrender.com/api/user/register';
        const req = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
    });

    const res = await req.json();
    console.log(res);
    } catch (error) {
        console.log(error);
    }
};


async function Login () {
    try {
        const email = document.getElementById('email');
        const password = document.getElementById('pass');

        const data = {
            email,
            password,
        };

        const url = 'http://localhost:5000/api/user/login'

        const req = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Mode': 'no-cors',
            },
        });

        const res = await req.json();
        console.log(res);
    } catch (error) {
        console.log(error);
    }
};

console.log('Working...')