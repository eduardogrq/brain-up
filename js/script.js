var menu = document.querySelector('.hamburger');

function toggleMenu (event) {
this.classList.toggle('is-active');
        document.querySelector( ".menuppal" ).classList.toggle("is_active");
        event.preventDefault();
}

menu.addEventListener('click', toggleMenu, false);

// Primer Grado********** Primer Grado********** Primer Grado********** Primer Grado********** Primer Grado********** Primer Grado**********

// Desplegar materias al hacer click en el grado

let subjects = $('#first').click(function(){
        $('#segundo-grado').removeClass('d-block').addClass('d-none');
        $('#tercer-grado').removeClass('d-block').addClass('d-none');

        $('#primer-grado').addClass('d-block');
})


$('#second').click(function(){
        $('#primer-grado').removeClass('d-block').addClass('d-none');
        $('#tercer-grado').removeClass('d-block').addClass('d-none');

        $('#segundo-grado').addClass('d-block');
})

$('#third').click(function(){
        $('#primer-grado').removeClass('d-block').addClass('d-none');
        $('#segundo-grado').removeClass('d-block').addClass('d-none');

        $('#tercer-grado').addClass('d-block');
})

// Recursos de Biología
$('#biologia-materia').click(function(){
        document.querySelectorAll('.school-resources').forEach(element => {
                element.classList.add('d-none')
                element.classList.remove('d-block')
        })
        $('#biologia-recursos').addClass(' d-block');        
})
// Recursos de Español
$('#espanol-materia').click(function(){
        document.querySelectorAll('.school-resources').forEach(element => {
                element.classList.add('d-none')
                element.classList.remove('d-block')
        })
        $('#espanol-recursos').addClass(' d-block');       
})
// Recursos de FCE
$('#fce-materia').click(function(){
        document.querySelectorAll('.school-resources').forEach(element => {
                element.classList.add('d-none')
                element.classList.remove('d-block')
        })
        $('#fce-recursos').addClass(' d-block');       
})

// Recursos de Geografía
$('#geografia-materia').click(function(){
        document.querySelectorAll('.school-resources').forEach(element => {
                element.classList.add('d-none')
                element.classList.remove('d-block')
        })
        $('#geografia-recursos').addClass(' d-block');       
})
// Recursos de FCE
$('#historia-materia').click(function(){
        document.querySelectorAll('.school-resources').forEach(element => {
                element.classList.add('d-none')
                element.classList.remove('d-block')
        })
        $('#historia-recursos').addClass(' d-block');       
})
// Recursos de FCE
$('#ingles-materia').click(function(){
        document.querySelectorAll('.school-resources').forEach(element => {
                element.classList.add('d-none')
                element.classList.remove('d-block')
        })
        $('#ingles-recursos').addClass(' d-block');       
})
// Recursos de FCE
$('#matematicas-materia').click(function(){
        document.querySelectorAll('.school-resources').forEach(element => {
                element.classList.add('d-none')
                element.classList.remove('d-block')
        })
        $('#matematicas-recursos').addClass(' d-block');       
})