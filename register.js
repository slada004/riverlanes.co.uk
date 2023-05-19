async function Register () {
    try {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('pass').value;
        const referralCode = document.getElementById('refCode').value;

        console.log(typeof(referralCode));

        const data = {
            name,
            email,
            password,
            referralCode,
        }

        const url = 'http://localhost:5000/api/user/register';
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

        if (req.status !== 200) {
            alert(res.msg);
            document.location.reload();
        } else {
            localStorage.setItem('token', res.token);
            document.location.href = '/dash.html';
        };
    } catch (error) {
        console.log(error);
    }
};


async function Login () {
    try {
        const email = document.getElementById('email').value;
        const password = document.getElementById('pass').value;

        const data = {
            email,
            password,
        };

        console.log(data);

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

        if (req.status !== 200) {
            alert(res.msg);
            document.location.reload();
        } else {
            localStorage.setItem('token', res.token);
            document.location.href = '/dash.html';
        };
    } catch (error) {
        console.log(error);
    }
};