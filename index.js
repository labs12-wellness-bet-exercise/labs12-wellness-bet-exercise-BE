require("dotenv").config();
const {google} = require('googleapis');
const fitness = google.fitness({
  version: 'v1',
  auth: 'http://243497202990-7hvm5nhe2t1pkk7f67kesehrepntbm4b.apps.googleusercontent.com/'
});
const params = {
  userId: 1,
  dataSourceId: 1,
  datasetId: 1
};

const server = require("./api/server.js");

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(
  `\n  =============================================
  >>>>>>> Alive and kicking on port ${port} <<<<<<
  =============================================\n`)
  console.log(`-------------------------------------${params.datasetId}-------------------------------`)

  fitness.users.dataSources.datasets.get( params, (err, res) =>{
    if (err){
        console.log(err, `awwwwwwwww`);
        throw err;
    }else {console.log(`--------------------------------${res.data}-------------------------------`);}
})
});
