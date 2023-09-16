/* eslint-disable react/prop-types */

const RightCart = ({selectedCard , count, hour, remaining}) => {
  return (
    <div> 
      <div className="card lg:fixed rounded-lg items-start text-start w-72 bg-white shadow-xl" >
      
      <h2 className="text-md font-bold mb-4 text-sky-600">Credit Hour Remaining {remaining} hr</h2>
      <hr/>
      <h2 className="text-xl mt-4 mb-3 font-bold">Course Name</h2>
      
        
        {
          selectedCard.map((card )=> (
            <div key={card.id} >
             
              <ol className=" list-inside list-disc text-gray-500 mt-4 mb-3 "> 
              {card.title}
              
              </ol>
            </div>



            
          ))
        }
        <hr/>
        <h2 className="text-gray-600 mt-3 mb-3">Total Credit Hour : {hour}</h2>
        <hr/>
      <h2 className="text-gray-600 font-bold mt-4">Total Price : {count} USD</h2>
        

      </div>
       
    </div>
  )
}

export default RightCart