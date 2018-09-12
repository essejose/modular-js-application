import $ from 'jquery';
import '../css/style.scss';
import { add, multiply, evenNums } from './math/operations';

$(document).ready(() => {
  $('.myButton').on('click', () => {
    const message = `5 + 3 = ${
      add(5, 3)
    }, 5 * 3 = ${
      multiply(5, 3)
    }, Even in [1,2,3,4,5] are ${
      evenNums([1, 2, 3, 4, 5])}`;

    $('.result').html(message);
  });
});
