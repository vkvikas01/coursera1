var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (let index = 0; index < names.length; index++) {
    var char=names[index].charAt(0);
    char.toLowerCase()
    if (char=="j") {
        byegreet.saybye(names[index]);
    } else {
        hellogreet.sayhello(names[index]);
    }
    
}