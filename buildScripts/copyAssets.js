import ncp from 'ncp';
ncp('src/assets','dist/assets',function(err){
  console.log('copy assets')
  if(err){return console.log(err);}
  console.log('assets copeid');
});
