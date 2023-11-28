
import './App.css'
import BuySell from './components/buysell'
import Navigation from './components/navbar'
import NavDrawer from './components/navdrawer'
import TimeFilter from './components/timefilter'


function App() {


  return (
    <>
      <Navigation />
      
      <TimeFilter />
      <BuySell />
      <NavDrawer />
    </>
  )
}

export default App
