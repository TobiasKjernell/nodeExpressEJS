import express from 'express';
import { allAnimals } from '../data/animals.js';

const previewRouter = express.Router();

previewRouter.get('/', (req, res) => {
    res.redirect('../')
})

allAnimals.forEach((animal, index) => {
    previewRouter.get(`/${animal.name.replaceAll(" ", "").toLowerCase()}`, (req, res) => {
        res.render('pages/home', {
            headTitle: "node Zoo",
            title: "Node Zoo",
            animalData: allAnimals,
            indexID: index,
            preview: true
        });
    })
})

export default previewRouter;