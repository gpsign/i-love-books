import { Router } from "express";

import { validateSchema } from "../middlewares/schema-middleware";
import { reviewSchema } from "../schemas/review-schema";

import * as controller from "./../controllers/reviews-controller";

const reviewRouter = Router();

reviewRouter.post(
	"/books/reviews",
	validateSchema(reviewSchema),
	controller.reviewBook
);

export default reviewRouter;
