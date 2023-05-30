import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { setDataProduct } from './redux/productSlide';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './components/Footer';

function App() {
  const dispatch = useDispatch()
  const productData = useSelector((state)=>state.product)
 
  useEffect(()=>{
 (async()=>{
  const Res = await fetch(`${process.env.REACT_APP_SERVER_DORMIN}/product `)  
  const Resdata = await Res.json()
  console.log(Resdata)
  dispatch(setDataProduct(Resdata))
 })()
  },[])
 
  return (
    <div >   
      <div>
      <Header/>
      <main className='pt-20 bg-slate-100 min-h-[calc(100vh)] '>
          <Outlet/>
      </main>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
