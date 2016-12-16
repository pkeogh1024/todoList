var APIKEY = "ddf4617215c851dc1872708540707032";
var Todo = (function () {
    function Todo(task) {
        this.task = task;
    }
    return Todo;
}());
var HttpCall = (function () {
    function HttpCall() {
    }
    HttpCall.prototype.getData = function (url) {
        var promise = new Promise(function (resolve, reject) {
            var request = new XMLHttpRequest();
            request.addEventListener('load', function () {
                resolve(JSON.parse(request.responseText));
            });
            request.open('GET', url);
            request.send();
        });
        return promise;
    };
    return HttpCall;
}());
function addTodo() {
    var input = document.getElementById("userInput");
    var storedInput = input.value;
    if (storedInput === "") {
        storedInput = "";
        alert("Please enter A Todo Item!");
    }
    else {
        var todo1 = new MyApp.Todo(storedInput);
        document.getElementById("results").innerHTML += "<li>" + todo1.task + "</li>";
        clearForm();
    }
}
function clearForm() {
    if (document.getElementById) {
        document.form.reset();
    }
}
function convertToFarenheit(temp) {
    return temp * 9 / 5 - 459.67;
}
var $http = new HttpCall();
$http.getData("http://api.openweathermap.org/data/2.5/weather?API=&APPID=" + APIKEY + "&q=Phoenix")
    .then(function (data) {
    console.log(data.main.temp);
    var result = convertToFarenheit(data.main.temp);
    document.getElementById("temperature").innerHTML = "Current Temp! " + parseInt(result);
});
