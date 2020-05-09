const { Books } = require("../models")
exports.all = async function (req, res) {

        var books
        books= await Books.findAll()
    res.render("homepage",{books})
}