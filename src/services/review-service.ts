import { notFoundError } from "../errors/not-found";
import { conflictError } from "../errors/conflict";
import { CreateReview } from "protocols/review";
import * as reviewsRepository from "./../repositories/reviews-repository";
import { getBook } from "../services/book-service";
import { updateRead } from "../repositories/books-repository";

export async function findReview(id: number) {
	const result = await reviewsRepository.getReview(id);

	if (!result) throw notFoundError();

	return result;
}

export async function findBookReview(id: number) {
	const result = await reviewsRepository.getBookReview(id);
	return result;
}

export async function reviewBook(review: CreateReview) {
	await getBook(review.bookId); // check if the book exists

	const reviewSearch = await findBookReview(review.bookId);
	if (reviewSearch != null) throw conflictError();

	await reviewsRepository.reviewBook(review);
	await updateRead(review.bookId);
}
