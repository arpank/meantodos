/**
 * Created by Arpan on 12/27/2016.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {HttpModule} from '@angular/http'
import {TodosComponent}  from  './components/todos.component';

@NgModule({
    imports:      [ BrowserModule, HttpModule ],
    declarations: [ AppComponent,TodosComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
