const button = document.getElementById('button');

button.addEventListener('click', () =>{
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')){
        button.textContent = 'Aquamarine mode';
    }else{
        button.textContent = ' Dark Mode';
    }
});