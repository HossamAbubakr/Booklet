import { Request, Response, Application } from "express";
import { OrderModel } from "../models/orders";

const orderModel = new OrderModel();

const index = async (_req: Request, res: Response) => {
  const orders = await orderModel.index();
  res.json(orders);
};

const show = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  if (id === undefined) {
    res.status(400);
    return res.json("Missing or invalid parameters, this endpoint requires the following parameter: id");
  }
  const order = await orderModel.show(id);
  if (order === undefined) {
    res.status(404);
    return res.json("Order not found");
  }
  res.json(order);
};

const create = async (_req: Request, res: Response) => {
  const id = await orderModel.create();
  return res.json(id);
};

const addBook = async (req: Request, res: Response) => {
  const orderId: string = req.params.id;
  const bookId: string = req.body.book_id;
  const quantity: number = req.body.quantity || 1;

  if (orderId === undefined || bookId === undefined) {
    res.status(400);
    return res.send("Missing/Invalid parameters, the following parameter are required: book_id, order_id");
  }

  try {
    const addedBook = await orderModel.addBook(quantity, orderId, bookId);
    res.json(addedBook);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const orders_routes = (app: Application) => {
  app.get("/orders", index);
  app.get("/orders/:id", show);
  app.post("/orders", create);
  app.post("/orders/:id/books", addBook);
};

export default orders_routes;
