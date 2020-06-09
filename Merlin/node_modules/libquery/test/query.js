const libquery = require("../");

libquery.query("play.symp.fr", 19132).then((data) => {
	console.log("Done!\nServer is in " + data.version);
}).catch((err) => {
	console.log("An error occured!\n" + err.message);
});

// Timeout
libquery.query("hypixel.net", 19132).then((data) => {
	console.log("Done!\nServer is in " + data.version);
}).catch((err) => {
	console.log("An error occured!\n" + err.message);
});