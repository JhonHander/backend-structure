import listaCarros from "../database/database.cars.js";

// Devuelve todos los carros
export const getAllCars = (req, res) => {
    res.json(listaCarros);
}

// Ejemplo de cómo recorrer la lista
export const getCarStats = (req, res) => {
    let totalCarros = 0;
    let carroPorMarca = {};
    let carrosMasNuevos = [];
    
    // Recorremos la lista de carros
    listaCarros.forEach(carro => {
        totalCarros++;
        
        // Contamos carros por marca
        if (carroPorMarca[carro.marca]) {
            carroPorMarca[carro.marca]++;
        } else {
            carroPorMarca[carro.marca] = 1;
        }
        
        // Filtramos carros de 2018 en adelante
        if (carro.ano >= 2018) {
            carrosMasNuevos.push(carro);
        }
    });
    
    res.json({
        total: totalCarros,
        porMarca: carroPorMarca,
        carrosNuevos: carrosMasNuevos
    });
}

// Buscar un carro por ID
export const getCarById = (req, res) => {
    const id = parseInt(req.params.id);
    const carro = listaCarros.find(car => car.id === id);
    
    if (carro) {
        res.json(carro);
    } else {
        res.status(404).json({ mensaje: "Carro no encontrado" });
    }
}