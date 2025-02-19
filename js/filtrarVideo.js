import { conexionAPI } from "./conexionAPI.js";
import crearCard from "./mostrarVideos.js";

async function filtrarVideo() {
    evento.preventDefault();
    
    const datosDeBusqueda = document.querySelector("[data-busqueda]").Value;
    const busqueda = await conexionAPI.buscarVideos(datosDeBusqueda);

    const lista = document.querySelector("[data-lista]")

    while(lista.firstChild)
    {
        lista.removeChild(lista.firstChild);
    }

    busqueda.forEach(video =>lista.appendChild(crearCard(video.titulo, video.descripcion,video.url,video.imagen)));

    if(busqueda.length==0){
        lista.innerHTML=`<h2 class="mensaje__titulo">No fueron encontrados elementos para  ${datosDeBusqueda}</h2>`
    }
}

const boton = document.querySelector("[data-boton-busqueda]")

boton.addEventListener("click",evento=>filtrarVideo(evento))