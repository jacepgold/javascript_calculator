$num1 = null
$num2 = null
$ans = null
$operator = null

$calculator = $("#calculator")
$add = $('#plus')
$subtract = $('#subtract')
$multiply = $('#multiply')
$divide = $('#divide')
$results = $("#result")
$clear = $('#clear')
$message = $('#message').hide()

$numbers = $('.col')

$calculator.hide()

var myFunction = function () {
  var attribute = this.getAttribute("data-value");
  if (attribute == 'clear') { clear() }
  console.log("Clicked on '" + attribute + "'");
  $results.text(attribute)
  // if ($num1 == null) {
  //   $num1 === attribute
  //   $result.text($num1)
  // }
  // else if ($operator == null) {
  //   // check to make sure an operator was clicked 
  //   $result += attribute
  // }
  // else {
  //   $num2 === attribute
  //   $result += attribute
  // }
};



function calculator() {
  $calculator.slideDown(500)
  
}

function clearedMessage() {
  $message.text('Cleared!')
  $message.slideDown(300).delay(1500).fadeIn(400).slideUp(300);
}

function clear() {
  $calculator.slideUp(150).slideDown(900)
  clearedMessage()
  $num1 = null
  $num2 = null
  $ans = null
  $results.text('')
}

$(document).ready(function() {
  // $num1 = $numbers.on('click', function() {
    //   console.log('Clicked on num ' +
    // })
  Array.from($numbers).forEach(function (element) {
    element.addEventListener('click', myFunction);
  });
  calculator()
})