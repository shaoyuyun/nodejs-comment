var http = require('https');
var querystring = require('querystring');
 
var postData = querystring.stringify({
    'content':'慕课网也启用HTTPS协议了，小实例也有些变化。需要require https 并且port 置为 443',
    'mid':8837
});
 
var options = {
    hostname : 'www.imooc.com',
    port : 443,
    path : '/course/docomment',
    method : 'POST',
    headers :{
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh-CN,zh;q=0.8',
        'Connection': 'keep-alive',
        'Content-Length': postData.length,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie': 'imooc_uuid=0891e58c-d55c-4161-8da5-3321342d2448; imooc_isnew_ct=1535126000; loginstate=1; apsid=ZiYzE1MDFkYTEzNjNjYTUzMTIxNTA0MGNmOWQ5YjYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANjU3NzA3NgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxNjE0MjQ3NzgwQHFxLmNvbQAAAAAAAAAAAAAAAAAAAGQyMmM0ZmNiNGM0YjEwODU2OTQzYzI4ZDgwN2VmOWQ0%2BymAW%2FspgFs%3DNj; showwechat=1; PHPSESSID=5gcogq9c80s9l5f9pc4p9t40k3; UM_distinctid=165b3f848148b-0de0b041995506-4d045769-1fa400-165b3f84815559; CNZZDATA1261110065=762256911-1536322669-https%253A%252F%252Fwww.imooc.com%252F%7C1536322669; IMCDNS=0; Hm_lvt_fb538fdd5bd62072b6a984ddbc658a16=1536251109,1536309893,1536315819,1536316444; Hm_lpvt_fb538fdd5bd62072b6a984ddbc658a16=1536326281; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1536251110,1536309893,1536315819,1536316445; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1536326281; imooc_isnew=2; cvde=5b92541b7f0a0-185',
        'Host': 'www.imooc.com',
        'Origin': 'https://www.imooc.com',
        'Referer': 'https://www.imooc.com/video/8837',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 SE 2.X MetaSr 1.0',
        'X-Requested-With': 'XMLHttpRequest'
    }
};
 
var req = http.request(options,function (res) {
    console.log('Status: ' +  res.statusCode);
    console.log('Headers: ' +  JSON.stringify(res.headers));
 
    res.on('data',function (chunk) {
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk);
 
    });
    res.on('end',function () {
        console.log('评论完毕');
    });
 
});
 
req.on('error',function (e) {
    console.log('Error: ' + e.message );
});
req.write(postData);
req.end();