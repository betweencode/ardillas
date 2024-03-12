function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    let usuariosistema = localStorage.getItem("usuario");
    let constrasenia = localStorage.getItem("password");

    if (username === usuariosistema && password === constrasenia) {
      window.location.href = '/';
      localStorage.setItem("usuariologeado",true);
    } else {
      let mietiquetaerror = document.getElementById("error");
      mietiquetaerror.style.display = "block";
    }
  }

  function redirectToinstagram() {
    window.location.href = 'https://www.instagram.com';
  }
  
  function redirectToFacebook() {
    window.location.href = 'https://www.facebook.com';
  }

  

