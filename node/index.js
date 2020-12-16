const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
   const endpoint = req.url;
   if( endpoint==='/start' ){
      fs.readFile('./index.html',(err, data)=>{
         res.writeHead(200, {'Content-Type': 'text/html'});
         res.write(data);
         res.end();
      });
   }
   if( endpoint==='/api' ){
      // ここに処理を記述してください。

      // note: apiのRequestPayloadをnode.jsで取得する処理と
      //       ejsを使用せずにhtml要素を書き換える処理が分からなかった
      //       学習して再チャレンジしたい

      // TODO: Requestからobjを取得する処理
      const request = {
         obj: [
            {
               num: 4, text: "fizz"
            },
            {
               num: 7, text: "buzz"
            },
            {
               num: 8, text: "hoge"
            },
            {
               num: 15, text: "huga"
            }
         ]
      }

      // 取得したrequestを元にFizzBuzzを配列にpushする処理
      const n = 30;
      const obj = request.obj;
      const len = obj.length;
      const result = [];

      for (let i = 0; i < n; i++) {
         let currentResult = '';
         let currentNum = i + 1;

         for (let j = 0; j < len; j++) {
            if (currentNum % obj[j]['num'] === 0 ) {
               currentResult = currentResult + obj[j]['text'];
            }
         }
         if (currentResult === '') {
            currentResult = currentNum;
         }
         result.push(currentResult);
      }
      console.log(result);

      // TODO: index.htmlの<span id="result-text"></span>に
      //       出力結果を展開する処理

   }
});
server.listen(8080); 