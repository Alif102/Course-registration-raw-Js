import './App.css'
import Cards from './Component/Card/Cards';
import RightCart from './Component/RightCart';


const App = () => {
  return (
    <div>
      <div className='grid grid-cols-4 gap-4'>
      <div className='col-span-3'>
      <Cards/>
          
      </div>

      <div className='col-span-1'>
      <RightCart />
      </div>
      </div>


    </div>
  )
}

export default App;