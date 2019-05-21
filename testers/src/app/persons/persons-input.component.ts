import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-persons-input',
    templateUrl: './persons-input.component.html'
})

export class PersonsInputComponent {
    @Output() personCreate = new EventEmitter<string>();
    enteredPersonName = '';

    onCreatePerson() {
        this.personCreate.emit(this.enteredPersonName);
        this.enteredPersonName = '';
    }
}
