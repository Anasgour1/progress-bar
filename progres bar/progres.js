// let button = document.getElementsByName('button')
// button.addEventListener('click', run)

// let number = document.getElementById('number');
// let counter = 0;

let number = document.getElementById('number');
let counter = 0;
    setInterval(() => {
        if(counter == 60){
            clearInterval
        }
        else{
        counter += 1;
        number.innerHTML = counter + '%';
        }
        
    }, 30); 


