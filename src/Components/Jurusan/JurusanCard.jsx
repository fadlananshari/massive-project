import React from 'react'

const JurusanCard = ({jurusan}) => {
  return (
    <div className='py-3'>
        <img src={jurusan.gambar} alt="" className='img-fluid rounded-4'/>
        <div className="d-md-flex justify-content-between px-3 py-2">
            <p className='mb-2'>{jurusan.nama}</p>
            <a href={jurusan.url} className='btn-cari px-4'>Cari</a>
        </div>
    </div>
  )
}

export default JurusanCard