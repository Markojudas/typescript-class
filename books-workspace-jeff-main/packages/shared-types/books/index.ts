export type BookResponeItemModel = {
  id: string;
  title: string;
  year: number;
  author: string;
};

export type BooksResponseModel = {
  books: BookResponeItemModel[];
};

export type BookCreateModel = Omit<BookResponeItemModel, "id">;
