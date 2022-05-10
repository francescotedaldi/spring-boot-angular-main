import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// import {AuthGuard} from './core/guards/auth.guard';
import {MODULE} from './core/utils/any';

const APP_ROUTER: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/home.module').then((m: MODULE) => m.HomeModule),
  },
  {
    path: 'signup',
    loadChildren: () => import('./features/signup/signup.module').then((m: MODULE) => m.SignupModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTER)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
