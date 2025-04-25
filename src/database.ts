import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Tarea } from './models/tarea';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'tasks_db',
    synchronize: true,
    logging: false,
    entities: [Tarea],
});