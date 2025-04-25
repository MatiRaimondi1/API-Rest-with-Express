import request from 'supertest';
import app from '../src/app';
import { AppDataSource } from '../src/database';

beforeAll(async () => {
  await AppDataSource.initialize();
});

afterAll(async () => {
  await AppDataSource.destroy();
});

describe('API de tareas', () => {
  let idCreado: number;

  it('crea una tarea', async () => {
    const res = await request(app)
      .post('/tareas')
      .send({ nombre: 'Prueba', descripcion: 'Descripción de prueba' })
      .expect(201);

    expect(res.body).toHaveProperty('id');
    idCreado = res.body.id;
  });

  it('obtiene las tareas', async () => {
    const res = await request(app)
      .get('/tareas')
      .expect(200);

    expect(Array.isArray(res.body)).toBe(true);
  });

  it('actualiza una tarea', async () => {
    await request(app)
      .put(`/tareas/${idCreado}`)
      .send({ nombre: 'Modificado', descripcion: 'Modificada' })
      .expect(200);
  });

  it('elimina una tarea', async () => {
    await request(app)
      .delete(`/tareas/${idCreado}`)
      .expect(200);
  });
});
