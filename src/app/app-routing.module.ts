import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'portal', loadChildren: './portal/portal.module#PortalModule'},
    { path: '', redirectTo: 'portal', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
