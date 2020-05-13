const express = require("express")

const routes = express.Router()

const BookController = require("../controller/BookController")
const UserControler = require("../controller/UserControler")

routes.get("/", BookController.all)


routes.get("/login", UserControler.show_login_page)

routes.get("/regist", UserControler.show_registation_page)
routes.post("/regist", UserControler.regist)
module.exports = routes