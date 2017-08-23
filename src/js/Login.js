import React, { Component } from 'react';




import '../css/reset.css';
import '../css/supersized.css';
import '../css/style.css';


import './jquery-1.8.2.min';
import './supersized.3.2.7.min';
import './supersized-init';

import $ from 'jquery'



class Login extends Component{
    componentDidMount()
{
    $('.page-container form').submit(function () {
        var username = $(this).find('.username').val();
        var password = $(this).find('.password').val();
        if (username == '') {
            $(this).find('.error').fadeOut('fast', function () {
                $(this).css('top', '27px');
            });
            $(this).find('.error').fadeIn('fast', function () {
                $(this).parent().find('.username').focus();
            });
            return false;
        }
        if (password == '') {
            $(this).find('.error').fadeOut('fast', function () {
                $(this).css('top', '96px');
            });
            $(this).find('.error').fadeIn('fast', function () {
                $(this).parent().find('.password').focus();
            });
            return false;
        }
    });

    $('.page-container form .username, .page-container form .password').keyup(function () {
        $(this).parent().find('.error').fadeOut('fast');
    });
}
  render() {
    return (
        <div className="page-container">
            <h1>登录</h1>
            <form action="" method="post">
                <input type="text" name="username" className="username" placeholder="用户名"/>
                    <input type="password" name="password" className="password" placeholder="密码"/>
                        <button type="submit">提交</button>
                        <div className="error"><span>+</span></div>
            </form>
            <div className="connect">
                <p>Or connect with:</p>
                <p>
                    <a className="facebook" href=""></a>
                    <a className="twitter" href=""></a>
                </p>
            </div>
        </div>
  );
  }
}

export default Login;
