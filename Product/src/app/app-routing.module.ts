
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{CreateComponent} from "./product/create/create.component";
const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'create', component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
