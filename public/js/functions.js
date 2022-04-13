export default class Functions {

    load_file(url_file, el) {

        let xml = new XMLHttpRequest();
        xml.onreadystatechange = () => {
    
            if(xml.readyState == 4 && xml.status == 200) {
    
                el.innerHTML = xml.responseText;
    
            }
    
        }
        xml.open("GET", url_file, true);
        xml.send();
    
    }

    modal(action, el) {

        switch(action) {

            case 'show':
                el.className += " modal-show";
                document.body.style.overflowY = 'hidden';
                break;
            
            case 'hide':
                el.className = "modal";
                document.body.style.overflowY = 'auto';
                break;
            
            default:
                break;

        }

    }

}