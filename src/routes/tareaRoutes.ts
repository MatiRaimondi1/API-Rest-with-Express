import express, { Request, Response } from 'express';
import { TareaHandler } from '../handlers/tareaHandler';

const router = express.Router();
const handler = new TareaHandler();

router.get('/', (_req: Request, res: Response) => {
    const tareas = handler.getAll();
    res.status(200).json(tareas);
});

router.post('/', (req: Request, res: Response) => {
    const { nombre, descripcion } = req.body;
    
    if (typeof nombre !== 'string' || typeof descripcion !== 'string') {
        res.status(400).json({ mensaje: 'Datos faltantes o invalidos' });
        return;
    }

    const tarea = handler.create(nombre, descripcion);
    res.status(201).json(tarea);
});

router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        res.status(400).json({ mensaje: 'ID invalido' });
        return;
    }

    const { nombre, descripcion} = req.body;
    const updated = handler.update(id, nombre, descripcion);

    if (!updated) {
        res.status(404).json({ mensaje: 'Tarea no encontrada' });
        return;
    }

    res.status(200).json(updated);
});

router.delete('/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        res.status(400).json({ mensaje: 'ID invalido' });
        return;
    }

    const deleted = handler.delete(id);
    if (!deleted) {
        res.status(404).json({ mensaje: 'Tarea no encontrada' });
        return;
    }

    res.status(200).json({ mensaje: 'Tarea eliminada' });
});

export default router;