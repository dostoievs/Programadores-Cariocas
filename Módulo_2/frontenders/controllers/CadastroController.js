class CadastroController {
    constructor() {
        this.array_cadastro = new Array();
    }
    /*telephoneIsValid=function() {
        let phoneRegex = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
        var digits = telephone.replace(/\D/g, "");
        return phoneRegex.test(digits);
        
      }*/
    passwordIsValid=function(){
        if((password==password_confirmation)&&(password.length>=8)&&(password.length<=20)){
            return true;
        }
        else{
            return false;
        }
    }
}
const form = document.querySelector('form');
cadastroController=new CadastroController();
form.addEventListener('submit', (e) => {
    if(cadastroController.passwordIsValid()==true){
        const note = new Cadastro(document.getElementById('fullname').value, document.getElementById('email').value,
                              document.getElementById('telephone').value, document.getElementById('password').value,
                              document.getElementById('password_confirmation').value)
    }
    else{
        console.log("Erro")
    }
    //cadastroController.array_anotacoes.push(note)
    //console.log(cadastroController.array_cadastro)
    e.preventDefault()
});