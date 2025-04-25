import express from 'express';
import tareaRoutes from './routes/tareaRoutes';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/tareas', tareaRoutes);

export default app;