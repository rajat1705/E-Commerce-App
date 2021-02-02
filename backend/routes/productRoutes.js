import express from 'express'
const router = express.Router()
import { admin, protect } from '../middleware/authMiddleware.js'
import { createProduct, deleteProduct, getProducts,getProductsById, updateProduct } from '../controllers/productControllers.js'

router.get('/', getProducts)
router.post('/', protect, admin, createProduct)
router.get('/:id', getProductsById)
router.put('/:id', protect, admin, updateProduct)
router.delete('/:id', protect, admin, deleteProduct)

export default router