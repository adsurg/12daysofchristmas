///<reference path='../../typings/index.d.ts'/>
///<reference path='../Data/VerseRepository.ts'/>
///<reference path='DayOfChristmas.tsx'/>

namespace ReactDemo{
    interface IBasicControlState{
        numberOfVerses: number;
    }

    export namespace Home {
        export class BasicControl extends React.Component<{}, {}> {
            render(){
                var verseRepository = new Data.VerseRepository();
                var basicControl = this;
                var previousVerses: Data.Verse[] = [];
                var verses = verseRepository.gifts()
                    .map(verse =>{
                        previousVerses.unshift(verse);
                        return <DayOfChristmas key={verse.day} verse={verse} previousVerses={previousVerses.slice(0)} />;
                    });
                var basicControl = this;
                return <div><h1>Happy Christmas</h1>
                            {verses}</div>;
            }
        }
    }
}

