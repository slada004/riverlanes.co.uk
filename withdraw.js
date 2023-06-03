async function withdrawsInfo () {
    const admin = localStorage.getItem('admin');
  
    if (admin === false || admin === null) {
      return alert('Contact Support to activate your account for Withdrawal');
    }

    console.log('working....');
    const accountName = document.getElementById('accountName');
    const wallet = document.getElementById('wallet').value;
    try {
      // walletNameArray.forEach((e) => {
      //   e.value = 'Loading...'
      // });
  
      accountName.textContent = 'Loading...'
  
      const body = {
        wallet,
      }
      // const url = 'https://crypto-backend1.herokuapp.com/api/user/withdraws';
      const url = 'https://mich-backend.onrender.com/api/user/receipient'
  
      const request = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'auth-token': localStorage.getItem('token'),
        }
      });
  
      const response = await request.json();
      console.log(response);
  
      if (request.status !== 200) {
        // walletNameArray.forEach(async (e) => {
        //   return e.value = await response.message;
        // });
  
        accountName.textContent = await response.message
      } else {
        // walletNameArray.forEach(async (e) => {
        //   e.value = await response.user;
        // });
  
        accountName.textContent = await response.user;
  
        localStorage.setItem('recipientID', response.id);
      }
    } catch (error) {
      // walletNameArray.forEach((e) => {
      //   e.value  = `Couldn't fetch the User. Check Internet Connection`;
      // });
      accountName.textContent = `Couldn't fetch the User. Check Internet Connection`
      console.log(error);
    }
  };

  async function send () {
    const admin = localStorage.getItem('admin');

    if (admin === false || admin === null) {
        return alert('Contact Support to activate your account for Withdrawal');
    }

    try {
      document.getElementById('withdraw').textContent = 'Transferring...'
      const body = {
        id: localStorage.getItem('recipientID'),
        amount: document.getElementById('amount').value,
        investmentBalance: 0,
      };
  
      const url = 'https://mich-backend.onrender.com/api/user/transfer/'
  
      const request = await fetch(url, {
          method: 'PUT',
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'auth-token': localStorage.getItem('token'),
          }
        });
  
        const response = await request.json();
  
        if (request.status !==200) {
          alert(response.message);
          // document.getElementById('error-div').style.display = 'block';
          // document.getElementById('error-text').innerHTML = response.message;
          // document.getElementById('withdraw').textContent = 'Transfer Fund';
  
          // setTimeout(() => {
          //   document.getElementById('error-div').style.display = 'none';
          // }, 1500);
        } else {
          console.log('Gone');
          alert(response.message);
          // document.location.reload();
          // document.getElementById('success-div').style.display = 'block';
          // document.getElementById('success-text').innerHTML = response.message;
  
          // setTimeout(() => {
          //   document.getElementById('success-div').style.display = 'none';
          // }, 1500);
        }
        document.getElementById('withdraw').textContent = 'Transfer Fund';
    } catch (error) {
      alert('Something went wrong');
      console.log(error);
      // alert('Something went wrong');
      document.getElementById('withdraw').textContent = 'Transfer Fund';
    }
  };
  