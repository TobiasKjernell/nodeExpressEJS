import express from 'express';
import  * as path from 'path';
import birdsRouter from './routes/birds.js';
import mammalsRouter from './routes/mammals.js';
import reptileRouter from './routes/reptiles.js';
import { allAnimals } from './data/animals.js';
import previewRouter from './routes/preview.js';

const app = express();
const PORT = 3030;
const __dirname = path.resolve();

app.get('/', (req, res) => {
    res.render('pages/home', {
        headTitle: "Node Zoo",
        preview: true,
        description: "Welcome to my Zoo",
        animalData: allAnimals
    })
})

app.use('/bird', birdsRouter);
app.use('/mammals', mammalsRouter);
app.use('/reptile', reptileRouter);
app.use('/preview', previewRouter);
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.set("views", path.join(__dirname, 'views'));

app.listen(PORT, () => console.log(`Created server, listening on port ${PORT}`));
