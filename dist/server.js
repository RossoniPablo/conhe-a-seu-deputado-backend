import express, { json } from "express";
import deputadosRouter from "./routes/deputados.routes.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    return res.json({ message: "Hello World" });
});
app.use("/api/deputados", deputadosRouter);
app.listen(3333, () => console.log("Servidor node rodando"));
//# sourceMappingURL=server.js.map