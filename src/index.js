import './index.css'
import {TweenLite} from 'gsap';
import axios from 'axios';
var nums = {a: 1, b: 2};
TweenLite.to(nums, .5, {a: 50, onUpdate: function (o,p) {
  console.log(o[p]);
}, onUpdateParams: [nums,'a']});
axios.get('bundle.js').then((response) => {
  console.log(response);
});
