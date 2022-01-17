
import './styles/styles.scss';


document.addEventListener('click', (event) => {
    let element = event.target;

    if(element.classList.contains('fa-github')) {
        window.open('https://github.com/madeinangola/afama', '_blank');
    }
})