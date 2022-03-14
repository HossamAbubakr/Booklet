import Client from "../database";

export type Book = {
  id: number;
  title: string;
  authors: string;
  average_rating: number;
  publisher: string;
  isbn: string;
  publication_date: string;
};

export class BookModel {
  async index(limit: number, offset: number): Promise<Book[]> {
    try {
      const conn = await Client.connect();
      const sql = `SELECT (SELECT COUNT(*) FROM books) as count,
      (SELECT json_agg(b.*) FROM ( SELECT * FROM books LIMIT ($1) OFFSET ($2))
      AS b) AS books`;
      const result = await conn.query(sql, [limit, offset]);
      conn.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Could not get books, ${error}`);
    }
  }
  async show(id: number): Promise<Book> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM books WHERE id=($1)";
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Could not get book, ${error}`);
    }
  }
}
