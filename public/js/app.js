import Functions from './functions.js';

let functions = new Functions();

// HEADER
const header = document.getElementById('header');
functions.load_file('./layouts/navbar.html', header)

// PAGE CONTAINER AND ROUTES
const page_container = document.getElementById('page-container');
functions.load_file('./pages/home.html', page_container);

document.addEventListener("DOMContentLoaded", () => {

    setTimeout(() => {

        let home = document.getElementById('home');
        home.addEventListener('click', () => {
        
            functions.load_file('./pages/home.html', page_container)

            setTimeout(() => {

                let btn_contact = document.getElementById('btn-contact');
                let btn_close_contact = document.getElementById('btn-close-contact');
                let modal_contact = document.getElementById('modal-contact');
                btn_contact.addEventListener('click', function() {

                    functions.modal('show', modal_contact)

                })
                btn_close_contact.addEventListener('click', function() {

                    functions.modal('hide', modal_contact)

                })

            }, 200)
        
        })
        
        let about = document.getElementById('about');
        about.addEventListener('click', () => {
        
            functions.load_file('./pages/about.html', page_container)
        
        })
        
        let faq = document.getElementById('faq');
        faq.addEventListener('click', () => {
        
            functions.load_file('./pages/faq.html', page_container)
            setTimeout(() => {

                let accord = document.getElementsByClassName('accord-title');
                for(let i = 0; i < accord.length; i++) {

                    accord[i].addEventListener('click', function(e) {

                        let content = e.target.nextSibling.nextSibling;
                        let more = e.target.firstChild.nextSibling;
                        let minus = e.target.firstChild.nextSibling.nextSibling;

                        if(content.classList.contains('d-none')){

                            content.classList.remove('d-none');
                            setTimeout(() => {

                                content.classList.toggle('show');
                                content.classList.toggle('p-1');
                                more.classList.toggle('d-none');
                                minus.classList.toggle('d-none');
    
                            }, 200)

                        } else {

                            content.classList.toggle('show');
                            content.classList.toggle('p-1');
                            more.classList.toggle('d-none');
                            minus.classList.toggle('d-none');
                            setTimeout(() => {

                                content.classList.add('d-none');

                            }, 1000)

                        }
                        
                    
                    })

                }
    
            }, 500)
        
        })

        let btn_contact = document.getElementById('btn-contact');
        let btn_close_contact = document.getElementById('btn-close-contact');
        let modal_contact = document.getElementById('modal-contact');
        btn_contact.addEventListener('click', function() {

            functions.modal('show', modal_contact)

        })
        btn_close_contact.addEventListener('click', function() {

            functions.modal('hide', modal_contact)

        })

    }, 500)

});
