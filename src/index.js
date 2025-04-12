import app from './app.js';

const main = () => {
    const PORT = app.get('port');
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`)
    });
}

main();