///<reference path='../../typings/index.d.ts'/>
///<reference path='../Data/VerseRepository.ts'/>
///<reference path='DayOfChristmas.tsx'/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ReactDemo;
(function (ReactDemo) {
    var Home;
    (function (Home) {
        var BasicControl = (function (_super) {
            __extends(BasicControl, _super);
            function BasicControl() {
                _super.apply(this, arguments);
            }
            BasicControl.prototype.render = function () {
                var verseRepository = new ReactDemo.Data.VerseRepository();
                var basicControl = this;
                var previousVerses = [];
                var verses = verseRepository.gifts()
                    .map(function (verse) {
                    previousVerses.unshift(verse);
                    return React.createElement(Home.DayOfChristmas, {key: verse.day, verse: verse, previousVerses: previousVerses.slice(0)});
                });
                var basicControl = this;
                return React.createElement("div", null, 
                    React.createElement("h1", null, "Happy Christmas"), 
                    verses);
            };
            return BasicControl;
        }(React.Component));
        Home.BasicControl = BasicControl;
    })(Home = ReactDemo.Home || (ReactDemo.Home = {}));
})(ReactDemo || (ReactDemo = {}));

///<reference path='../../typings/index.d.ts'/>
///<reference path='../Data/Verse.ts'/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ReactDemo;
(function (ReactDemo) {
    var Home;
    (function (Home) {
        var DayOfChristmas = (function (_super) {
            __extends(DayOfChristmas, _super);
            function DayOfChristmas() {
                _super.apply(this, arguments);
            }
            DayOfChristmas.prototype.render = function () {
                var previousGifts = this.props.previousVerses
                    .slice(1, this.props.previousVerses.length - 1)
                    .map(function (verse) { return React.createElement("li", {key: verse.day}, verse.gift); });
                return React.createElement("div", {className: "dayOfChristmas"}, 
                    "On the ", 
                    this.props.verse.day, 
                    " day of Christmas my true love sent to me:", 
                    React.createElement("ul", null, 
                        React.createElement("li", null, this.props.verse.gift), 
                        previousGifts, 
                        this.props.previousVerses && this.props.previousVerses.length > 1 &&
                            React.createElement("li", null, 
                                "and ", 
                                this.props.previousVerses[this.props.previousVerses.length - 1].gift)));
            };
            return DayOfChristmas;
        }(React.Component));
        Home.DayOfChristmas = DayOfChristmas;
    })(Home = ReactDemo.Home || (ReactDemo.Home = {}));
})(ReactDemo || (ReactDemo = {}));

///<reference path='../../typings/index.d.ts'/>
///<reference path='BasicControl.tsx'/>
var target = document.getElementById("contentGoesHere");
if (target)
    ReactDOM.render(React.createElement(ReactBootstrap.Grid, null, 
        React.createElement(ReactDemo.Home.BasicControl, null)
    ), target);
