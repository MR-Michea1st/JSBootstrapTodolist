let btn = document.querySelector('.add');
let inp = document.querySelector('input');
let f = 0;
btn.addEventListener('click' , (ev) => {
    let par = document.querySelector('.Todos');
    if (inp.value.length > 0) {
        let newDiv = document.createElement('div');
        newDiv.textContent = inp.value;
        newDiv.classList.add('card')
        par.appendChild(newDiv)
        let rem = document.createElement('img');
        rem.src = 'Icons/rubbish-bin.png';
        newDiv.appendChild(rem); 
        rem.classList.add('Rubbish_icon');
        let comp = document.createElement('img');
        comp.src = 'Icons/blackTick.png';
        newDiv.appendChild(comp);
        comp.classList.add('tick_icon');
        comp.onclick = (ev) => {
            ev.target.parentNode.classList.toggle('checked');
        }
    
        rem.onclick = (ev) => {
            ev.target.parentNode.remove();
        }
    }
    
    inp.value = ''
    
})



