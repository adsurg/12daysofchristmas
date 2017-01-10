///<reference path='../../typings/index.d.ts'/>
///<reference path='../Data/Verse.ts'/>

namespace ReactDemo{
    export interface IReactDemoProps{
        verse: Data.Verse;
        previousVerses: Data.Verse[];
    }
    export namespace Home {
        export class DayOfChristmas extends React.Component<IReactDemoProps, {}> {
            render(){
            var previousGifts = this.props.previousVerses
            .slice(1,this.props.previousVerses.length-1)
            .map(verse => <li key={verse.day}>{verse.gift}</li>);

            return <div className="dayOfChristmas">On the {this.props.verse.day} day of Christmas my true love sent to me:
                    <ul>
                    <li>{this.props.verse.gift}</li>
                    {previousGifts}
                    {this.props.previousVerses && this.props.previousVerses.length > 1 &&
                    <li>and {this.props.previousVerses[this.props.previousVerses.length-1].gift}</li>}
                    </ul>
                </div>;
            }
        }
    }
}

