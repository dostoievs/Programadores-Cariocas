const prompt = require ('prompt-sync')()
let css = []
let resp = 'CSS'
while (resp !='SAIR'){
      resp = prompt('Digite a Propriedade CSS:  ').toUpperCase()
      if (resp != 'SAIR'){
          css.push (resp)
          css.sort()
      }
}
