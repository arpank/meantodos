/**
 * Created by Arpan on 12/27/2016.
 */
import { Component } from '@angular/core';

import { TodoService } from './service/todo.service';

@Component({
    moduleId:module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [TodoService]
})
export class AppComponent { name = 'Angular'; }