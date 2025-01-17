import { Router } from "express"; 
import { createTodo } from "../controllers/todo"; 

const router = Router()

router.post('/', createTodo)
router.get('/')
router.delete('/:id')
router.patch('/:id')

export default router