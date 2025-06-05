import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes.js';

const app = express();
const PORT = 3000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://sk4343:cu2uoK0HEequiey5@tux-mongo.cci.drexel.edu:27017/sk4343_info670_sp25', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  authSource: 'sk4343_info670_sp25'
}).then(() => {
  console.log('Connected to Drexel MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);