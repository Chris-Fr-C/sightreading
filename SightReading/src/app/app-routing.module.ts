import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CoreComponent } from './core/core.component';


const routes: Routes = [
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'core',
    component : CoreComponent
  },
  {
    path: '',
    redirectTo: '/menu',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
