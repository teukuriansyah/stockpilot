import { DataTypes } from "@sequelize/core"
import sequelize from "../database/Sequelize.js"

export const Categories = sequelize.define("categories",{
  name:DataTypes.STRING,
  description:DataTypes.STRING,
  color:DataTypes.STRING,
  status:DataTypes.BOOLEAN
},{
  freezeTableName:true,
  timestamps:true
})

export const Suppliers = sequelize.define("suppliers",{
  companyName:DataTypes.STRING,
  contactPerson:DataTypes.STRING,
  email:DataTypes.STRING,
  phone:DataTypes.STRING,
  address:DataTypes.STRING,
  notes:DataTypes.STRING,
  status:DataTypes.BOOLEAN
},{
  freezeTableName:true,
  timestamps:true
})

export const Products = sequelize.define("products",{
  sku:DataTypes.STRING,
  name:DataTypes.STRING,
  description:DataTypes.STRING,
  categoryId:DataTypes.STRING,
  supplierId:DataTypes.STRING,
  costPrice:DataTypes.INTEGER,
  sellingPrice:DataTypes.INTEGER,
  currentStock:DataTypes.INTEGER,
  minThreshold:DataTypes.INTEGER,
  uom:DataTypes.STRING,
  status:DataTypes.BOOLEAN
},{
  freezeTableName:true,
  timestamps:true
})

export const Stock = sequelize.define("stock",{
  name:DataTypes.STRING,
  type:DataTypes.STRING,
  quantity:DataTypes.INTEGER,
  stockBefore:DataTypes.INTEGER,
  stockAfter:DataTypes.INTEGER,
  transactionDate:DataTypes.STRING,
  notes:DataTypes.STRING,
  referenceNo:DataTypes.STRING
},{
  freezeTableName:true,
  timestamps:true
})

export const Orders = sequelize.define("orders",{
  orderNumber:DataTypes.STRING,
  supplierId:DataTypes.STRING,
  orderDate:DataTypes.STRING,
  expectedDeliveryDate:DataTypes.STRING,
  items:DataTypes.STRING,
  discount:DataTypes.INTEGER,
  notes:DataTypes.STRING,
  totalAmount:DataTypes.INTEGER,
  status:DataTypes.STRING
},{
  freezeTableName:true,
  timetamps:true
})