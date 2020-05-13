const { User } = require("../models")
const bcrypt = require("bcrypt")
exports.regist = async function (req, res) {
    console.log(req.body);
    pass = await bcrypt.hash(req.body.password, 10)
    console.log(pass)
    await User.create({username: req.body.nome,email:req.body.email,password:pass,role:2})
    res.redirect('/login')
}
exports.show_registation_page = async function (req, res) {
    res.render("registation")
}
exports.show_login_page = async function (req, res) {
    res.render("login")
}
exports.login = async function (req, res) {
    console.log(req.body);
    pass = await bcrypt.hash(req.body.password, 10)
    console.log(pass)
    await User.create({username: req.body.nome, email: req.body.email,password: pass,role:2})
    res.redirect('/login')
}