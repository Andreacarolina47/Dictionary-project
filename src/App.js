import './App.css';
import Dictionary from "./Dictionary";
import Footer from "./Footer";
import image from "./img/pinkpaper.jpg"


export default function App() {
  return (
    <div className="App" style={{ backgroundImage:`url(${image})`, backgroundRepeat:"no-repeat", backgroundSize:"cover",}}>
      <h1>What word do you want to look up?</h1>
      <Dictionary/>
      <Footer />
    </div>
    
  );
}


