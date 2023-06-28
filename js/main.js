$(document).ready(function(){
    //slider
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

    console.log(cadena)
});