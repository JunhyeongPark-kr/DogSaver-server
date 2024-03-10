const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Dogsaver API",
      version: "1.0.0",
      description: "Dogsaver API Information",
    },
    servers: [
      {
        url: "http://localhost:8000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

module.exports = options;
