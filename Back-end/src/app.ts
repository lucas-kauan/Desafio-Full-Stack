import "express-async-errors"
import "reflect-metadata"
import express from "express";
import userRoutes from "./router/user.router"
import handleError from "./errors/handleError";
import loginRoutes from "./router/login.router";
import contactRoutes from "./router/contact.router";

const app = express()
app.use(express.json())

app.use("/users", userRoutes)
app.use("/login", loginRoutes)
app.use("/contact", contactRoutes)

app.use(handleError)

export default app;