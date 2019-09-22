import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  // Declare of variables to show on home page
  public pesquisa: String = '';
  public resultado: String = '';
  public title: String = 'Meu Primeiro App Ionic';
  public imgRandom: String = 'https://source.unsplash.com/random/200x200';
  public imgLocal: String = '../assets/icon/icone-celular.png';
 
  constructor(private navegacao: NavController){ }
  ngOnInit(){}

  public routeList(){
    this.navegacao.navigateForward('lista');
  }
  public recuperar(){
    this.resultado = this.pesquisa;
  }
  public routeButton(): void{
    this.navegacao.navigateForward('botoes');
  }
  public updateTitle(): void {
    this.title = 'Title was update';
  }
  public buttonClicked(): void{
    this.title = 'Button was clicked';
  }
}
