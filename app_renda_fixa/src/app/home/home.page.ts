import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public moderado: string = 'moderado';
  public agressivo: string = 'agressivo';

  constructor(private router: Router, private dataService: DataService) {
  }

  fundos_arr = [
    {
      id: 1,
      aplicacao_minima: (5000).toLocaleString('pt-BR'),
      classe: 'Fundo Multimerdado',
      cnpj: "34.669.263/0001-56",
      gestor: "Ut enim ad minima",
      liquidez: "D+1",
      nome: "at vero eos et accusamus et iusto odio dignissimos at vero eos et accusamus et iusto odio dignissimos at vero eos et accusamus et iusto odio dignissimos",
      perfil: "agressivo",
      rentabilidade: 16.72,
      score: "6.8"
    },
    {
      id: 2,
      aplicacao_minima: (10000).toLocaleString('pt-BR'),
      classe: "Fundo Multimercado",
      cnpj: "24.339.263/0001-56",
      gestor: "lorem ipsum dolor",
      liquidez: "D+29",
      nome: "ducimus qui blanditiis praesentium voluptatum deleniti at vero eos et accusamus et iusto odio dignissimos at vero eos et accusamus et iusto odio dignissimos",
      perfil: "moderado",
      rentabilidade: 11.72,
      score: "5.8"
    },
    {
      id: 3,
      aplicacao_minima: (1000).toLocaleString('pt-BR'),
      classe: "Fundo Multimercado",
      cnpj: "14.669.103/0101-56",
      gestor: "consectetur",
      liquidez: "D+29",
      nome: "atque corrupti quos dolores et quas molestias excepturi sint sint occaecati cupiditate non provident similique sunt in culpa qui officia deserunt mollitia animi",
      perfil: "moderado",
      rentabilidade: 19.72,
      score: "9.2",
    }
  ];

  getDetalhes(id, data){
    this.dataService.setData(id, data);
    this.router.navigateByUrl(`/detalhes/${id}`);
  }
}
