import React from "react";
import { NavLink } from "react-router-dom";
import signin from "../../assets/images/signin.png";
import { Content, Div, Icons } from "./style";

const SignIn = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <Content>
          <Content.Left>
            <Content.Title>Welcome back!</Content.Title>
            <Content.SubTitle>Meet the good taste today</Content.SubTitle>
            <Content.Form>
              <Div>
                <Content.Label>E-mail or phone number</Content.Label>
                <Content.Input
                  placeholder="Type your e-mail or phone number"
                  type="text"
                  autoComplete="current-email"
                />
              </Div>
              <Div>
                <Content.Label>Password</Content.Label>
                <Content.Input
                  placeholder="Type your password"
                  type="password"
                  autoComplete="current-password"
                />
                <Content.Forgot>Forgot Password?</Content.Forgot>
              </Div>
              <Div>
                <Content.Button>Sign In</Content.Button>
              </Div>
            </Content.Form>
            <Div>
              <Content.Other>or do it via other accounts</Content.Other>
              <Content.Media>
                <Icons.Google />
                <Icons.Apple />
                <Icons.Facebook />
              </Content.Media>
              <Content.Next>
                Don’t have an account? <NavLink to="/signup">Sign Up</NavLink>
              </Content.Next>
            </Div>
          </Content.Left>
          <Content.Right>
            <Content.Img src={signin} />
          </Content.Right>
        </Content>
      </div>
    </div>
  );
};

export default SignIn;
