import './App.css'
import Button from './components/button'
import Footer from './components/footer'
import Header from "./components/header/index"
import Section1 from './components/main/Section1/index'
import Section2 from './components/main/Section2'

export default function App() {


  return <>
    <Header />
    <main>
    <Section1 />
    <Section2 />
    </main>
    <Button />
    <Footer />
  </>

    
  
}

