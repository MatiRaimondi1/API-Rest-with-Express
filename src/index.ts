import app from './app';
import { AppDataSource } from './database';

AppDataSource.initialize().then(() => {
    app.listen(3000, () => {
        console.log(`Servidor hosteado en http://localhost:3000`);
    });
}).catch(error => console.error("Error al conectarse a la base de datos", error));