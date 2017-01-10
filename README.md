This is a quick demo of hosting a simple React site using aspnet core, without WebPack.

The aim is to edit with one class per file like you would in a real development environment, but output the smallest most cachable js files we can.

The without WebPack part is really important. WebPack will try to munge the react and bootstrap files into our own js, slowing the compile and bloating the output.  It does give us the ability to export and import modules, but taking away lets us use proper namespaces which I prefer anyway.  I'm happy to debate this approach and learn something in the process.

Before you run this, you'll need:
* install .net core sdk from <https://www.microsoft.com/net/download/core>
* install nodejs from <https://nodejs.org/en/>
* run ```npm install typings gulp -g``` from the command line

With thos installed you can then
* open the project folder in a command prompt;
* ```start dotnet run```
* ```gulp browser-sync```
* browse http://localhost:5000/Home.html

Let me know if these instructions are broken and we can work through fixing this.