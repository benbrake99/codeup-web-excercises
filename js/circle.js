// (function() {
//     "use strict";
//
//     create a circle object
//     var circle = {
//         radius: 3,
//         return 2 * Math.PI * radius;
//
//         function circleObj(radius){
//             return 2 * Math.PI * radius;
//             console.log(Math.PI);
//             console.log(circleObj(3))
//     }
//
//         getArea: function () {
//             // TODO: complete this method
//             // hint: area = pi * radius^2
//
//             return; // TODO: return the proper value
//         },
//         //     function circleObj(radius){
//         //         return 2 * Math.PI * radius;
//         //         console.log(Math.PI);
//         //         console.log(circleObj(3))
//         // }
//         // logInfo: function circleObj(doRounding) {
//             // TODO: complete this method.
//
//                 function circleObj(radius) {
//                     return 2 * Math.PI * radius;
//                     var area = radius
//                 }
//                     console.log(Math.PI);
//                     console.log(circleObj(3));
//                     console.log(circleObj(3)(Math.round));
//                     console.log("Area of a circle with radius: " + this.radius + ", is: " + area);
//
//             // If doRounding is true, round the result to the nearest integer.
//             // Otherwise, output the complete value
//
//             console.log("Area of a circle with radius: " + this.radius + ", is: ");
//         }
//     };
//
//     // log info about the circle
//     console.log("Raw circle information");
//     circle.logInfo(false);
//     console.log("Circle information rounded to the nearest whole number");
//     circle.logInfo(true);
//
//     console.log("=======================================================");
//     // TODO: Change the radius of the circle to 5.
//
//     // log info about the circle
//     console.log("Raw circle information");
//     circle.logInfo(false);
//     console.log("Circle information rounded to the nearest whole number");
//     circle.logInfo(true);
// })();
// //
// // function circle(radius)
// // {
// //     this.radius = radius;
// //     // area method
// //     this.area = function ()
// //     {
// //         return Math.PI * this.radius * this.radius;
// //     };
// //     // perimeter method
// //     this.perimeter = function ()
// //     {
// //         return 2*Math.PI*this.radius;
// //     };
// // }
// // var c = new circle(3);
// // console.log('Area =', c.area().toFixed(2));
// // console.log('perimeter =', c.perimeter().toFixed(2));
//
// // prototype example
// //
// // Example: prototype
// // function Student() {
// //     this.name = 'John';
// //     this.gender = 'M';
// // }
// //
// // var studObj = new Student();
// //
// // console.log(Student.prototype); // object
// // console.log(studObj.prototype); // undefined
// // console.log(studObj.__proto__); // object
// //
// // console.log(typeof Student.prototype); // object
// // console.log(typeof studObj.__proto__); // object
// //
// // console.log(Student.prototype === studObj.__proto__ ); // true

(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
             return (Math.PI * this.radius * this.radius);

            // TODO: complete this method
            // hint: area = pi * radius^2

            // return; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            if(!Number.isInteger(circle.getArea())) {
                console.log(Math.round(circle.getArea()));
            }else {
                console.log(circle.getArea())
            }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea());
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
circle.radius = 5
    // console.log(circle.getArea());
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();