const express = require("express");
const app = express();
const port = 8000;

// Swagger Setting
const swaggerJsDoc = require("swagger-jsdoc");
const options = require("./swagger/config");
const swaggerUi = require("swagger-ui-express");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

// Swagger Setting
app.use(express.json());
const swaggerSpec = swaggerJsDoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, { explorer: true })
);
