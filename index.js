import express from 'express';
import  * as path from 'path';

const app = express();
const PORT = 3030;
const __dirname = path.resolve();

app.get('/', (req, res) => {
    res.render('pages/home', {
   
    })
})

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.set("views", path.join(__dirname, 'views'));

app.listen(PORT, () => console.log(`Created server, listening on port ${PORT}`));
