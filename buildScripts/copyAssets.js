import ncp from 'ncp';
ncp('src/assets','dist/assets',function(err){
  if(err){return console.log(err);}
  console.log('assets copeid');
});
