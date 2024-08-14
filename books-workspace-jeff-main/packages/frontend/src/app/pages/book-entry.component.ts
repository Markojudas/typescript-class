import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BookCreateModel } from 'shared-types';
import { BooksDataService } from '../services/book-data.service';

@Component({
  selector: 'app-book-entry',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="add()">
      <label class="input input-bordered flex items-center gap-2 mb-4">
        Title:
        <input
          type="text"
          class="grow"
          placeholder=""
          formControlName="title"
        />
      </label>
      <label class="input input-bordered flex items-center gap-2 mb-4">
        Author:
        <input
          type="text"
          class="grow"
          placeholder=""
          formControlName="author"
        />
      </label>
      <label class="input input-bordered flex items-center gap-2 mb-4">
        Year Released:
        <input
          type="number"
          class="grow"
          placeholder=""
          formControlName="year"
        />
      </label>
      <button class="btn btn-primary" type="submit">Add</button>
    </form>
  `,
  styles: ``,
})
export class BookEntryComponent {
  #service = inject(BooksDataService);
  // form = new FormGroup({
  //   title: new FormControl<string>('', { nonNullable: true }),
  //   author: new FormControl<string>('', { nonNullable: true }),
  //   year: new FormControl<number | null>(null),
  // });

  // add() {
  //   const thingToAdd = {
  //     title: this.form.controls.title.value,
  //     author: this.form.controls.author.value,
  //     year: this.form.controls.year.value,
  //   } as BookCreateModel;
  //   this.#service.addBooks(thingToAdd).subscribe(() => {
  //     this.form.reset();
  //   });
  // }

  // or, better way safer and reusable way using AngularFormMapper
  form = new FormGroup<AngularFormMapper<BookCreateModel>>({
    title: new FormControl<string>('', { nonNullable: true }),
    author: new FormControl<string>('', { nonNullable: true }),
    year: new FormControl<number>(0, { nonNullable: true }),
  });

  add() {
    this.#service.addBooks(this.form.value as BookCreateModel).subscribe(() => {
      this.form.reset();
    });
  }
}

type AngularFormMapper<T> = {
  [Property in keyof T]: FormControl<T[Property]>;
};
