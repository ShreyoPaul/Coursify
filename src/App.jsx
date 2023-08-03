import './App.css'
import Navbar from './components/Navbar'
import Bodysec1 from './components/Bodysec1'
import Footer from './components/Footer'
import Bodysec2 from './components/Bodysec2'

function App() {

  return (
    <>
      <div className='bg'>
        <Navbar />
        <Bodysec1 />
      </div>
      <Bodysec2 />
      <Footer />

    </>
  )
}

export default App
