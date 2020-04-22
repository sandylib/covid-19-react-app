/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import cn from 'classnames';
import {counties} from '../../constants/applicationConstants';
import './Home.css';
import covid19 from '../../assets/covid19.jpeg';

export const Home = () => {
  const [search, setSearch] = useState(false);
  const [country, setCountry] = useState('');
  const [error, setError] = useState(false);
  const history = useHistory();
  const handleClick= () =>{
     if(valid(country))
        history.push(`/reporter/${country}`);
  }


  const valid = (country) => country === '' || counties.find((e, idx) => e.name.toLowerCase() === country.toLowerCase())


  useEffect(()=>{
    const downHandler = (e) => {
        if(e.keyCode === 13){
          if(valid(country))
           history.push(`/reporter/${country}`);
         else
           setError(true);
        }
    }
    window.addEventListener('keydown', downHandler);
    return () =>  window.removeEventListener('keydown', downHandler);

  },[country, history])


  return (
    <div className="container">
        <div className="title">
          <img src={covid19} alt={'covid19 images'} />
           <h2>Search <span className={cn({'errTxt': error})}>country {error ? 'mis typed': ''}</span> effect by COVID-19 </h2>
        </div>

        <div className={cn({'searchbox' : true, 'active': search, 'err': error} )} onTouchStart ={()=>setSearch(true)} onMouseMove={()=>setSearch(true)}>
            <input type="text" id="search" value={country} onChange={(e)=>{setError(false); setCountry(e.target.value)}} placeholder="Enter country eg: australia" />
            <a><i className="fa fa-search"></i></a>
        </div>
    </div>
  )
}
