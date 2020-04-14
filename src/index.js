import  express  from "express";
import routes from './routes';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
app.set('view engine' , 'ejs');
app.use(bodyParser.json({}));
app.use("/", routes ());
app.use('/static', express.static('src/public'));
app.use((err, req,res, next) => { console.error(err.stack); res.status(500).send('Ooops,server error !'); });
app.use((req, res) => {res.status(404).send("Ooops, you took a wrong turn !") });
app.listen(port, () => console.log(`Example app linstening on port ${port}`));


