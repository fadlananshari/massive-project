import React from 'react';
import { useState } from 'react';
import Login_img from '../../assets/login-img.png';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import LoginStyled from './Login.styled';

const Login = () => {
  const [password, setPassword] = useState(false);

  return (
    <LoginStyled>
      <div className="bg-login py-5">
        <div className="container">
          <div className="row mx-auto mt-5">
            <div className="col-5 d-none d-md-block p-5 ms-auto bg-white border-end">
              <h3 className='fw-bolder'>MENJELAJAHI PENGALAMAN BARU BERSAMA PKL SMEKTA</h3>
              <img src={Login_img} alt="" className="img-fluid" />
            </div>
            <div className="col-12 col-md-5 px-5 pt-5 pb-3 me-auto bg-white border-start">
              <h1 className="login fw-bold">Login</h1>
              <h5 className="fw-bold">
                Belum punya akun?<a className="daftar">Daftar sekarang</a>
              </h5>
              <form>
                <div class="form-floating mb-3">
                  <input type="email" class="form-control border-bottom" id="floatingInput" placeholder="name@example.com" />
                  <label for="floatingInput" className="">
                    Username Atau Email
                  </label>
                </div>
                <div className="row mb-4">
                  <div class="form-floating col-11">
                    <input type={password ? 'text' : 'password'} class="form-control border-bottom" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword" className="ms-2">
                      Password
                    </label>
                  </div>
                  {password ? (
                    <FaRegEyeSlash
                      size={20}
                      className="col-1 px-0 my-auto mb-2"
                      onClick={() => {
                        setPassword(false);
                      }}
                    />
                  ) : (
                    <FaRegEye
                      size={20}
                      className="col-1 px-0 my-auto mb-2"
                      onClick={() => {
                        setPassword(true);
                      }}
                    />
                  )}
                </div>
                <p className="text-end text-danger text-decoration-none text-end">Lupa Password?</p>
                <button className="btn-login px-4 mt-4">Login</button>
              </form>
              <div className="mt-5 pt-5 text-center">
                <p>Masuk Dengan:</p>
                <div className="d-flex justify-content-center gap-3">
                  <FaFacebook size={40} style={{ color: '#1877f2' }} />
                  <FaTwitter size={40} style={{ color: '#1da1f2' }} />
                  <FcGoogle size={40} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LoginStyled>
  );
};

export default Login;
