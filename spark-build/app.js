const express = require('express');
require('dotenv').config({ path: './.env' });
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./docs'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add CNAME to docs folder if not there already
const files = fs.readdirSync('./docs');
if (!files.includes('CNAME')) {
    fs.writeFile('./docs/CNAME', 'www.cjherold.com', (err) => {
		if (err) throw err;
	});
}

app.listen(PORT, () => console.log(`Started listening on port ${PORT}`));

module.exports = app;
