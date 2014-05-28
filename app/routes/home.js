'use strict';

exports.index = (req, res)=>{
  res.render('home/index', {title: 'Pet Factory: Home'});
};

exports.about = (req, res)=>{
  res.render('home/about', {title: 'Pet Factory: About'});
};

exports.contact = (req, res)=>{
  res.render('home/contact', {title: 'Pet Factory: Contact'});
};
