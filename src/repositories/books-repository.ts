import prisma from "../database";
import { CreateBook } from "protocols/book";

export async function getBooks() {
	const result = await prisma.book.findMany({
		include: { review: { select: { grade: true, review: true, id: true } } },
	});
	return result;
}

export async function getBook(id: number) {
	const result = await prisma.book.findUnique({
		include: { review: { select: { grade: true, review: true, id: true } } },
		where: { id: id },
	});
	return result;
}

export async function createBook(book: CreateBook) {
	const result = await prisma.book.create({
		data: {
			title: book.title,
			author: book.author,
			publisher: book.publisher,
			purchaseDate: new Date(book.purchaseDate),
		},
	});
	return result;
}

export async function updateRead(id: number) {
	const result = await prisma.book.update({
		data: {
			read: true,
		},
		where: { id: id },
	});
	return result;
}
