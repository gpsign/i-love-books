import express, { json, Request, Response } from "express";
import "express-async-errors";
import httpStatus from "http-status";

import bookRouter from "./routers/books-router";
import errorHandler from "./middlewares/error-middleware";
import reviewRouter from "./routers/reviews-router";

const app = express();

app.use(json());

app.get("/health", (req: Request, res: Response) => res.send(httpStatus.OK));
app.use(bookRouter);
app.use(reviewRouter);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is up and running on port ${port}`));
