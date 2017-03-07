/*
----------------------------------------------------------------------------
* SOURCES
----------------------------------------------------------------------------
- https://www.w3schools.com/jquery/jquery_ref_ajax.asp
- https://www.sitepoint.com/ajaxjquery-getjson-simple-example/

----------------------------------------------------------------------------
* NOTES
----------------------------------------------------------------------------

  - Load JSON encoded data from the server using jQuery and the GET HTTP request
  - Data that is sent to the server is appended to the URL as a query string
  - If the value of the data parameter is a plain object, it is converted to a string and url-encoded before it is appended to the URL
  - JSON stands for JavaScript Object Notation
  - In simple terms JSON is a way of formatting data

  - Syntax:
    - $.getJSON(url, data, success);
    - $.ajax({
        dataType: "json",
        url : url,
        data : data,
        success : success
      });

----------------------------------------------------------------------------
* PARAMETERS
----------------------------------------------------------------------------

  - The getJSON method requires the URL parameter and offers 2 optional parameters: data and success

  - url: a string containing the URL to which the request is sent
  - data: is either an object or a string that is sent to the server with the request
  - success:  a callback function executed only if the request succeeds
    - syntax:
      - function success(data, textStatus,jqXHR){
          // do something with data, which is an object
        }


----------------------------------------------------------------------------
* METHODS
----------------------------------------------------------------------------

  - $.getJSON():
    - handy helper for working with JSON directly if you don’t require much extra configuration.
    - By default $.getJSON is non-blocking, i.e., async, and callbacks will be executed at some (unknown) later point in time

  - $.ajax():
    - AJAX is the art of exchanging data with a server, and update parts of a web page - without reloading the whole page.
    - The $.ajax method is the real deal for any (not only JSON related) web request.
    - This method allows us to explicitly set all the options we care about
    - We can adjust async to true if we want this to call to run concurrently, i.e., the run potentially at the same time as other code.
    - Setting it to false will prevent other code from running while the download is in progress.

----------------------------------------------------------------------------
* DEBUGGING
----------------------------------------------------------------------------
- Common $.getJSON Errors
  - Silent failures on $.getJSON calls: This might happen if, e.g., jsoncallback=json1234 has been used, while the function json1234() does not exist. In such cases the $.getJSON will silently error. We should therefore always use jsoncallback=? to let jQuery automatically handle the initial callback.

  - In the best case real JSON (instead of JSONP) is used (either by talking with our own server or via CORS). This eliminates a set of errors potentially introduced by using JSONP. The crucial question is: Does the server / API support JSONP? Are there any restrictions on using JSONP?

  - Uncaught syntax error: Unexpected token (in Chrome) or invalid label (in Firefox). The latter can be fixed by passing the JSON data to the JavaScript callback. In general, however, this is a strong indicator that the JSON is malformed. Consider using JSONLint as advised above.

- How to fix JSON Errors
  - We have to make sure that the JSON returned by the server is in the correct format with the correct MIME-type being used.
  - We can try to use $.get instead of $.getJSON as it might be that our server returns invalid JSON. Also if JSON.parse() fails on the returned text we immediately know that the JSON is to blame.
  - We can check the data that is being returned by logging it to the console. This should then be the input for further investigations.
*/


$(document).ready(function(){

  if(window.$){
    console.log("jquery loaded");
  }

// -------------------------------------------------------------------- GET JSON

  // requesting the json file for use
  // Loads JSON-encoded data from a server using a HTTP GET request
  $("#get-data").click(function(){
    var showData = $('#show-data');

    $.getJSON("js/data.json", function(data){
      console.log(data);
    });

    showData.text("JSON Data Loading");

  });





// ------------------------------------------------------------------------ AJAX

  // the ajax object
  // requesting the json file for use
  $.ajax({
    type : "GET", // the request to the server
    url : "js/data-2.json", // the path to the json file
    //data : data,
    async : true,
    dataType : "json", // the type of data being retireved
    success : function(data){ // the function that does something with the data
      // do stuff with json data
      console.log(data);
    }
  });






// -------------------------------------------------------------------- GET JSON

  // LOAD json data that is generated dynamically
  // JSON generation is dependent on some parameter(s), which have to be supplied beforehand.
  var url = "js/data-3.json";

  $.getJSON(url, function(data, status){

    console.log(data);

    // test to see if the status of the request was fulfilled
    if(status === 200){
      // do stuff with data
    }else{
      // do this stuff with data
    };

  });









});
