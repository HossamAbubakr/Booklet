import axios from "axios";
const api = "http://localhost:3001";

export const getBook = async (book_id: number) => {
  const response = await axios.get(`${api}/books/${book_id}`);
  return response.data;
};

export const getBooks = async (currentPage = 0, limit = 28) => {
  const pagination = currentPage * limit;
  const response = await axios.get(`${api}/books?limit=${limit}&offset=${pagination}`);
  return response.data[0];
};

export const createOrder = async () => {
  const response = await axios.post(`${api}/orders`, {});
  return response.data;
};

export const getOrder = async (order_id: number) => {
  const response = await axios.get(`${api}/orders/${order_id}`, {});
  return response.data;
};

export const addToOrder = async (order_id: number, book_id: number, quantity = 1) => {
  const response = await axios.post(`${api}/orders/${order_id}/books`, { book_id, quantity });
  return response.data;
};
