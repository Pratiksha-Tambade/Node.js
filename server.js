//HTTP Web server

var http=require('http');

// this is a rule for web programming
// to define first parameter always as request object
//           second parameter always as response object

var person={
          'firstname':'Pratiksha',
          'lastname':'Tambade',
          'email':'pratikshatambade@gmail.com',
          'contactnumber':'1234567890'
};

var people=[
    {'firstname':'Pratiksha','lastname':'Tambade','email':'pratikshatambade@gmail.com','contactnumber':'1234567890'},
    {'firstname':'Shilpa','lastname':'Kulkarni','email':'shilpakulkarni@gmail.com','contactnumber':'1234567890'},
    {'firstname':'Sujata','lastname':'Tambade','email':'sujatatambade@gmail.com','contactnumber':'1234567890'},
];
var data="Transflower Learning Pvt.Ltd.";

// custom (programmer defined function)
var onRequestHandler=function(request, response){

   console.log("Request is received.....");
   response.writeHead(200,{'Content-Type': "text/json"});

   response.write(JSON.stringify(people));
   response.end();
};



var server=http.createServer(onRequestHandler);         //inbuilt function
server.listen(9999);     //0 to 1024 port number        //inbuilt function

console.log("Server is listening on port no.9999");
