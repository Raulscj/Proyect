
const producto = require('../models/producto')
const registro = require("../models/registro")


async function eliminar(req, res) {
	try {
		await producto.findByIdAndDelete(req.params.id);
        console.log('Data Erased');
	} catch (error) {
		console.log(error);
		return false;
	}
	console.log('Data Erased');
	return true;
}


async function eliminar_registro(req,res) {
    try {
        await registro.findByIdAndDelete(req.params.id)
    } catch (error) {
        console.log(error)
        return false
    }
    console.log('Data Erased')
    return true
}

async function DropCar (database) {
    database.deleteMany({} , function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log("success")
        }
    })
}

module.exports = { eliminar, eliminar_registro, DropCar }

