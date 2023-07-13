$(document).ready(function(){
    //slider
    if(window.location.href.indexOf('index') > -1){
        $(".galeria").bxSlider({
            mode: 'fade',
            caption: true,
            slideWidth: 1250,
            responsive: true
        });
        //post
        const posts = [
            {
                title: 'Prueba de título',
                date: `Publicado el día ${moment().format('DD')} de ${moment().format('MMMM')} de ${moment().format('YYYY')}`,
                post: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
            },
            {
                title: 'Título del segundo post',
                date: `Publicado el día ${moment().format('DD')} de ${moment().format('MMMM')} de ${moment().format('YYYY')}`,
                post: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
            },
            {
                title: 'Título del tercer post',
                date: `Publicado el día ${moment().format('DD')} de ${moment().format('MMMM')} de ${moment().format('YYYY')}`,
                post: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
            },
            {
                title: 'Título del cuarto post',
                date: `Publicado el día ${moment().format('DD')} de ${moment().format('MMMM')} de ${moment().format('YYYY')}`,
                post: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
            }
        ]
        
        let cadena = ''
        posts.forEach((post, index)=>{
            cadena += `<article class="post">
                            <h2>${post.title}</h2>
                            <span class="date">${post.date}</span>
                            <p>
                                ${post.post}
                            </p>
                            <a href="#" class="button-more">Leer más..</a>
                        </article>`
        })

        $('#posts').append(cadena)
    }

    /* Selector de temas */
    let theme = $('#theme');
    $('#to-green').click(function(){
        theme.attr('href', 'css/green.css')
    })

    $('#to-red').click(function(){
        theme.attr('href', 'css/red.css')
    })

    $('#to-blue').click(function(){
        theme.attr('href', 'css/blue.css')
    })

    /* Scroll arriba */
    $('.subir').click(function(e){
        e.preventDefault()
        
        $('html, body').animate({
            scrollTop: 0
        }, 500)

        return false
    })

    /* Login falso */
    $('#login form').submit(function(){
        let form_name = $('#form_name').val()

        localStorage.setItem('form_name', form_name)
    })
    
    let form_name = localStorage.getItem('form_name')

    if(form_name != null){
        let about_p = $('#about p')

        about_p.html(`<br><strong>Bienvenido ${form_name}</strong> `)
        about_p.append('<a href="#" id="logout">Cerrar sesión</a>')

        $('#login').hide()

        $('#logout').click(function(){
            localStorage.clear()
            location.reload()
        })
    }
    
    if(window.location.href.indexOf('about') > -1){
        $('#acordeon').accordion();
    }

    if(window.location.href.indexOf('reloj') > -1){
        setInterval(function(){
            let reloj = moment().format('h:mm:ss a')
            $('#reloj').html(reloj)
        }, 1000)
        
        
    }

    // Validacion
    if(window.location.href.indexOf('contact') > -1){


        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        })

        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        })
    }
});