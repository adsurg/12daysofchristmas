///<reference path='Verse.ts'/>

namespace ReactDemo{
    export namespace Data {
        export class VerseRepository {
            gifts(): Verse[]{
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
            }
        }
    }
}
