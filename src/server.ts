import express from "express";
import { rotas } from "./routes/router";
import { documentacaoSwagger } from "./configuracoes/swagger";
import swaggerUi from "swagger-ui-express";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/documentacao", swaggerUi.serve, swaggerUi.setup(documentacaoSwagger));
app.get("/health", (request, response) => {
  console.log("verificando status");
  response.status(200).json({ message: "Sucesso" });
});

app.use(rotas);

app.listen(port, () => {
  console.log(`Port aquired : http://localhost:${port}`);
  console.log(`Port aquired : http://localhost:${port}/documentacao`);
});
