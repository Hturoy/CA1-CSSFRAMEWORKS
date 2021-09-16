import './global'


import Header from './components/header/Header'
import { GlobalStyle } from './global';
import Slideshow from './components/slideshow/Slideshow'

function App() {
  return (
   <>
    <GlobalStyle/>
    <Header/>
    <Slideshow></Slideshow>
   </>
  );
}

export default App;
