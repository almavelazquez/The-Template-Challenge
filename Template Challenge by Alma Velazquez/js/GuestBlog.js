$(document).ready(function () {

    //Retrieve the template data from the HTML .
    var template = $('#handlebars-demo').html();
    var template2 = $('#portfolio-template').html();

    $.get('http://localhost:8080/db', function (data) {
        var context = data;
        //Compile the template data into a function
        var templateScript = Handlebars.compile(template);
        var templateScript2 = Handlebars.compile(template2);

        var html = templateScript(context);
        var html2 = templateScript2(context);
        //html = 'My name is Ritesh Kumar . I am a developer.'

        //$(document.body).append(html);
        $(document.body).find('#content').append(html2);

    }); // end get

 

//    // Extract the text from the template
//    var raw_template = $('#portfolio-template').html();
//    // Complile that into an handlebars template
//    var template = Handlebars.compile(raw_template);
//    // Retrieve the placeHolder where the posts will be displayed
//    var placeHolder = $('#content');
//    // Fetch all portfolio items data from the server in JSON
//    $.get('http://localhost:8080/blogs', function (data) {
//        console.log('get status???');
//        $.each(data, function (index, element) {
//            // Generate the HTML for each post
//            var html = template(element);
//            // Render the posts into the page
//            placeHolder.append(html);
//        }); // end each
//    }); // end get
}); // end ready

window.onload = function () {
  
    
}