import React from 'react'
const CardItem = () => {
  return (
    <div className='conteiner py-3'>
        <main>
            <div className='row row-cols-1 justify-content-evenly row-cols-md-3 row-cols-sm-2 text-center'>
                <div className='col px-3 py-3'>
                    <div className='card md-6 rounded'>
                        <div className='card-header py-2 px-3'>
                            <button type='button' className='w-100 btn btn-lg btn-primary'>
                                Добавить в избранное
                            </button>
                            <p>Заголовок</p>
                            <img src="./img/1.jpeg" alt="img" width={200}/>
                            <p>Описание</p>
                            <p>Цена</p>
                            <button type='button' className='w-100 btn btn-lg btn-primary'>
                                Добавить в корзину
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default CardItem