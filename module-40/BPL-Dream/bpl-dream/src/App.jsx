
import './App.css'
import navimg from './assets/logo.png'
import dollarimg from './assets/dollar.png'

function App() {
 

  return (
    <>
     
    <div className="navbar max-w-[1200px] mx-auto">
      <div className="flex-1">
           <a className=" text-xl">
            <img className='w-[60px] h-[60px]' src={navimg} alt="" />
           </a>
       </div>
      <div className="flex items-center">
      <span className='mr-1'>600000000</span>
      <span className='mr-1'>Coin</span>
      <img className='w-[20px] h-[20px]' src={dollarimg} alt="" />
  </div>
</div>
 
    </>
  )
}

export default App
