import  express  from "express";

const router = express.Router();

router.get('/', (req, res ) => { // Req - lo que enviamos : res - lo que express nos responde
    res.render('Inicio', {
        pagina: 'Inicio'
    });

});

router.get('/nosotros', (req, res ) => { // Req - lo que enviamos : res - lo que express nos responde
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
});

router.get('/viajes', (req, res ) => { // Req - lo que enviamos : res - lo que express nos responde
    res.render('viajes', {
        pagina: 'Viajes'
    });
});

router.get('/testimoniales', (req, res ) => { // Req - lo que enviamos : res - lo que express nos responde
    res.render('testimoniales', {
        pagina: 'Testimoniales'
    });
});

export default router;