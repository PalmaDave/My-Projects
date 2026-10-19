const button = document.getElementById('black');

button.addEventListener('click',() =>{
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')){
        button.textContent = 'White';
    }else{
        button.textContent = 'Dark Mode';
    }
    
});