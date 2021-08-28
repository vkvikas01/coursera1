//  function saybye(name) {
//     var greeting="godbye";
//     console.log(greetingb + name);
// }
(function(window){
    var byegreet={};
    byegreet.saybye=function(name){
    console.log("GoodBye " + name);
    }
    window.byegreet =byegreet;
})(window);