// swagger.js
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Flight Booking API",
      version: "1.0.0",
      description: "API documentation for development",
    },
    servers: [
      {
        url: "http://localhost:5010/api", // Adjust if your base path is different
      },
    ],
  },
  apis: ["./routes/*.js", "./controllers/*.js"], // Paths to your API files with Swagger comments
};

const swaggerSpec = swaggerJSDoc(options);

function swaggerDocs(app) {
  if (process.env.NODE_ENV === "development") {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log("Swagger docs available at http://localhost:5010/api-docs");
  }
}

module.exports = swaggerDocs;
