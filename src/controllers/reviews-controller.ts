import { Request, Response } from "express";
import httpStatus from "http-status";

import { isIdValid } from "../utils/id-validator";
import { CreateReview } from "../protocols/review";

import * as reviewService from "./../services/review-service";

export async function reviewBook(req: Request, res: Response) {
	const review = req.body as CreateReview;
	review.bookId = Number(review.bookId);
	review.grade = Number(review.grade);

	if (!isIdValid(review.bookId)) return res.sendStatus(httpStatus.BAD_REQUEST);

	await reviewService.reviewBook(review);
	res.sendStatus(httpStatus.OK);
}
