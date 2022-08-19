const button_query = document.querySelector('#query');

button_query.addEventListener('keypress', (e) =>{
    if(e.keyCode == 13){
        let query = document.querySelector('#query').value;
        document.querySelector('#date').value = new Date();
    }
});

document.querySelector('.logo').addEventListener('click', ()=>{
    window.location.href = 'http://localhost:3000/';
})

