//  function sayhello(name) {
//     var greeting="hello";
//     console.log(greeting + name);
// }
(function(window){
    var hellogreet={};
    hellogreet.sayhello=function(name){
    console.log("Hello "+ name);
    }
    window.hellogreet =hellogreet;
})(window);