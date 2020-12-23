const Acheteur = require('../models/acheteur');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const acheteur = require('../models/acheteur');


exports.agent_list = (req,res, next) =>{
  Acheteur.findAll({})
  .then( acheteur => res.status(200).json(acheteur))
  .catch(err => console.log(err))
}


exports._register = (req, res, next) => {
  bcrypt.hash(req.body.pwd, 10, (err, hash) => {
    if(err) {
      throw err
    }
    let acheteur = req.body;
    acheteur.pwd = hash;
    Acheteur.create(acheteur)
    .then( data => res.status(201).json(data))
    .catch(error => console.log(error))
  })
}

exports.user_login = (req, res, next) => {
  Acheteur.findOne({
    where: {
      email: req.body.email
    }
  })
  .then(acheteur => {
    if(acheteur){
      bcrypt.compare(req.body.pwd, user.pwd, (err, result) =>{
        if(err) res.status(500).json(err)
        else{
          if(result){
            const token = jwt.sign({ email: user.email, name: user.name}, process.env.SECRET_PHRASE, { expiresIn: '24h'})
            res.status(200).json({token: token});
          }
          else{
            res.status(500).json({message: 'You fail'})
          }
        }
      })
    }
    else{
      res.status(404).json({message: 'Bad login / pwd'})
    }
  })
  .catch(err => res.status(500).json(err)) 
}


