import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyBadge from './components/MyBadge';
import MyNav from './components/MyNav';



function App() {
  return (
    <div >
      <MyNav title="Yo!Bookstore"/>
      <MyBadge text="Badge" color="danger" />
     
      
    </div>
  );
}

export default App;
