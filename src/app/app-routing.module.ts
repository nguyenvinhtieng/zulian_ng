import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MainLayout } from './layouts/main/main.layout';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login - Zulian' }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { title: 'Register - Zulian' }
  },
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: HomeComponent, data: { title: 'Welcome to Zulian' } },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: { title: '404 - Page Not Found - Zulian' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
