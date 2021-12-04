import { Component } from "react";
import { FilmsList } from "./component/FilmsList";
import { Modal } from "./component/Modal";
// import './App.css';
import films from "./data/films.json";

import {mapper} from './halpers/maper';


class App extends Component {
state = {
films: [...mapper(films)],
img: '',

}
handelOpenMOdel = (img) => {
   this.setState({img: img})
 
}

clearModal = () => {
  this.setState({img: ""})
}

changeStatus = () => {
  
}

render() {
  const {films, img} = this.state
  return (
 <>
 <FilmsList films={films} onClick={this.handelOpenMOdel} />
 {img && <Modal img={img} onClick={this.clearModal}/>}
 </>
  )}
}

export default App;
