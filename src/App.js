import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div class="h-auto mx-auto max-w-full min-h-screen w-[425px] flex justify-center items-center">


    <div class=" mx-auto max-w-full  w-[425px]" >
              <Header></Header>
              <Main/>
              <Footer></Footer>
   </div>

</div>
  );
}

export default App;
