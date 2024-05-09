const allowedCore = [
    'https://practicum.yandex.ru',
    'https://students-projects.ru',
    'localhost:3000',
]


function cors(req, res, next) {
    const { origin } = req.headers;

    if (allowedCore.includes(origin)) {
        res.header("Access-Control-Allow-Origin", origin);
    }

    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();
}

module.exports = cors






