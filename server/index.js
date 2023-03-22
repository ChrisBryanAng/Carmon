import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', async (req, res) => {
	res.send('Carmon Server!');
});

const startServer = async () => {
	// add connection to mongodb later on
	try {
		app.listen(8080, () =>
			console.log('Server has started on port http://localhost:8080')
		);
	} catch (error) {
		console.log(error);
	}
};

startServer();
