//点击"登录"按钮之后，实现登录功能：
function btn_login() {

    //手机端适配：（点击登录直接跳转)
    window.location.href = '../index/chat1.html';
    // 获取用户名和密码
    // const username = document.getElementById('username').value;
    // localStorage.setItem('username', username);
    // const password = document.getElementById('password').value;

    // // 创建一个 User 对象
    // const user = {
    //     username: username,
    //     password: password
    // };

    // // 发送登录请求
    // fetch('http://localhost:8080/login', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(user)
    // })
    //     .then(response => response.json())
    //     .then(data => {
    //         if (data.code === 1) {
    //             // 登录成功，保存登录状态信息
    //             localStorage.setItem('isLoggedIn', 'true');
    //             // 保存账号名localStorage
    //             localStorage.setItem('username', username);
    //             alert('登录成功');
    //             // 可以跳转到其他页面
    //             window.location.href = '../index/chat1.html';
    //         } else {
    //             if(data.msg == "error username"){
    //                 alert("用户名输入错误");
    //             }
    //             else{
    //                 alert("密码输入错误")
    //             }
    //         }
    //     })
    //     .catch(error => {
    //         console.error('登录请求出错:', error);
    //     });
}

// //点击登录后跳转至注册页面
// function goToRegisterPage() {
//     window.location.href = './register.html';
// }