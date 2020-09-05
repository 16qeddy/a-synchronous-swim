/**THIS FILE IS S A COMPONENT
 *
 *
 * require ajax from ./httpHandler.js
 * implement ajax in function below
 *
 * http://127.0.0.1:3000
 *
 */
let pushInfo = function(){
  $.ajax ( {
    type: 'GET',
    data: '',
    url:  'http://127.0.0.1:3000',
    cache: false,
    contentType: false,
    processData: false,
    success: (result) => {
      console.log(result);
      SwimTeam.move(result)
      setTimeout(pushInfo, 2000);
      // JSON.parse(result);
    //   // reload the page
    //   window.location = window.location.href;
  }
})};

$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    SwimTeam.move(direction.toLowerCase());
    pushInfo();
  }
  // pushInfo()
});
// ["ArrowLeft", "Left", index: 0, input: "ArrowLeft", groups: undefined]

console.log('Client is running in the browser!');
