function DatosDestiny() {
    document.getElementById("destiny").innerHTML=
    juegos[0].nombre+"<br>"+" Tuvo una fecha de salida el "+juegos[0].FechaSalida+"<br>"+
    " Fue desarrollado por "+juegos[0].desarrollador.empresa+"<br>"+
    "Y su pagina oficial es "+juegos[0].desarrollador.PagOficial;
}
function DatosDestinyC() {
    document.getElementById("destinyC").innerHTML=
    "Hay 3 subclases distintos: <br> "+juegos[0].roles[0].nombre+"<br>"+
    "Su clase solar se llama: "+juegos[0].roles[0].subclase[0].solar+"<br>"+
    "Su clase de vacío se llama: "+juegos[0].roles[0].subclase[0].vacío+"<br>"+
    "Su clase de arco se llama: "+juegos[0].roles[0].subclase[0].arco;
}
function DatosDestinyH() {
    document.getElementById("destinyH").innerHTML=
    "Hay 3 subclases distintos: <br> "+juegos[0].roles[1].nombre+"<br>"+
    "Su clase solar se llama: "+juegos[0].roles[1].subclase[0].solar+"<br>"+
    "Su clase de vacío se llama: "+juegos[0].roles[1].subclase[0].vacío+"<br>"+
    "Su clase de arco se llama: "+juegos[0].roles[1].subclase[0].arco;
}
function DatosDestinyT() {
    document.getElementById("destinyT").innerHTML=
    "Hay 3 subclases distintos: <br> "+juegos[0].roles[2].nombre+"<br>"+
    "Su clase solar se llama: "+juegos[0].roles[2].subclase[0].solar+"<br>"+
    "Su clase de vacío se llama: "+juegos[0].roles[2].subclase[0].vacío+"<br>"+
    "Su clase de arco se llama: "+juegos[0].roles[2].subclase[0].arco;
}

//-------------------------------------------------------------------------------------------------------//
function DatosDRG() {
    document.getElementById("drg").innerHTML=
    juegos[1].nombre+"<br>"+" Tuvo una fecha de salida el "+juegos[1].FechaSalida+"<br>"+
    " Fue desarrollado por "+juegos[1].desarrollador.empresa+"<br>"+
    "Y su pagina oficial es "+juegos[1].desarrollador.PagOficial;
}
function DatosDRGI() {
    document.getElementById("drgI").innerHTML=
    "Hay 4 roles distintos: <br><br>"
    +"Su nombre es <strong>"+juegos[1].roles[0].nombre+"</strong><br>"+
    "Su arma primaria se llama: "+juegos[1].roles[0].ArmasApoyo[0].primaria+"<br>"+
    "Su arma secundaria se llama: "+juegos[1].roles[0].ArmasApoyo[0].secundaria+"<br><br>"

    +"Su nombre es <strong>"+juegos[1].roles[1].nombre+"</strong><br>"+
    "Su arma primaria se llama: "+juegos[1].roles[1].ArmasApoyo[0].primaria+"<br>"+
    "Su arma secundaria se llama: "+juegos[1].roles[1].ArmasApoyo[0].secundaria+"<br><br>"

    +"Su nombre es <strong>"+juegos[1].roles[2].nombre+"</strong><br>"+
    "Su arma primaria se llama: "+juegos[1].roles[2].ArmasApoyo[0].primaria+"<br>"+
    "Su arma secundaria se llama: "+juegos[1].roles[2].ArmasApoyo[0].secundaria+"<br><br>"

    +"Su nombre es <strong>"+juegos[1].roles[3].nombre+"</strong><br>"+
    "Su arma primaria se llama: "+juegos[1].roles[3].ArmasApoyo[0].primaria+"<br>"+
    "Su arma secundaria se llama: "+juegos[1].roles[3].ArmasApoyo[0].secundaria+"<br><br>";
}
//-------------------------------------------------------------------------------------------------------//
function DatosInfamous() {
    document.getElementById("infamous").innerHTML=
    juegos[2].nombre+"<br>"+" Tuvo una fecha de salida el "+juegos[2].FechaSalida+"<br>"+
    " Fue desarrollado por "+juegos[2].desarrollador.empresa+"<br>"+
    "Y su pagina oficial es "+juegos[2].desarrollador.PagOficial;
}
function DatosInfamousH() {
    document.getElementById("infamousH").innerHTML=
    "Hay 3 Habilidades distintos: <br> La habilidad se llama: <strong>"+juegos[2].poderes[0].nombre+"</strong><br>"+
    "Su GranadaTáctica se llama: "+juegos[2].poderes[0].Habilidades[0].GranadaTáctica+"<br>"+
    "Su GranadaLetal se llama: "+juegos[2].poderes[0].Habilidades[0].GranadaLetal+"<br>"+
    "Su Super se llama: "+juegos[2].poderes[0].Habilidades[0].Super;
}
function DatosInfamousN() {
    document.getElementById("infamousN").innerHTML=
    "Hay 3 Habilidades distintos: <br> La habilidad se llama: <strong>"+juegos[2].poderes[1].nombre+"</strong><br><br>"+
    "Su GranadaTáctica se llama: "+juegos[2].poderes[1].Habilidades[0].GranadaTáctica+"<br>"+
    "Su GranadaLetal se llama: "+juegos[2].poderes[1].Habilidades[0].GranadaLetal+"<br>"+
    "Su Super se llama: "+juegos[2].poderes[1].Habilidades[0].Super;
}
function DatosInfamousV() {
    document.getElementById("infamousV").innerHTML=
    "Hay 3 Habilidades distintos: <br> La habilidad se llama: <strong>"+juegos[2].poderes[2].nombre+"</strong><br><br>"+
    "Su GranadaTáctica se llama: "+juegos[2].poderes[2].Habilidades[0].GranadaTáctica+"<br>"+
    "Su GranadaLetal se llama: "+juegos[2].poderes[2].Habilidades[0].GranadaLetal+"<br>"+
    "Su Super se llama: "+juegos[2].poderes[2].Habilidades[0].Super;
}
function DatosInfamousHo() {
    document.getElementById("infamousHo").innerHTML=
    "Hay 3 Habilidades distintos: <br> La habilidad se llama: <strong>"+juegos[2].poderes[3].nombre+"</strong><br><br>"+
    "Su GranadaTáctica se llama: "+juegos[2].poderes[3].Habilidades[0].GranadaTáctica+"<br>"+
    "Su GranadaLetal se llama: "+juegos[2].poderes[3].Habilidades[0].GranadaLetal+"<br>"+
    "Su Super se llama: "+juegos[2].poderes[3].Habilidades[0].Super;
}
//-------------------------------------------------------------------------------------------------------//
function DatosCod() {
    document.getElementById("Cod").innerHTML=
    juegos[3].nombre+"<br>"+" Tuvo una fecha de salida el "+juegos[3].FechaSalida+"<br>"+
    " Fue desarrollado por "+juegos[3].desarrollador.empresa+"<br>"+
    "Y su pagina oficial es "+juegos[3].desarrollador.PagOficial;
}
function DatosCod1() {
    document.getElementById("Cod1").innerHTML=
    "Hay 3 tipos de exoesqueletos distintos: <br><br>"
    +"Su nombre es <strong>"+juegos[3].Exoesqueletos[0].nombre+"</strong><br>"+
    "Su habilidad primaria se llama: "+juegos[3].Exoesqueletos[0].Habilidades[0].primaria+"<br>"+
    "Su habilidad secundaria se llama: "+juegos[3].Exoesqueletos[0].Habilidades[0].secundaria+"<br>"+
    "Su habilidad terciaria se llama: "+juegos[3].Exoesqueletos[0].Habilidades[0].terciaria+"<br><br>"

    +"Su nombre es <strong>"+juegos[3].Exoesqueletos[1].nombre+"</strong><br>"+
    "Su habilidad primaria se llama: "+juegos[3].Exoesqueletos[1].Habilidades[0].primaria+"<br>"+
    "Su habilidad secundaria se llama: "+juegos[3].Exoesqueletos[1].Habilidades[0].secundaria+"<br>"+
    "Su habilidad terciaria se llama: "+juegos[3].Exoesqueletos[1].Habilidades[0].terciaria+"<br><br>"

    +"Su nombre es <strong>"+juegos[3].Exoesqueletos[2].nombre+"</strong><br>"+
    "Su habilidad primaria se llama: "+juegos[3].Exoesqueletos[2].Habilidades[0].primaria+"<br>"+
    "Su habilidad secundaria se llama: "+juegos[3].Exoesqueletos[2].Habilidades[0].secundaria+"<br>"+
    "Su habilidad terciaria se llama: "+juegos[3].Exoesqueletos[2].Habilidades[0].terciaria+"<br>";
    
}

var juegos = [{
    "nombre": "Destiny 2",
    "FechaSalida": "28-09-2017",
    "desarrollador": {
        "empresa": "Bungie",
        "PagOficial": "bungie.net"
    },
    "roles": [{
        "nombre": "Cazador",
        "subclase": [{
            "solar":"Pistolero" ,
            "vacío":"Acechador nocturno" ,
            "arco":"Jinete del arco"
}]
    }, {
        "nombre": "Hechicero",
        "subclase": [{
            "solar":"Empuñasoles" ,
            "vacío":"Caminante del vacío" ,
            "arco":"Invocatormentas"
}]
    }, {
        "nombre": "Titán",
        "subclase": [{
            "solar":"Quiebrasoles" ,
            "vacío":"Centinela" ,
            "arco":"Asaltante"
}]
    }]
},{
"nombre":"Deep Rock Galactic" ,
    "FechaSalida": "28-02-2018",
    "desarrollador": {
        "empresa": "Ghost Ship Games",
        "PagOficial": "https://www.ghostship.dk"
    },
    "roles": [{
        "nombre": "Ingeniero",
        "ArmasApoyo": [{
            "primaria":"Pistola de plataformas" ,
            "secundaria":"Torreta automática" 
}]
    }, {
        "nombre": "Explorador",
        "ArmasApoyo": [{
            "primaria":"Pistola de bengalas" ,
            "secundaria":"Gancho" 
}]
}, {
        "nombre": "Artillero",
        "ArmasApoyo": [{
            "primaria":"Pistola de tirolinas" ,
            "secundaria":"Generador de escudo portátil" 
}]
    }, {
        "nombre": "Perforador",
        "ArmasApoyo": [{
            "primaria":"Taladros eléctricos" ,
            "secundaria":"C4"
}]
    }]
},{
"nombre":"Infamous second son",
    "FechaSalida": "21-03-2014",
    "desarrollador": {
        "empresa": "Sucker Punch Productions",
        "PagOficial": "https://www.suckerpunch.com"
    },
    "poderes": [{
        "nombre": "Humo",
        "Habilidades": [{
            "GranadaTáctica":"Bomba de azufre",
            "GranadaLetal":"Misil de ceniza",
            "Super":"Descenso orbital" 
}]
    }, {
        "nombre": "Neón",
        "Habilidades": [{
            "GranadaTáctica":"Burbuja de éxtasis" ,
            "GranadaLetal":"Rayo de fósforo",
            "Super":"Barrido radiante" 
}]
}, {
        "nombre": "Video",
        "Habilidades": [{
            "GranadaTáctica":"Torrente de video" ,
            "GranadaLetal":"Hojas sanguinarias",
            "Super":"Sudario de invisibilidad" 
}]
    }, {
        "nombre": "Hormigón",
        "Habilidades": [{
            "GranadaTáctica":"Impulsores de hormigón" ,
            "GranadaLetal":"Andada de hormigón",
            "Super":"Fuerza de piedra" 
}]
    }]
},{
"nombre":"Call of duty: Advanced Warfare" ,
    "FechaSalida": "04-11-2014",
    "desarrollador": {
        "empresa": "Sledgehammer Games",
        "PagOficial": "https://www.sledgehammergames.com"
    },
    "Exoesqueletos": [{
        "nombre": "Asalto",
        "Habilidades": [{
            "primaria":"Salto mejorado" ,
            "secundaria":"Ondas sónicas",
            "terciaria":"Asistencia de caída" 
}]
    }, {
        "nombre": "Especialista",
        "Habilidades": [{
            "primaria":"Escudo extensible" ,
            "secundaria":"Hiperactividad",
            "terciaria":"Ocultación" 
}]
}, {
        "nombre": "Asalto-Especialista",
        "Habilidades": [{
        "primaria":"Estimulante" ,
        "secundaria":"Guantes magnéticos",
        "terciaria":"Gancho"  
}]
    }
        
    ]
}


];
