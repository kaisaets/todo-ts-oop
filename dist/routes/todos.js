"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post('/');
router.get('/');
router.delete('/:id');
router.patch('/:id');
exports.default = router;
