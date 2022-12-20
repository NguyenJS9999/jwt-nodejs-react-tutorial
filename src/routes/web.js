import express from 'express';
import homeController from '../controller/homeController';

const router = express.Router();

/**
 *
 * @param {*} app express app
 */

const initWebRouter = app => {
	//path, handler
	router.get('/', homeController.handleHelloWord);
	router.get('/user', homeController.handleUserPage);
	router.post('/users/create-user', homeController.handleCreateNewUser);
	router.post('/delete-user/:id', homeController.handDeleteUser);

	return app.use('/', router);
};

export default initWebRouter;
