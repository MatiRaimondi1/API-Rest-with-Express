import app from './app';

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor hosteado en http://localhost:${PORT}`);
});