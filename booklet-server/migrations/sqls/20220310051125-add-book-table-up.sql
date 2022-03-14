CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR,
    authors VARCHAR,
    average_rating DECIMAL,
    publisher VARCHAR,
    isbn VARCHAR(13),
    publication_date VARCHAR(10)
);