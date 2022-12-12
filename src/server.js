import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRouter from './routes/web';
// require('dotenv').config(); // Đang lỗi phiên bản node 18.. dòng ngày
import bodyParser from 'body-parser';


const app = express();
const PORT = process.env.PORT || 8080;

// config view engine
configViewEngine(app);

//	config body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//init web routes
initWebRouter(app);

app.listen(PORT, () => {
	console.log('>>> JWT Backend is running on the port = ' + PORT);
});
