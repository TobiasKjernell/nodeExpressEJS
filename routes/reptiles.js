import express from 'express';
import { reptiles } from '../data/animals.js';

const reptileRouter = express.Router();

reptileRouter.get('/', (req, res) => {
    res.render('pages/animal-page', {
        headTitle: 'Reptiles',
        description: 'Some reptile info',
        title: 'Reptiles',
        animalData: reptiles,
    });
})

reptiles.forEach((reptile, index) => {
    reptileRouter.get(`/${reptile.name.replaceAll(" ", "").toLowerCase()}`, (req, res) => {
        res.render('pages/animal-page', {
            headTitle: reptile.name,
            title: reptile.name,
            animalData: reptiles,
            indexID: index,
            url: req.url
        });
    })
})

export default reptileRouter;