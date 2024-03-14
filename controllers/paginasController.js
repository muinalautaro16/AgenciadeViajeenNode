import  Viaje  from '../models/Viaje.js';

const paginaInicio = (req, res ) => { // Req - lo que enviamos : res - lo que express nos responde
    res.render('Inicio', {
        pagina: 'Inicio'
    });
}

const paginaNosotros = (req, res ) => { // Req - lo que enviamos : res - lo que express nos responde
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req, res ) => { // Req - lo que enviamos : res - lo que express nos responde
    // Consultar DB 
    const viajes = Viaje.findAll();

    console.log(viajes);



    res.render('viajes', {
        pagina: 'Viajes'
    });
}

const paginaTestimoniales = (req, res ) => { // Req - lo que enviamos : res - lo que express nos responde
    res.render('testimoniales', {
        pagina: 'Testimoniales'
    });
}    

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales
}