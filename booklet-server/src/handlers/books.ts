import { Application, Request, Response } from "express";
import { BookModel } from "../models/books";

const bookModel = new BookModel();

const index = async (req: Request, res: Response) => {
  const limit = parseInt(req.query.limit as string) || 24;
  const offset = parseInt(req.query.offset as string) || 0;
  const books = await bookModel.index(limit, offset);
  res.json(books);
};

const show = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  if (id === undefined) {
    res.status(400);
    return res.send("Missing or invalid parameters, this endpoint requires the following parameter: id");
  }
  const book = await bookModel.show(id);
  if (book === undefined) {
    res.status(404);
    return res.json("Book not found");
  }
  res.json(book);
};

const books_routes = (app: Application) => {
  app.get("/books", index);
  app.get("/books/:id", show);
};

export default books_routes;
