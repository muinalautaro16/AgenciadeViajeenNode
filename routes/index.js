import  express  from "express";

const router = express.Router();

router.get('/', (req, res ) => { // Req - lo que enviamos : res - lo que express nos responde
    res.send('Inicio');
});
router.get('/nosotros', (req, res ) => { // Req - lo que enviamos : res - lo que express nos responde

    const viajes = 'Viaje a Argentina';

    res.render('nosotros', {
        viajes,
    });
});
router.get('/contacto', (req, res ) => { // Req - lo que enviamos : res - lo que express nos responde
    res.send('Contacto');
});

export default router;