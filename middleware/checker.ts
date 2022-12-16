import {  Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) =>{
    let valid = req.body.calcul.every(function(element: number) {return typeof element === 'number';})
    if (!valid) {
        res.status(400).send("Mauvaise valeur d'entrée");
        return;
    }
    next();
}