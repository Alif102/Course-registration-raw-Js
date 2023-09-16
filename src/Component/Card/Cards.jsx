import { useEffect , useState} from 'react'
import {BiDollar} from 'react-icons/bi'
import {BsBook} from 'react-icons/bs'
import RightCart from '../RightCart'
import swal from 'sweetalert'


const Cards = () => {

   const [Allcards, setAllCards] = useState([]);
   const [selectedCard , setSelectedCard] = useState([]);
   const [count, setCount] = useState(0);
   const [hour, setHour] = useState(0);
   const [remaining, setRemaining] = useState(20);
   
  useEffect( ()=> {
    fetch('./AvengersData.json')
    .then(res => res.json())
    .then(data => setAllCards(data))

} ,[])

  const handleSelectedCard = (cards)=> {
    const isExist = selectedCard.find((item)=> item.id == cards.id) ;
    let count = cards.price;
    let hour = cards.credit;
    if (isExist) {
      return swal({
        title: "You Already Add This Course!",
        text: "Choose Another Course!",
        icon: "error",
      });
        

    } else{  

      selectedCard.forEach((Hour)=> {

        hour = hour + Hour.credit;
      })
      setHour(hour);
      if (hour >20) 
      {
       return swal({
        title: "Credit Exceeded.",
        text: "You Can Add Maximum 20hr!",
        icon: "error",
      }); 
      } else{ 
      
      const RemainingHour = 20 - hour;
      setRemaining(RemainingHour);
      }



      selectedCard.forEach((item)=> {

        count = count + item.price;
      })
      setCount(count)


    setSelectedCard([...selectedCard,cards])
    }
    // console.log(selectedCard)

  }


  return (
    
    <div className='py-16' >
        <h1 className='font-bold text-4xl mb-6'>Course Registration</h1>
        <div className='grid lg:grid-cols-4  gap-4'>
        <div className=' grid-cols-1 sm:col-span-1 lg:col-span-3 grid lg:grid-cols-3'>
         
         {
           Allcards.map((cards)=>(
             <div key={cards.id}>
             
              <div className="card w-72 shadow-lg h-96 mb-8 gap-4 rounded-md bg-white">
   <figure className="">
     <img src={cards.image} alt="card" className="rounded-xl" />
   </figure>
  
   
   <div className='card-body items-start text-start' >
   <p className='font-bold mt-2 mb-2'>{cards.title}</p> 
     
     <p className='mb-2 text-sm text-gray-600'>{cards.desc}</p>
     <div className='flex justify-between items-center text-sm mb-3'>
         <h1 className='text-xl'><BiDollar/></h1>
         <h1 className='mr-2 text-gray-600'>Price : {cards.price}</h1>
         <h1><BsBook/></h1>
         <h1 className='text-gray-600'>Credit : {cards.credit}</h1>
     </div>
 
     <div className="card-actions">
 <button      
 onClick={()=> handleSelectedCard(cards)} 
        className="btn text-white rounded-md w-[240px] h-8 bg-[#2F80ED]">Buy Now</button>
     </div>
   </div>
 </div>
 
 
             </div>
             
 
 
           ))
         }
         </div>
<div className='col-span-1'>
<RightCart selectedCard={selectedCard}
          count={count}
          hour={hour}
          remaining={remaining}
/>


</div>
        </div>
       

        
      



    </div>
  )
}

export default Cards