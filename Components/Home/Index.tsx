///<reference path='../../typings/index.d.ts'/>
///<reference path='BasicControl.tsx'/>

var target = document.getElementById("contentGoesHere");
if(target)
  ReactDOM.render(<ReactBootstrap.Grid>
                    <ReactDemo.Home.BasicControl />
                  </ReactBootstrap.Grid>, target);
