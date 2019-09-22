import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  public resultado: String = 'Resultado';

  public calcular(){
    // validar os campos se foram preenchidos
    if(this.priceAl && this.priceGas){
      let pAl = parseFloat(this.priceAl);
      let pGas = parseFloat(this.priceGas);

      /**
       * Lógica de Negócio:
       * Preço do Alcool dividio por preço da gasolina se o resultado for maior ou igual 0,7
       * então é melhor usar gasolina senão é melhor usar alcool
       */
      let res = pAl / pGas;
      if(res >= 0.7){
        this.resultado = 'Melhor utilizar gasolina';
      }else{
        this.resultado = 'Melhor utiilizar álcool';
      }
    }else{
      this.resultado = 'Os campos não foram preenchidos';
    }
  }
}
