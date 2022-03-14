import express, { Application, Request, Response } from "express";
import cors from "cors";
import books_routes from "./handlers/books";
import orders_routes from "./handlers/orders";

const app: Application = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(cors());

books_routes(app);

orders_routes(app);

app.get("/", function (_req: Request, res: Response) {
  res.send("Welcome to Booklet, the book store API!");
});

app.listen(port, function () {
  console.log(`Starting server on port: ${port}`);
});
