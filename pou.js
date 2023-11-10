const express = require('express')

class Pou {
    higiene
    xp

    constructor(higiene) {
        this.higiene = higiene
        this.xp = xp;
    }

    enxaguar() {
        this.higiene+=25;
        this.higiene>=100? this.xp++: undefined;
    }

    ensaboar() {
        this.higiene+=25;
        this.higiene>=100? this.xp++: undefined;
    }

    secar() {
        this.higiene+=25;
        this.higiene>=100? this.xp++: undefined;
    }

    escovarDentes() {
        this.higiene+=25;
        this.higiene>=100? this.xp++: undefined;
    }
}

const srv = express();

srv.get('/pou/ensaboar/:higiene/:xp', (req, res)=>{
    const umPou = new Pou(
        Number.parseInt(req.params.higiene),
        Number.parseInt(req.params.xp)
        );
    umPou.ensaboar();
    res.json(umPou);
});

srv.get('/pou/enxaguar/:higiene/:xp', (req, res)=>{
    const umPou = new Pou(
        Number.parseInt(req.params.higiene),
        Number.parseInt(req.params.xp)
        );
    umPou.ensaboar();
    res.json(umPou);
});

srv.get('/pou/secar/:higiene/:xp', (req, res)=>{
    const umPou = new Pou(
        Number.parseInt(req.params.higiene),
        Number.parseInt(req.params.xp)
        );
    umPou.ensaboar();
    res.json(umPou);
});

srv.get('/pou/escovarDentes/:higiene/:xp', (req, res)=>{
    const umPou = new Pou(
        Number.parseInt(req.params.higiene),
        Number.parseInt(req.params.xp)
        );
    umPou.ensaboar();
    res.json(umPou);
});



srv.listen(3030, ()=>{
    console.log('Aguardando pous...');
});

const meuPou = new Pou(0);

meuPou.enxaguar();
meuPou.ensaboar();

console.table(meuPou);
