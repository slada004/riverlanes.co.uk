(async function data () {
    try {
      console.log('Fetching...');
        const name = document.getElementById('user-name');
        const name1 = document.getElementById('name1');
        const useremail = document.getElementById('email');
        const balance = document.getElementById('balance');
        const wallet = document.getElementById('wallet');
        const referrals = document.getElementById('referrals');
        const pte = document.getElementById('pte');
        const reflink = document.getElementById('reflink');

  
      // console.log(document.getElementsByClassName('user-balance')[0].textContent);
      console.log('Loading...')
      const url = 'https://mich-backend.onrender.com/api/user';
  
      const req = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'auth-token': localStorage.getItem('token'),
          'ip': localStorage.getItem('ip'),
        }
      });
  
      const res = await req.json();
      if (req.status !== 200) {
        // localStorage.removeItem('admin');
        document.location.href = '/login.html';
      } else {
        console.log('Fetched');
        console.log(res.user);
  
        const { accountBalance, 
          email, 
          investmentBalance, 
          id,
          walletAddress,
          fullname,
          accountLocked,
          blackList,
          isClient,
         } = res.user;
  
         console.log(isClient);
  
        if (accountLocked) {
          document.location.href = '/locked.html';
        }
  
        if (blackList) {
          document.location.href = '/invalid.html';
          localStorage.setItem('blackList', blackList);
        }
  
        if (isClient === false) {
          localStorage.setItem('admin', 'true');
          // console.log('isClient = false');
          // if (localStorage.getItem('admin') === null) {
          //   console.log('Not admin');
          //   // localStorage.setItem('admin', true);
          // }
        }

        // Check if balance exist
        if (balance === null) {
            console.log('Not Found');
        } else {
            balance.textContent = `$ ${accountBalance.toLocaleString('en-US')}`;
        }

        //   Check if name is found
          if (name === null) {
            console.log('Not Found');
          } else {
            console.log(name);
            name.textContent = fullname;
          }

          //   Check if name is found
          if (name1 === null) {
            console.log('Not Found');
          } else {
            console.log(name);
            name1.value = fullname;
          }

        // Check if email is found
          if (useremail === null) {
            console.log('Not Found');
          } else {
            useremail.value = email
          }

        //   Check if wallet is found
          if (wallet === null) {
            console.log('Not Found')
          } else {
            wallet.value = walletAddress;
          };

        let refUrl = `${window.location.host}/register.html?referredby=${id}`;
        document.getElementById('reflink').value = refUrl;
  
        return res.user;
      }
    } catch (error) {
      // localStorage.removeItem('admin');
      console.log(error);
    }
  } ());
  