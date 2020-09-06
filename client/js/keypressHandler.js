/**THIS FILE IS S A COMPONENT
 *
 *
 * require ajax from ./httpHandler.js
 * implement ajax in function below
 *
 * http://127.0.0.1:3000
 *
 */




// function runForever(){
//   $.ajax({
//     type: 'GET',
//     data: 'http://127.0.0.1:3000',
//     url:  './water-lg.jpg',
//     success: (response) => {
//       console.log(response)
//       // $('.pool').css(background-image, response);
//     }
//   })
//   console.log('test');
// }();

(function() {

  const serverUrl = 'http://127.0.0.1:3000';

  //
  // TODO: build the swim command fetcher here
  //

  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////
/**
 * export ajaxFileUpload
 * google/slides this
 * exports.ajaxFileUpload
 * to ./keypressHandler
 */
  const ajaxFileUplaod = (file) => {
    var formData = new FormData(); // Consider making our own FormData class
    formData.append('file', file);
    $.ajax({
      type: 'POST',
      data: formData,
      url:  serverUrl,
      cache: false,
      contentType: false,
      processData: false,
      success: () => {
        // reload the page
        window.location = window.location.href;
      }
    });

  };

  const ajaxFileGrab = (file) => {
    // var formData = new FormData(); // Consider making our own FormData class
    // formData.append('file', file);
    $.ajax({
      type: 'GET',
      data: formData,
      url:  serverUrl,
      cache: false,
      contentType: false,
      processData: false,
      success: () => {
        // reload the page
        window.location = window.location.href;
      }
    });
  };




  $('form').on('submit', function(e) {
    e.preventDefault();

    var form = $('form .file')[0];
    if (form.files.length === 0) {
      console.log('No file selected!');
      return;
    }

    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }

    ajaxFileUplaod(file);
  });

})();



// let respon = false;
// function runForever(){
//   $.ajax({
//     type: 'GET',
//     url: 'http://127.0.0.1:3000',
//     success: (response) => {
//       // console.log(response)
//       if( response !== 'no direction!' ){
//         SwimTeam.move(response.toLowerCase())
//         respon = true;
//       } else {
//         respon = false;
//       }
//       // $('.pool').css(background-image, response);
//     },
//     complete: ()=>{
//       if ( respon === true ) {
//         setInterval(runForever, 3000);
//       } else {
//         setInterval(runForever, 10000);
//       }
//     }

//   })
// }

// runForever()


let pushInfo = function(){
  $.ajax({
    type: 'POST',
    data: JSON.stringify(['throw','cats','over','moons']),
    url:  'http://127.0.0.1:3000',
    cache: false,
    contentType: false,
    processData: false,
    success: () => {
      // reload the page
      console.log('data was sent');
    }
  });
}

let getInfo = function(movement){
  $.ajax ( {
    type: 'GET',
    data: movement,
    url:  'http://127.0.0.1:3000',
    cache: false,
    contentType: 'string',
    processData: 'string',
    success: (result) => {
      SwimTeam.move(result.toLowerCase())
      // setTimeout(pushInfo, 2000);
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
    getInfo(direction);
  }
  // pushInfo()
});
// ["ArrowLeft", "Left", index: 0, input: "ArrowLeft", groups: undefined]

console.log('Client is running in the browser!');
