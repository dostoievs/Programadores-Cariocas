
const evento=document.querySelector('form');
const resultado = document.getElementById('resultado');
evento.addEventListener('submit', (e)=>{
    const nome= evento.nome.value;
    const nota1 = Number(evento.nota1.value);
    const nota2 = Number(evento.nota2.value);
    const nota3 = Number(evento.nota3.value);
    const nota4 = Number(evento.nota4.value);
    let media =(nota1+nota2+nota3+nota4)/4;
    resultado.value=`${media}`;
    e.preventDefault();
})
