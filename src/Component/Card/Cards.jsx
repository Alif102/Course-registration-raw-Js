import pyy from '../Images/py.png'
import {BiDollar} from 'react-icons/bi'
import {BsBook} from 'react-icons/bs'
const Cards = () => {
  return (
    
    <div>
        <h1 className='font-bold text-3xl'>Course Registration</h1>
        {/* card */}


        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-5 pt-5">
    <img src={pyy} alt="Shoes" className="rounded-xl" />
  </figure>
  <p className='font-bold mr-32'>Intro c</p>
  <div className='card-body' >
    {/* <h2 className='font-bold items-start'>intro cc program</h2> */}
    
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className='flex mx-3 justify-between items-center mb-3 mt-2'>
        <h1><BiDollar/></h1>
        <h1>Price : 15000</h1>
        <h1><BsBook/></h1>
        <h1>Credit : 1 hr</h1>
    </div>

    <div className="card-actions">
      <button className="btn text-white rounded-md w-[280px] h-8 bg-[#2F80ED]">Buy Now</button>
    </div>
  </div>
</div>


    </div>
  )
}

export default Cards