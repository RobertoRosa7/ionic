import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  data: any;

  constructor(private route: ActivatedRoute, private router: Router) {
/*     this.route.queryParams.subscribe(params => {
      if(params && params.special){
        this.data = JSON.parse(params.special);
      }
    }) */
  }

  ngOnInit() {
    if(this.route.snapshot.data['special']){
      this.data = this.route.snapshot.data['special'];
    }
  }

}
