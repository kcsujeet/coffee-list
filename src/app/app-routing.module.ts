import { CoffeeDetailComponent } from './components/coffee-detail/coffee-detail.component';
import { CoffeeListComponent } from './components/coffee-list/coffee-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: CoffeeListComponent
  },
  {
    path: 'coffee/:id',
    component: CoffeeDetailComponent
  },
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
