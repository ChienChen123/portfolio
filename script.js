function toggleMode(){
    const html = document.documentElement
    html.classList.toggle("light")
    
    // pegar a tag img 
    const img = document.querySelector("#profile img")


    // substituir a imagem
    if(html.classList.contains("light")){

    // se tiver light mode, adicionar a imahem light
        img.setAttribute("src", "./assets/mobile/avatar-light.png")
        img.setAttribute("alt", "Foto preto e branco do Chen com boné e óculos com a mão no queixo")
    // se tiver sem light mode , manter a imagem normal
    }else {
        
        img.setAttribute("src", "./assets/mobile/Avatar.png")
        img.setAttribute("alt", "Foto do Chen usando óculos e fundo branco")
    }
    //if(html.classList.contains("light")){
    //  html.classList.remove("light")
    //}else{
      //  html.classList.add("light")
    //}
}