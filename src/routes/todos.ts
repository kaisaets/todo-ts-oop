import { Router } from "express"; 
import { createTodo, deleteTodo, getTodos, updateTodo } from "../controllers/todos"; 

const router = Router()

router.post('/', createTodo)
router.get('/', getTodos)
router.delete('/:id', updateTodo)
router.patch('/:id', deleteTodo)

export default router