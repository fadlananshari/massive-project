import React from 'react';
import { useState } from 'react';
import Register_img from '../../assets/register-img.png';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import SignUpStyled from './SignUp.styled';
import Navbar from '../../Components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import Popup from '../../Components/Popup/Popup';
import imgSukses from '../../assets/detail-perusahaan/berhasil-daftar.png';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [password, setPassword] = useState(false);
  const data = [
    { label: 'Beranda', url: '/' },
    { label: 'Tentang Kami', url: '/#Tentang' },
    { label: 'Program', url: '/#program' },
    { label: 'Kontak', url: '/#Kontak' },
  ];

  const navigate = useNavigate();
  const goHomepage = () => {
    navigate('/homepage');
  };

  const goHome = () => {
    navigate('/');
  };
  return (
    <>
      <Navbar data={data} />
      <SignUpStyled>
        <div className="bg-login py-5">
          <div className="container">
            <div className="row mx-auto mt-5">
              <div className="col-5 d-none d-lg-block p-5 ms-auto bg-white border-end">
                <h3 className="fw-bolder text-uppercase">mempersiapkan siswa untuk masa depan adalah tujuan kami</h3>
                <div className="mx-auto width-max-content pt-3">
                  <img src={Register_img} alt="" className="img-fluid" />
                </div>
              </div>

              <div className="col-12 col-lg-5 px-5 pt-5 pb-3 me-auto bg-white border-start">
                <div className="col-12">
                  {/* button exit */}
                  <div className="d-flex justify-content-end">
                    <button className="btn-close" onClick={goHome}></button>
                  </div>
                </div>
                <h1 className="login fw-bold">Sign Up</h1>
                <h5 className="fw-bold">Ayo segera daftarkan akun anda!</h5>
                <div className='form'>
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control border-bottom" id="floatingInput" placeholder="Nama Depan" />
                    <label for="floatingInput" className="">
                      Nama Depan
                    </label>
                  </div>
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control border-bottom" id="floatingInput" placeholder="Nama Belakang" />
                    <label for="floatingInput" className="">
                      Nama Belakang
                    </label>
                  </div>
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

                  {/* <div className="text-end text-decoration-none text-end"> */}
                  <div class="form-check ms-auto width-max-content">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                      Saya setuju dengan persyaratan layanan
                    </label>
                  </div>
                  {/* </div> */}
                  <button type="submit" data-bs-toggle="modal" data-bs-target="#suksesRegister" className="btn-login px-4 mt-4">
                    Register
                  </button>
                </div>
                <div className="mt-3 py-2 text-center">
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
      </SignUpStyled>
      <Popup
        id="suksesRegister"
        img={imgSukses}
        title="Selamat Anda Telah Berhasil Mendaftar"
        textButton={
          <Link to="/homepage" className="text-white text-decoration-none">
            OK
          </Link>
        }
        bgColor="#DCE8FF"
      />
    </>
  );
};

export default SignUp;
