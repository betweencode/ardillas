function usuarioiniciado(){

  let usuariologeado = localStorage.getItem("usuariologeado");
  if(usuariologeado){
    let inicio = document.getElementById("inicio");
    let sobrede = document.getElementById("sobrede");
    let spotify = document.getElementById("spotify");
    let ingresara = document.getElementById("ingresara");
    let cerrarsesion = document.getElementById("cerrarsesion");
   
    inicio.style.display = "inline-block";
    sobrede.style.display = "inline-block";
    spotify.style.display = "inline-block";
    ingresara.style.display = "none";
    cerrarsesion.style.display = "inline-block";


  }else{

    let inicio = document.getElementById("inicio");
    let sobrede = document.getElementById("sobrede");
    let spotify = document.getElementById("spotify");
    let ingresara = document.getElementById("ingresara");
    let cerrarsesion = document.getElementById("cerrarsesion");
   
    inicio.style.display = "none";
    sobrede.style.display = "none";
    spotify.style.display = "none";
    ingresara.style.display = "none";
    cerrarsesion.style.display = "none";
   
    if(document.URL.includes("/conny/conny.html")){

    }else{
        document.location.href = "/conny/conny.html";
    }
    
  }
}


window.onload = usuarioiniciado;


