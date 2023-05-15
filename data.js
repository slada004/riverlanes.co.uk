async function data () {
    const url = '';

    const req = await fetch(url, {
        method: 'GET',
        headers: {
            'auth-token': localStorage.getItem('token'),
        },
    });

    const res = await req.json();
    console.log(res);
};