const expressX = require('express');
const pathX = require('path');
const fsX = require('fs');
const bodyParserX = require('body-parser');

let appX= expressX();

appX.use((req, res, next) => {
    console.log(req.url);
    fsX.appendFileSync('log.txt', `${req.url}\n`);
    next();
})






appX.use(expressX.static(pathX.join(__dirname, '../public')));






appX.listen(3000);