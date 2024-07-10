import express from 'express';

const app = express();

//set static folder
app.use(express.static('public'));

//parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

//parse JSON bodies (as sent by API clients)
app.use(express.json());


// Handle POST requests
app.post('/convert', (req, res) => {
    setTimeout(() => {
        const fahrenheit = parseFloat(req.body.fahrenheit);
        const celcius = (fahrenheit - 32) * (5 / 9);

        res.send(
            `<p>${fahrenheit} degrees Fahrenheit is equal to ${celcius.toFixed(1)} degrees celcius</p>`
        )
    }, 2000)
})


//start the server
app.listen(3000, () => {
    console.log('server listening on port 3000')
});

