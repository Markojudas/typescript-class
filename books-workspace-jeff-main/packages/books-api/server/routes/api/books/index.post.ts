import { BookCreateModel } from "shared-types";
import { z } from "zod";

const BookCreateSchema = z
  .object({
    title: z.string(),
    author: z.string(),
    year: z.number(),
  })
  .strict(); // PLann B: dont allow things OTHER than this, either.
// Plan A: Then Zod again to map it to waht I really want. (check utils.books.ts loadBooks())

export default eventHandler(async (event) => {
  const { addBook } = useBooks();
  const user = event.context.user.sub;

  const body = await readBody(event);

  const bookValid = BookCreateSchema.safeParse(body);

  if (bookValid.success) {
    const book = { ...bookValid.data, owner: user } as BookCreateModel;
    return await addBook(book);
  } else {
    throw createError({
      status: 400,
    });
  }
});
