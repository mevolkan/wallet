
import './App.css'
import Navigation from './components/navbar'
import NavDrawer from './components/navdrawer'
import TimeFilter from './components/timefilter'
import BuySell from './components/buysell'

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
