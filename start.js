const process = require('child_process');
const { error } = require('console');

(function () {
    process.exec('hexo server --port=80', function (err) {
        if (!error) {
            console.log('hidutao跑在80端口上');
        } else {
            console.log('失败', error)
        }
    })
})()