const express = require("express");
const morgan = require("morgan");
const layout = require("./views/layout");
const models = require('./models');
const { db } = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');

const app = express();
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }));
//app.use(express.json())

// app.get("/", (req, res) => {
//     console.log('Hello World')
// })

app.use('/wiki', wikiRouter);
app.use('/user', userRouter);

app.get('/', (req, res, next) => {
    res.redirect('/wiki')
})

app.get("/", (req, res, next) => {
    res.send(layout())
})

// wikiRoute.use('/', (req, res, next) => {

// })

// userRoute.use("/", (req, res, next) => {

// })

db.authenticate().
then(() => {
  console.log('connected to the database');
})


const PORT = 3000;

const init = async() => {
    try{
    await models.db.sync()
        app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
      }) }
      catch(err) {
          console.error(err)
      }
}
init();

// models.db.sync({force: true})

module.exports = app
