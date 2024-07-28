function toggleMode() {

    const html = document.documentElement

    html.classList.toggle('light')


    //pegar a tag imagem
    const img = document.querySelector('#profile img')



    //substituir a imagem
    if (html.classList.contains('light')) {

        //light mode, adicionar nova imagem
        img.setAttribute('src', './img/sol.jpg')

    } else {
        //dark mode, manter imagem 

        img.setAttribute('src', './img/lua-stars.png')

    }





}