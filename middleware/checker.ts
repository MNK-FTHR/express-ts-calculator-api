import {  Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) =>{
    if (req.body.calcul.length === 0) {
        res.status(400).send("Pas de valeurs d'entrée");
    }
    let valid = req.body.calcul.every(function(element: number) {return typeof element === 'number';})
    if (!valid) {
        res.status(400).send("Mauvaise valeur d'entrée");
        return;
    }
    next();
}