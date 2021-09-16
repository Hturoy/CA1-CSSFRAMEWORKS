import './global'


import Header from './components/header/Header'
import { GlobalStyle } from './global';
import Slideshow from './components/slideshow/Slideshow'
import Infotext from './components/infotext/Infotext';

function App() {
  return (
   <>
    <GlobalStyle/>
    <Header/>
    <Slideshow></Slideshow>
    <Infotext></Infotext>
   </>
  );
}

export default App;
