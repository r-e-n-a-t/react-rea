import React from 'react'

const Footer = () => {
  return (
    <div className='container'>
        <footer className='row row-col-cols-1 row-cols-sm-2 pt-4 row-cols-md-5 py-5 my-5 border-top'>
          <div className='col mb-3'>
            <a href="" className=''>
              <img src="img/logo1.png" className='bi me-2' width={180} height={180} />
            </a>
            <p>
              A&B - Надежный друг
            </p>
          </div>
          <div className='col mb-3'></div>
          <div className='col mb-4'>
            <h5>Колонка 1</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'>
                <p className='nav-link p-0 text-muted'>Надпись</p>
              </li>
              <li className='nav-item mb-2'>
                <p>Надпись</p>
              </li>
            </ul>
          </div>
          <div className='col mb-4'>
            <h5>Колонка 2</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'>
                <p className='nav-link p-0 text-muted'>Надпись</p>
              </li>
              <li className='nav-item mb-2'>
                <p>Надпись</p>
              </li>
            </ul>
          </div>
        </footer>
    </div>
  )
}

export default Footer