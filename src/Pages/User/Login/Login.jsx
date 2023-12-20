import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import LoginStyled from "./Login.styled";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import Login_img from "../../../assets/login-img.png";

const axiosHandler = async (url, data) => await axios.post(url, data);

const Login = (props) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const value = {
      nisn: data.nisn,
      password: data.password,
    };

    const endpoint = `http://localhost:4000/api/v1/login`;

    try {
      const response = await axiosHandler(endpoint, value);

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("Authorize", token);

        Swal.fire({
          icon: "success",
          title: "Berhasil",
          text: response.data.message,
        }).then(() => {
          window.location.reload();
        });
      }

      reset();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response ? error.response.data : "Something went wrong!",
      });
    }
  };

  useEffect(() => {
    props.setShowFooter();
  }, [props]);

  const [password, setPassword] = useState(false);

  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <>
      <LoginStyled>
        <div className="bg-login py-5">
          <div className="container">
            <div className="row mx-auto">
              <div className="col-5 d-none d-md-block p-5 ms-auto bg-white border-end">
                <h3 className="fw-bolder">
                  MENJELAJAHI PENGALAMAN BARU BERSAMA PKL SMEKTA
                </h3>
                <img src={Login_img} alt="" className="img-fluid" />
              </div>
              <div className="col-12 col-md-5 px-5 pt-5 pb-3 me-auto bg-white border-start">
                <div className="col-12">
                  <div className="d-flex justify-content-end">
                    <button className="btn-close" onClick={goHome}></button>
                  </div>
                </div>
                <h1 className="login fw-bold">Login</h1>
                <h5 className="fw-bold">
                  Belum punya akun?
                  <a href="/register" className="daftar">
                    Daftar sekarang
                  </a>
                </h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control border-bottom"
                      id="floatingInput"
                      placeholder="NISN"
                      {...register("nisn", { required: "NISN is required" })}
                    />
                    <label htmlFor="floatingInput">NISN</label>
                  </div>
                  <div className="row mb-4">
                    <div className="form-floating col-11">
                      <input
                        type={password ? "text" : "password"}
                        className="form-control border-bottom"
                        id="floatingPassword"
                        placeholder="Password"
                        {...register("password", {
                          required: "Password is required",
                        })}
                      />
                      <label htmlFor="floatingPassword" className="ms-2">
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
                  <p className="text-end text-danger text-decoration-none text-end">
                    Lupa Password?
                  </p>
                  <button type="submit" className="btn-login px-4 mt-4">
                    Login
                  </button>
                </form>
                <div className="mt-5 pt-5 text-center">
                  <p>Masuk Dengan:</p>
                  <div className="d-flex justify-content-center gap-3">
                    <FaFacebook size={40} style={{ color: "#1877f2" }} />
                    <FaTwitter size={40} style={{ color: "#1da1f2" }} />
                    <FcGoogle size={40} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LoginStyled>
    </>
  );
};

export default Login;
