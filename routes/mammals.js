import express from 'express';
import { mammals } from '../data/animals.js';

const mammalsRouter = express.Router();

mammalsRouter.get('/', (req, res) => {
    res.render('pages/animal-page', {
        headTitle: 'Mammals',
        description: 'Some mammals info',
        title: 'Mammals',
        animalData: mammals,
        indexID: null,
        url: req.url,
    });
})

mammals.forEach((mammal, index) => {
    mammalsRouter.get(`/${mammal.name.replaceAll(" ", "").toLowerCase()}`, (req, res) => {
        res.render('pages/animal-page', {
            url: req.url,
            headTitle: mammal.name,
            title: mammal.name,
            animalData: mammals,
            indexID: index
        });
    })
})

export default mammalsRouter;