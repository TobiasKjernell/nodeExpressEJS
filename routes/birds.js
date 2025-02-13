import express from 'express';
import { birds } from '../data/animals.js';

const birdsRouter = express.Router();

birdsRouter.get('/', (req, res) => {
    res.render('pages/animal-page', {
        headTitle: 'Birds',
        description: 'Some birds info',
        title: 'Birds',
        animalData: birds,
        index: null,
        url: req.url
    });
})

birds.forEach((bird, index) => {
    birdsRouter.get(`/${bird.name.replaceAll(" ", "").toLowerCase()}`, (req, res) => {
        res.render('pages/animal-page', {
            headTitle: bird.name,
            title: bird.name,
            animalData: birds,
            indexID: index,
            url: req.url
        });
    })
})

export default birdsRouter;