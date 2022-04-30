var Person = function(){
    var person = {
        _name: "Leroy",
        _friends: [],
        fillfriends(f) {
            this._friends.push(...f)}
    }
    return person;
}