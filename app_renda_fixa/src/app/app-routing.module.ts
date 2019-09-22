import { DataResolverService } from './resolver/data-resolver.service';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'detalhes', loadChildren: './detalhes/detalhes.module#DetalhesPageModule' },
  {
    path: 'detalhes/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: './detalhes/detalhes.module#DetalhesPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
