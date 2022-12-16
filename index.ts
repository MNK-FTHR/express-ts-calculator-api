import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import checker from './middleware/checker';

const app: Express = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(checker);

app.get('/', (req: Request, res: Response)=>{
    res.send('/addition | /soustration');
});
app.post('/addition', (req: Request, res: Response)=>{
    let calcul = req.body.calcul;
    let operation = calcul.reduce((accumulator: number, currentValue: number) => accumulator+' + ' + currentValue);
    let resultat = calcul.reduce((accumulator: number, currentValue: number) => accumulator + currentValue);
    res.send(`${operation} = ${resultat} ${req.body.calcul.length === 1 && "(met au moins un autre chiffre, c'est mieux...)"}`);
});

app.post('/soustraction', (req: Request, res: Response)=>{
    let calcul = req.body.calcul;
    let operation = calcul.reduce((accumulator: number, currentValue: number) => accumulator+' - ' + currentValue);
    let resultat = calcul.reduce((accumulator: number, currentValue: number) => accumulator - currentValue);
    res.send(`${operation} = ${resultat} ${req.body.calcul.length === 1 && "(met au moins un autre chiffre, c'est mieux...)"}`)
});

app.listen(3000, ()=>{
    console.log(`http://localhost:3000`);
})