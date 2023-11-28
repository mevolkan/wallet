
import './App.css'
import BuySell from './components/buysell'
import Navigation from './components/navbar'
import NavDrawer from './components/navdrawer'
import TimeFilter from './components/timefilter'
import Currency from './components/currency'

function App() {


  return (
    <>
      <Navigation />
      <Currency />
      <TimeFilter />
      <BuySell />
      <NavDrawer />
    </>
  )
}

export default App
