const { Book } = require("../database/models");
require("dotenv").config();

class BookController {
  static async createBook(req, res) {
    try {
      const book = await Book.build({
        Author: req.user.username,
        Title: req.body.title,
        Genre: req.body.genre,
        Borrower: req.body.borrower,
        Owner: req.body.owner,
        bookId: req.body.bookId,
      });
      await book.save();
      return res.status(200).json({
        message: "Book created successfully",
        book,
      });
    } catch (error) {
      console.log(error);
      res.status(404).json({ error: error.message });
    }
  }
  static async getAll(req, res) {
    const books = await Book.findAll();
    return res.status(200).json({
      message: "All Books Fetched successfully",
      books,
    });
  }
  static async getSingle(req, res) {
    const books = await Book.findByPk(req.params.id);
    if (!books) {
      return res.status(400).json({
        message: "Book not found",
      });
    }
    return res.status(200).json({
      books,
    });
  }
  static async updateBook(req, res) {
    const books = await Book.upsert({ id: req.params.id, ...req.body });
    return res.status(200).json(books);
  }
  static async deleteBook(req, res) {
    const book = await Book.findByPk(req.params.id);
    if (!book) {
      return res.status(400).json({
        message: "Book not found",
      });
    }
    await Book.destroy({ where: { id: req.params.id } });
    return res.status(200).json({ message: "Deleted Successfully" });
  }
}
module.exports = BookController;
