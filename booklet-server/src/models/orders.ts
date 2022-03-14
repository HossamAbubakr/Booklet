import Client from "../database";

export type Order = {
  id: number;
};

export class OrderModel {
  async index(): Promise<Order[]> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM orders";
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Could not get orders, ${error}`);
    }
  }
  async show(id: number): Promise<Order> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM orders WHERE id=($1)";
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Could not get order, ${error}`);
    }
  }

  async create(): Promise<Order> {
    try {
      const conn = await Client.connect();
      const sql = "INSERT INTO orders DEFAULT VALUES RETURNING id";
      const result = await conn.query(sql);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Could not create order, ${error}`);
    }
  }

  async addBook(quantity: number, order_id: string, book_id: string): Promise<Order> {
    try {
      const conn = await Client.connect();
      const sql = "INSERT INTO order_books (quantity, order_id, book_id) VALUES($1, $2, $3) RETURNING *";
      const result = await conn.query(sql, [quantity, order_id, book_id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Could not add book ${book_id} to order ${order_id}: ${error}`);
    }
  }
}
