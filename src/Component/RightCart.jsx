/* eslint-disable react/prop-types */

const RightCart = ({selectedCard , count, hour, remaining}) => {
  return (
    <div> 
      <div className="card w-72 bg-base-100 shadow-xl" >
      <h2>This is cart</h2>
      <h2>Credit Hour Remaining {remaining}</h2>
      <h2>Total Credit : {hour}</h2>
      <h2>Total : {count}</h2>
        <h2>Totall Cart : {selectedCard.length}</h2>
        {
          selectedCard.map((card ,idx)=> (
            // <div key={idx} >
             
            //   <ol className=" list-disc"> {card.title}</ol>
            // </div>

            <div key={idx}>
        <div >
  <div className="card-body">
    <h2 className="card-title">{card.title}</h2>
    
    
  </div>
</div>
        </div>


            
          ))
        }
        

      </div>
       
    </div>
  )
}

export default RightCart