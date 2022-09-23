import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// ui lib import
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// custom components
import { CoffeeComponent } from './components/coffee/coffee.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoffeeListComponent } from './components/coffee-list/coffee-list.component';

// store stuff
import { coffeeListReducer } from './store/coffee-list/coffee-list.reducers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CoffeeListEffects } from './store/coffee-list/coffee-list.effects';
import { CoffeeDetailComponent } from './components/coffee-detail/coffee-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeComponent,
    NavbarComponent,
    CoffeeListComponent,
    CoffeeDetailComponent,
    PageNotFoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ coffeeList: coffeeListReducer }),
    EffectsModule.forRoot([CoffeeListEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
