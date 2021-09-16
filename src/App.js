import './global'


import Header from './components/header/Header'
import { GlobalStyle } from './global';
import Slideshow from './components/slideshow/Slideshow'
import Infotext from './components/infotext/Infotext';
import Tab from './components/tab/Tab'

function App() {
  return (
   <>
    <GlobalStyle/>
    <Header/>
    <Slideshow></Slideshow>
    <Infotext></Infotext>
    <Tab></Tab>
   </>
  );
}

export default App;
