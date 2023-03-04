import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* The HttpClientModule is a simplified API for Angular applications that 
   makes it possible for the client app to communicate with the API or 
   server-side. */
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
