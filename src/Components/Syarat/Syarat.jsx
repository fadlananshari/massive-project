import React from 'react';

const Syarat = () => {
  return (
    <div className="container my-5">
      <h2 className='fw-bolder'>Apa saja syarat keikutsertaan Siswa?</h2>
      <p>Berikut Syarat untuk mengikuti Paktek Kerja lapangan (PKL)</p>
      <div className="table-responsive">
        <table class="table table-bordered table-striped text-center">
          <thead>
            <tr >
              <th scope="col" className='bg-primary text-white'>
                No
              </th>
              <th scope="col" className='bg-primary text-white'>
                Komponen
              </th>
              <th scope="col" className='bg-primary text-white'>
                Syarat Ketentuan
              </th>
            </tr>
          </thead>
          <tbody >
            <tr>
              <th scope="row">1</th>
              <td >Jenjang Pendidikan</td>
              <td >SMK/MAK</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td >Semester</td>
              <td >4</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td >Nilai</td>
              <td >Nilai semester 1- 4 tuntas</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td >Kompetensi setiap tingkat</td>
              <td >Tuntas</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Syarat;
