import './App.css'
import Button from './components/Button'

function App() {
  
  return (
    <>
      <div className='bg-slate-300 w-[100vw] h-[calc(100dvh-4rem)] flex justify-center items-center'>
        <Button/>
      </div>
      <div className='h-[4rem] bg-slate-300'>
        <div className='w-[95%] mx-auto border-t-2 border-t-black flex justify-center items-center px-4'> 
        <p className='text-xl lg:mt-3 text-center'>View the source code on <a href='https://github.com/JollyBolt/Animated-Button-1' className='underline font-bold'>Github</a> and star the repository. </p>
        </div>
      </div>
    </>
  )
}

export default App
