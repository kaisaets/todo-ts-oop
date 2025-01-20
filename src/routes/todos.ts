import { Router } from "express"; 
import { createTodo, getTodos, updateTodo } from "../controllers/todos"; 

const router = Router()

router.post('/', createTodo)
router.get('/', getTodos)
router.delete('/:id', updateTodo)
router.patch('/:id')

export default router