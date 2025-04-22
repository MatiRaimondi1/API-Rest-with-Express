import request from 'supertest';
import app from '../src/app';

describe('API de tareas', () => {
    it('deberia crear una tarea nueva', async () => {
        const res = await request(app).post('/tareas').send({
            nombre: 'Tarea de prueba',
            descripcion: 'Descripcion de prueba'
        });

        expect(res.statusCode).toBe(201);
        expect(res.body.nombre).toBe('Tarea de prueba');
    });

    it('deberia actualizar una tarea existente', async () => {
        const tarea = await request(app).post('/tareas').send({
            nombre: 'Nombre anterior',
            descripcion: 'Descripcion anterior'
        });

        const res = await request(app).put(`/tareas/${tarea.body.id}`).send({
            nombre: 'Nombre nuevo'
        });

        expect(res.statusCode).toBe(200);
        expect(res.body.nombre).toBe('Nombre nuevo');
    });

    it('deberia eliminar una tarea', async () => {
        const tarea = await request(app).post('/tareas').send({
            nombre: 'Tarea a eliminar',
            descripcion: 'Esta tarea se va a eliminar'
        });

        const res = await request(app).delete(`/tareas/${tarea.body.id}`);
        expect(res.statusCode).toBe(200);
        expect(res.body.mensaje).toBe('Tarea eliminada');
    });
});