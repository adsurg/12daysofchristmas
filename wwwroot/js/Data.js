///<reference path='../../typings/index.d.ts'/>

///<reference path='Verse.ts'/>
var ReactDemo;
(function (ReactDemo) {
    var Data;
    (function (Data) {
        var VerseRepository = (function () {
            function VerseRepository() {
            }
            VerseRepository.prototype.gifts = function () {
                return [
                    { day: "first", gift: "a Partridge in a Pear Tree" },
                    { day: "second", gift: "two Turtle Doves" },
                    { day: "third", gift: "three French Hens" },
                    { day: "forth", gift: "four Calling Birds" },
                    { day: "fifth", gift: "five Gold Rings" },
                    { day: "sixth", gift: "six Geese a-Laying" },
                    { day: "seventh", gift: "seven Swans a-Swimming" },
                    { day: "eighth", gift: "eight Maids a-Milking" },
                    { day: "ninth", gift: "nine Ladies Dancing" },
                    { day: "thenth", gift: "ten Lords a-Leaping" },
                    { day: "eleventh", gift: "eleven Pipers Piping" },
                    { day: "twelfth", gift: "twelve Drummers Drumming" }];
            };
            return VerseRepository;
        }());
        Data.VerseRepository = VerseRepository;
    })(Data = ReactDemo.Data || (ReactDemo.Data = {}));
})(ReactDemo || (ReactDemo = {}));
