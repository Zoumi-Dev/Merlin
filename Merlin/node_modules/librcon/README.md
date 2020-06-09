# librcon

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/2e105a99c91d486b9971eea79bd005a0)](https://app.codacy.com/manual/Seyz123/librcon?utm_source=github.com&utm_medium=referral&utm_content=Seyz123/librcon&utm_campaign=Badge_Grade_Dashboard)

librcon is an easy to use NodeJS library for send commands via RCON on different game servers

## Installation

```bash
npm i librcon
```

## Usage

```js
// Promises
const librcon = require("librcon");

librcon.send("list", "password", "0.0.0.0", 19132).then((res) => {
	console.log("Got response : " + res);
}).catch((err) => {
	console.log("An error occured!\n " + err.message);
});

// Async
try{
    let res = await librcon.send("list", "password", "0.0.0.0", 19132);
    console.log("Got response : " + res);
}catch(err){
    console.log("An error occured!\n " + err.message);
}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
