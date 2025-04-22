import express from 'express';
import tareaRoutes from './routes/tareaRoutes';

const app = express();
app.use(express.json());
app.use('/tareas', tareaRoutes);

export default app;