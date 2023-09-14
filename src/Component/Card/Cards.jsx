import { useEffect , useState} from 'react'
import {BiDollar} from 'react-icons/bi'
import './Card.css'
import {BsBook} from 'react-icons/bs'

const Cards = () => {

   const [Allcards, setAllCards] = useState([]);



  useEffect( ()=> {
    fetch('./AvengersData.json')
    .then(res => res.json())
    .then(data => setAllCards(data))

} ,[])


  return (
    
    <div>
        <h1 className='font-bold text-3xl'>Course Registration</h1>
       <div className='card-container grid grid-cols-3'>
         
        {
          Allcards.map((cards)=>(
            <div key={cards.id}>
            
             <div className="card w-72 bg-base-100 shadow-xl">
  <figure className="">
    <img src={cards.image} alt="Shoes" className="rounded-xl" />
  </figure>
  
  <div className='card-body' >
  <p className='font-bold flex justify-start'>{cards.title}</p> 
    
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className='flex justify-between items-center text-sm mb-3'>
        <h1><BiDollar/></h1>
        <h1>Price : 15000</h1>
        <h1><BsBook/></h1>
        <h1>Credit : 1 hr</h1>
    </div>

    <div className="card-actions">
      <button className="btn text-white rounded-md w-[240px] h-8 bg-[#2F80ED]">Buy Now</button>
    </div>
  </div>
</div>


            </div>
            


          ))
        }
        </div>




    </div>
  )
}

export default Cards