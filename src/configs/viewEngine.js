import express from 'express';

/**
 *
 * @param {*} app express app
 */
const configViewEngine = app => {
	app.use(express.static('./src/public'));
	app.set('view engine', 'ejs'); //Định nghĩa dùng công nghệ gì
	app.set('views', './src/view'); // Định nghĩa nơi lưu trữ tệp
};

export default configViewEngine;
