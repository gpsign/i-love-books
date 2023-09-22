import prisma from "../database/index";
import { CreateReview } from "protocols/review";

export async function getReview(id: number) {
	const result = await prisma.review.findUnique({ where: { id: id } });
	return result;
}

export async function getBookReview(id: number) {
	const result = await prisma.review.findUnique({ where: { bookId: id } });
	return result;
}

export async function reviewBook(bookReview: CreateReview) {
	const result = await prisma.review.create({ data: bookReview });
	return result;
}
