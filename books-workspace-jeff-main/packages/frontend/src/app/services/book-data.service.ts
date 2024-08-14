import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { BookCreateModel, BooksResponseModel } from 'shared-types';

@Injectable({ providedIn: 'root' })
export class BooksDataService {
  #client = inject(HttpClient);

  getBooks() {
    return this.#client
      .get<BooksResponseModel>('/api/books')
      .pipe(map((r) => r.books));
  }

  addBooks(book: BookCreateModel) {
    return this.#client.post('/api/books', book);
  }
}
