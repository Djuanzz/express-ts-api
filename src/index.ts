import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { userRouter } from "./routes/userRouter";
import { itemRouter } from "./routes/itemRouter";
import passport from "passport";
import "./strategies/discordStrategy";

dotenv.config();

const app: Application = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

app.use(passport.initialize());
// app.use(passport.session());

app.use("/api/user", userRouter);
app.use("/api/item", itemRouter);

app.get("/api/hello", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.get("/api/auth/discord", passport.authenticate("discord"));
app.get(
  "/api/auth/discord/callback",
  passport.authenticate("discord"),
  // passport.authenticate("discord", {
  //   failureRedirect: "http://localhost:5173/login",
  // }),
  (req: Request, res: Response) => {
    res.status(200).json({
      msg: "gacorrr",
    });
  }
);

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
