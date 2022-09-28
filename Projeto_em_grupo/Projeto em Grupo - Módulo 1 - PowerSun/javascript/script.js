function exibirAlerta(){
    let temas=["Eu sou o SOL!", "Vem pro sol", "SoftSkill é inútil!"];
    var exibicao=temas[(Math.floor(Math.random() * temas.length))];
    alert(exibicao);
}