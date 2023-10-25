import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelComponent } from './painel/painel.component';

const routes: Routes = [

{path: '', component: PainelComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
