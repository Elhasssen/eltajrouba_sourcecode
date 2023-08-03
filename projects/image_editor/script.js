let brt = document.getElementById('brt');
let edit_text = document.getElementById('edit_text');
let text = brt.innerText;


brt.addEventListener('click',() => {
    edit_text.innerText = text;
}
)


