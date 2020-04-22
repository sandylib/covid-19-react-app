import React, {useState, useEffect} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { fetchData } from '../../services/';
import { Cards, Chart} from '../../components/';

import goBack from '../../assets/back.svg'
import styles from './Reporter.module.css';

export const Reporter = () => {
  const [fetching, setFetching] = useState(true);
  const [data, setData] = useState({});
  const { country } = useParams();
  const history = useHistory();

  useEffect(() => {
     const fetchAPI = async() => {
      const data = await fetchData(country);
      setFetching(false);
      setData(data);
    };
    fetchAPI();
  },[country])


  return (
    <div className={styles.container}>
      {fetching && <div>in progress...</div>}
      {!fetching && (
        <React.Fragment>
           <img src={goBack} onClick={()=> history.push('/')} alt={'go back'} />
           <Chart data={data} country={country} />
           <Cards data={data} />
        </React.Fragment>)}
    </div>
  )
}
