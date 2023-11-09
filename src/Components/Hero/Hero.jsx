import React from 'react';

const Hero = () => {
  return (
    <div class="container col-xxl-8 px-4 py-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img src="https://getbootstrap.com/docs/5.3/examples/heroes/bootstrap-themes.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-4">SMEKTABISA</h1>
          <h4 className='mb-4'>Siap kerja - Santun - Mandiri - Kreatif</h4>
          <p class="lead">
            Sekolah Menengah Kejuruan (SMK) merupakan salah satu bentuk satuan pendidikan formal yang menyelenggarakan pendidikan kejuruan pada jenjang pendidikan menengah sebagai lanjutan dari SMP, MTs, atau bentuk lain yang sederajat.
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
              Daftar sekarang!
            </button>
            <button type="button" class="btn btn-outline-primary btn-lg px-4">
              Cek persyaratan PKL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
