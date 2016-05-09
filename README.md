# ReactiveX training

**Empty JSBin template:** https://jsbin.com/fafine/1/edit?js,output

## Observable, Observer, Subscription

**Exercise:** use `Observable.create` to deliver the values `1`, `4`, `9`, `16`, `25` in sequence, and then deliver the complete notification.

**Exercise:** for each of the following diagrams, answer whether it is a valid or invalid Observable, according to the Observable grammar.

- `--a--b----c---|`
- `--a--b----c----`
- `--------|------a`
- `--a-----|`
- `a-b-c|`
- `--a--b----#`
- `--a--b----#---|`
- `--|`
- `-----------`
- `--|-----#`
- `--#`

## Methods of creating Observables

**Exercise:** write a function called `fromArray(arr)` that takes an array argument `arr`, and use `Observable.create` to deliver all the items the array to the Observer. Use the array `arr = [1, 1, 2, 3, 5, 8, 13]` as an example to test if your code works.

**Exercise:** true or false? For each of the following claims, answer whether it is correct or incorrect.

- When you subscribe to an Observable, the return is a Subscription.
- A Subscription contains callbacks for next, error, and complete.
- The function given to Observable.create takes an Observer as argument.
- A Subscriber is an Observer which you can call unsubscribe().
- When you create an Observable, it starts executing, and Observers may be added as listeners.

## Basic operators

**Exercise:** write the function `multiplyBy(sourceObservable, factor)` that returns an Observable that delivers the values of the source Observable multiplied by the supplied `factor` number, respectively. Use `Observable.from([1, 4, 9, 16])` as an example of a source Observable, to test if your code works for `multiplyBy(source, 100)`.

**Exercise:** use operator `map` to transform each input number to that number squared. Use `Observable.interval(1000)` as an example of a source Observable, to test if your code works.

**Exercise:** given from `Observable.interval(1000)` as a source, make an Observable with that takes only 10 *even* numbers from the source and multiplies each by 100.

**Exercise:** open http://jsbin.com/divugev/edit?js,output and follow the instructions in the comments.

**Exercise:** open http://jsbin.com/zonike/1/edit?js,output and follow the instructions in the comments.

**Exercise:** open http://jsbin.com/toquxe/1/edit?js,output. The task is to build a counter user interface. It has a label displaying the current value of the counter, and two buttons: "increment" and "decrement". You are given the Observable of clicks on the increment button and an Observable of clicks on the decrement button, and through the use of operators, you must produce one Observable, `counterValue` as output.

## Debugging techniques

**Exercise:** open https://jsbin.com/doxuzop/1/edit?js,output. It has two bugs: (1) the full name should be displayed if you input the first name while the last name is still empty, (2) after a while using the input fields, it stops responding. Debug and fix the issues by first drawing the Observable graph, and then using `do` operators that log to the console. If needed, also draw marble diagrams for each operator in the Observable graph.

## Subjects and multicasting

**Exercise**: open https://jsbin.com/kawevu/1/edit?js,output. Fix the mismatch between the displayed number as a digit and as a word. Fix the initialization: `Observable.interval(2000)` only emits the first value after 2000ms, but we want to immediately see the first random number.

## Observable of Observables

**Exercise:** on every click, start an interval(1000ms) and display that number in the console. The interval(1000ms) for the previous click should be canceled.

**Exercise:** on every click, start an interval(1000ms) and display that number in the console. The interval(1000ms) for the previous click should *not* be canceled, it should concurrently be displayed in the console too.

**Exercise:** write a function called `filter(sourceObservable, predicate)`, using `flatMap()` to achieve the same behavior as the `filter` operator. Using `source = Observable.interval(1000).take(10)`, call `filter(source, x => x % 2 === 0)` and subscribe to the output Observable to check that your code works. It should only emit even numbers.
