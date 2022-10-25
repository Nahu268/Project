async function fotoPerro(){
    const response = await fetch("https://dog.ceo/api/breeds/image/random")
    const data = await response.json()
    
    let divisor = document.getElementById("imagenPortada")

    let img = document.createElement('img')
    img.setAttribute('src',data.message)
   
    divisor.appendChild(img)

    img.style.height='25rem';
    img.style.width= auto;
    
}
fotoPerro()