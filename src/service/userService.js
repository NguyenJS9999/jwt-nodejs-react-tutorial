import bcrypt from 'bcryptjs';
import mysql from 'mysql2';

const salt = bcrypt.genSaltSync(10);

// create the connection to database
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'jwt'
});

const hastUserPassword = userPassword => {
	let hashPassword = bcrypt.hashSync(userPassword, salt);
	return hashPassword;
};

const createNewUser = (email, password, username) => {
	let hashPass = hastUserPassword(password);
	connection.query(
		'INSERT INTO users (email, password, username) VALUES (?, ?, ?);',
		[email, hashPass, username],
		function (err, results, fields) {
			if (err) {
				console.log(err);
			}
		}
	);
};

const getUserList = () => {
	let users = [];
	connection.query('Select * from users', function (err, results, fields) {
		if (err) {
			console.log(err);
		}
		console.log('check list users :', results);
	});
};

module.exports = {
	createNewUser,
	getUserList
};
