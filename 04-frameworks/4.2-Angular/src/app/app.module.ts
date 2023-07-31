import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AboutComponent } from './components/about/about.component';
import { CrudComponent } from './components/crud/crud.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PrivateHeaderComponent } from './components/private-header/private-header.component';
import { PrivateMenuComponent } from './components/private-menu/private-menu.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PublicHeaderComponent } from './components/public-header/public-header.component';
import { PublicMenuComponent } from './components/public-menu/public-menu.component';
import { LogoComponent } from './components/logo/logo.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    PublicHeaderComponent,
    PrivateHeaderComponent,
    FooterComponent,
    PrivateMenuComponent,
    PublicMenuComponent,
    HomeComponent,
    GalleryComponent,
    AboutComponent,
    DashboardComponent,
    CrudComponent,
    ProfileComponent,
    LogoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
