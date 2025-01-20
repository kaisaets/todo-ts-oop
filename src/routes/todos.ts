import { Router } from "express"; 
import { createTodo, getTodos } from "../controllers/todos"; 

const router = Router()

router.post('/', createTodo)
router.get('/', getTodos)
router.delete('/:id')
router.patch('/:id')

export default router