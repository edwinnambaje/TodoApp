const express = require("express");
const router = express();
const BookController = require("../controllers/books");
router.post("/create", BookController.createBook);
router.get("/all", BookController.getAll);
router.get("/:id", BookController.getSingle);
router.put("/update/:id", BookController.updateBook);
router.delete("/delete/:id", BookController.deleteBook);
module.exports = router;
