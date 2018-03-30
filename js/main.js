

alert("加载成功！");

// require.config = {
//     baseUrl: '/text/',
//     paths: {
//         jquery: 'lib/1.8.3/jquery.js',
//         index:  'js/index.js',
//         config:
//     }
// }

require([ 'jquery', 'config' ], function($) {
    $(function() {
        $(".box").css({ 'backgroundColor': 'cyan' , 'width': '200px',  'height': '200px'});
        $(".sbox").css({ 'width': '100px' , 'backgroundColor': 'red', 'height': '100px' })
    })
})
