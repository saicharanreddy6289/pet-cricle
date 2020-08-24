import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { CarouselModule } from 'ngx-bootstrap';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapComponent } from './map/map.component';
import { YourPetsComponent } from './your-pets/your-pets.component';
import { MatchComponent } from './match/match.component';
import { SearchComponent } from './search/search.component';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderModule } from 'primeng/slider';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { PetsListComponent } from './pets-list/pets-list.component';
import { PostComponent } from './post/post.component';
import { MissingPetsComponent } from './missing-pets/missing-pets.component';
import { RegistrationComponent } from './registration/registration.component';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule, MatToolbarModule, MatIconModule, MatMenuModule, MatSidenavModule, MatListModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MessagesComponent } from './messages/messages.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { MissingService} from  './missing-pets/missing.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule} from '@angular/common/http';
import { SpinnerComponent } from './spinner/spinner.component';
import { MatchPetComponent } from './match-pet/match-pet.component';
import { PostpetComponent } from './postpet/postpet.component';
import { PetdetailslistComponent } from './petdetailslist/petdetailslist.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MapComponent,
    YourPetsComponent,
    MatchComponent,
    SearchComponent,
    PetsListComponent,
    PostComponent,
    MissingPetsComponent,
    RegistrationComponent,
    MessagesComponent,
    PetDetailsComponent,
    SpinnerComponent,
    MatchPetComponent,
    PostpetComponent,
    PetdetailslistComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    CarouselModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAZ06qLxgTi-fyT3R0dB8T6E-P_nQBGIno'
    }),
    SliderModule,
    AutoCompleteModule
  ],
  providers: [MissingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
