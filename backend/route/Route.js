import express from "express"
import sequelize from "../database/Sequelize.js"
import { Categories, Suppliers, Products, Stock, Orders } from "../models/Model.js"

const route = express.Router()

const initDb = async() => {
  try {
    await sequelize.authenticate();
    console.log('Koneksi ke MySQL berhasil.');

    await sequelize.sync(); 
    console.log('Semua tabel berhasil dibuat/disinkronkan.');
  } catch (error) {
    console.error('Gagal terkoneksi atau membuat tabel:', error);
  }
}

initDb()

route.get("/categories",async(req,res) => {
  const data = await Categories.findAll()
  res.status(200).json({status:200,data:data,message:"Get data categories is successfully"})
})

route.get("/suppliers",async(req,res) => {
  const data = await Suppliers.findAll()
  res.status(200).json({status:200,data:data,message:"Get data suppliers is successfully"})
})

route.get("/products",async(req,res) => {
  const data = await Products.findAll()
  res.status(200).json({status:200,data:data,message:"Get data products is successfully"})
})

route.get("/stock",async(req,res) => {
  const data = await Stock.findAll()
  res.status(200).json({status:200,data:data,message:"Get data stock is successfully"})
})

route.get("/orders",async(req,res) => {
  const data = await Orders.findAll()
  res.status(200).json({status:200,data:data,message:"Get data orders is successfully"})
})

export default route