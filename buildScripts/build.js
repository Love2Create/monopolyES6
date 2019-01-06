import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod.js'
import chalk from 'chalk';
process.env.NODE_ENV = 'production';
console.log(chalk.blue('Generating pruduction build.'));
webpack(webpackConfig).run((err, stats) => {
  if(err){
    consol.log(chalk.red(err));
    return 1;
  }
});
