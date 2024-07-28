function toggleMode() {

    const html = document.documentElement

    html.classList.toggle('light')


   
    const img = document.querySelector('#profile img')

    if (html.classList.contains('light')) {

        img.setAttribute('src', './src/img/sol.jpg')

    } else {

        img.setAttribute('src', './src/img/lua-stars.png')

    }





}