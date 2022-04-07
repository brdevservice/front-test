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
        
        })
        
        let about = document.getElementById('about');
        about.addEventListener('click', () => {
        
            functions.load_file('./pages/about.html', page_container)
        
        })
        
        let faq = document.getElementById('faq');
        faq.addEventListener('click', () => {
        
            functions.load_file('./pages/faq.html', page_container)
        
        })

    }, 500)

});
