var Rx = require('rx');


// Ex 1
var ex1 = Rx.Observable.of(1, 4, 9, 16, 25);

ex1.subscribe(function onNext(x){ console.log("Next:", x);})

// Ex 2

 