import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CoreComponent } from './core/core.component';
import { InstrumentSelectedGuard } from './shared/instrument-selected.guard';


const routes: Routes = [
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'core',
    component : CoreComponent,
    canActivate:[InstrumentSelectedGuard],
    pathMatch:'full'
  },
  {
    path: '',
    redirectTo: '/menu',
    pathMatch:'full'
  },

  {
    // For unmatched paths
    path: '**',
    redirectTo: '/menu',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
