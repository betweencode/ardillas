function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  

    if (username === 'connyardillaporsiempre' && password === 'mariscalvel31') {
      window.location.href = 'https://www.instagram.com';
    } else {
      alert('usuario o contraseña incorrectos vuelva a intentarlo');
    }
  }

  function redirectToinstagram() {
    window.location.href = 'https://www.instagram.com';
  }
  
  function redirectToFacebook() {
    window.location.href = 'https://www.facebook.com';
  }

  

