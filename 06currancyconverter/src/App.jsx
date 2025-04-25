import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Image from './Images/MarketPhoto.jpg'
import useCurrencyInfo from './hocks/useCurrencyInfo'
import  {Inputbox}  from './Compoments/Index.js'

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to)
    setTo(from)

    setConvertedAmount(amount)
    setAmount(convertedAmount)

  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
   <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover
   bg-no-repeat' 
   >
    <div className='w-full'>
      <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg 
      p-5 backdrop-blur-sm
      bg-white/30'>
        <form onSubmit={(e) => {
          e.preventDefault()
          convert()
        }}>
          <div className='w-full mb-1'>
            <Inputbox
            label="from"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            onAmountChange ={(amount) => setAmount(amount)}
            selectedCurrency={from}
            />
          </div>
        </form>
      </div>
    </div>
    <img src={Image} alt="Market" className="absolute bottom-0 left-0 w-full h-auto" />
   </div>
  );
}

export default App
