import { NgModule, ViewChild } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { MainComponent } from './main/main.component';

const routes: Routes = [
    { path: '', component: MainComponent },
    { path: '**', component: MainComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: [],
})

export class AppRoutesModule{}