import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { userRouter } from "./routes/userRouter";
import { itemRouter } from "./routes/itemRouter";

dotenv.config();

const app: Application = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/item", itemRouter);

app.get("/api/hello", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
