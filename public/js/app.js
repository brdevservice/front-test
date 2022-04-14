import Functions from './functions.js';

let functions = new Functions();

// HEADER
const header = document.getElementById('header');
functions.load_file('./layouts/navbar.html', header)

// FOOTER
const footer = document.getElementById('footer');
functions.load_file('./layouts/footer.html', footer)

// PAGE CONTAINER AND ROUTES
const page_container = document.getElementById('page-container');
functions.load_file('./pages/home.html', page_container);

document.addEventListener("DOMContentLoaded", () => {

    setTimeout(() => {

        let mobile_home = document.getElementsByClassName('nav-home');

        mobile_home[0].addEventListener('click', () => {
        
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

        let mobile_about = document.getElementsByClassName('nav-about');

        mobile_about[0].addEventListener('click', () => {
        
            functions.load_file('./pages/about.html', page_container)
        
        })
        
        let about = document.getElementById('about');
        about.addEventListener('click', () => {
        
            functions.load_file('./pages/about.html', page_container)
        
        })

        let mobile_faq = document.getElementsByClassName('nav-faq');

        mobile_faq[0].addEventListener('click', () => {
        
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

        let menu_mobile_btn = document.getElementById('mobile-btn');
        menu_mobile_btn.addEventListener('click', function() {

            let container = document.getElementById('mobile-nav');
            if(container.style.opacity == 0) {

                container.style.opacity = 1;
                container.style.height = '172px';

            } else {

                container.style.opacity = 0;
                container.style.height = 0;

            }

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
