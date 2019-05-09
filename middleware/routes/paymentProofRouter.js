const exress = require ('express');
const router =  express.Router();
const multer = require('multer');
const upload = multer({storage: storage});
const db = require('../../helpers/participantsHelpers');
const path = require('path');


//Set Storage
const storage = multer.diskStorage({
  destination: db.findById,
  filename: function (req, file, cb){
      cb(null, file.fieldname + '=' + Date.now() + path.extname(file.originalname));
  }
});

//Initialize Upload
const upload = multer ({
  storage: storage,
  limits:{fileSize: 8000000}, //8gb
  fileFilter: function(req,file,cb){
      checkFileType(file, cb);
  }
}).single('paymentImage');

function checkFileType(file, cb){
  //Allowed Extentions
  const filetypes = /jpeg|jpg|png|gif/;
  //Check Extention
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  //Check Mime Type
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb (null, true);
  }else{
    cb('Error: Please Upload Image Files Only')
  }
}

router.post('/upload',(req, res) => {
  res.send('-------Test Worked!!--------');
  upload(req, res, (err) =>{
    if(err){
      res.render('index', {
        msg: err
      });
    }else{
      if(req.file == undefined){
        res.render('index', {
          msg: 'Error: No File Selected!!'
        });
      }else{
      res.render('index')
      }
    }
  })
})

module.exports = router;

