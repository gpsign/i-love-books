import { notFoundError } from "../errors/not-found";
import { CreateBook } from "../protocols/book";

import * as booksRepository from "./../repositories/books-repository";

export async function getBooks() {
	return await booksRepository.getBooks();
}

export async function getBook(id: number) {
	const book = await booksRepository.getBook(id);
	if (!book) {
		throw notFoundError();
	}

	return book;
}

export async function createBook(book: CreateBook) {
	return await booksRepository.createBook(book);
}
