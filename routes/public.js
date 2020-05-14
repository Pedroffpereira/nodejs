const express = require("express")

const routes = express.Router()

const BookController = require("../controller/BookController")
const UserControler = require("../controller/UserControler")

routes.get("/", BookController.all)


routes.get("/login", UserControler.show_login_page)

routes.get("/registro", UserControler.show_registation_page)
routes.post("/registro", UserControler.regist)
module.exports = routes