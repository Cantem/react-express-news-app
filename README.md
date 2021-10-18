# React-express-news-app

React-Express-App is a simple news applicaiton which uses React and Material UI for the client side and Express and Node for server side. It utilizes NewsAPI (https://newsapi.org/) for the back-end part of the application.

## Installation

Before running the app on your localhost, create an account and API key at https://newsapi.org/. Next, head off to the root directory of the application and add `.env` file where you'll need to paste your API key. The environmental variable should be called `NEWS_API_KEY`.

```
.env
```
Run following commands.

1. `npm install`
2. `cd client && npm install`
3.  `cd ..`
4.  `npm start`

`npm build` command is also available for the client and server side.

You should see that both client and server are running

```javascript
[0] > express-news-server@1.0.0 start:server /Users/rafalporzucek/projects/react-express-news-app
[0] > nodemon src/server.js --exec "babel-node src/server.js"
[0] 
[1] 
[1] > express-news-server@1.0.0 client /Users/rafalporzucek/projects/react-express-news-app
[1] > npm start --prefix client
[1] 
[0] [nodemon] 2.0.13
[0] [nodemon] to restart at any time, enter `rs`
[0] [nodemon] watching path(s): *.*
[0] [nodemon] watching extensions: js,mjs,json
[0] [nodemon] starting `babel-node src/server.js src/server.js`
[1] 
[1] > tny-tech-test@1.0.0 start /Users/rafalporzucek/projects/react-express-news-app/client
[1] > webpack serve
[1] 
[1] <i> [webpack-dev-server] Project is running at:
[1] <i> [webpack-dev-server] Loopback: http://localhost:8080/
[1] <i> [webpack-dev-server] On Your Network (IPv4): <yourIPv4>
[1] <i> [webpack-dev-server] On Your Network (IPv6): <yourIPv6>
[1] <i> [webpack-dev-server] Content not from webpack is served from '/Users/rafalporzucek/projects/react-express-news-app/client/src' directory
[1] asset main.js 2.68 MiB [emitted] (name: main)
[1] asset index.html 221 bytes [emitted]
[1] orphan modules 685 KiB [orphan] 296 modules
[1] runtime modules 27.1 KiB 13 modules
[1] modules by path ./node_modules/ 2.03 MiB 269 modules
[1] modules by path ./src/ 42.3 KiB
[1]   modules by path ./src/components/*.js 23.4 KiB 12 modules
[1]   modules by path ./src/api/*.js 17.4 KiB
[1]     ./src/api/api.js 2.44 KiB [built] [code generated]
[1]     ./src/api/mockData.js 14.8 KiB [built] [code generated]
[1]     ./src/api/constants.js 160 bytes [built] [code generated]
[1]   modules by path ./src/*.js 1 KiB
[1]     ./src/index.js 313 bytes [built] [code generated]
[1]     ./src/App.js 713 bytes [built] [code generated]
[1]   ./src/utils/helpers.js 490 bytes [built] [code generated]
[1] webpack 5.57.1 compiled successfully in 5930 ms
[0] Server running on port 5000
```

For easier development experience there's some mockData available at `client/src/api/mockData.js`.

## Technologies & Tools

* React
* Node
* Express
* Material UI
* Swagger
* Jest

## Swagger

An additional convenient feature is swagger interface for the API part of the app (available at `port:5000`)

![image](https://user-images.githubusercontent.com/36113728/136695574-a11ccf29-331b-48cc-a183-1ea2498852c3.png)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Improvements

Initial list of improvements:

1. Missing controller call in unit test.✅
2. Add basic API error handling. ✅
3. Remove underline from go home in Not Found page + basic styles. ✅
4. Infinite scrolling.
5. Mobile hamburger menu. ✅
6. Go DRY and create re-usable code.
7. Add glabal theme. ✅
8. Add state management e.g. Redux

You can keep track of the ongoing changes at (https://github.com/Cantem/react-express-news-app/tree/improvements) which will become a PR in the near future.

## License

[MIT](https://choosealicense.com/licenses/mit/)

