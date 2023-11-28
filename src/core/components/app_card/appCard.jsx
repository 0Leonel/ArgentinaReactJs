import { Cards } from './Cards';
import axios from 'axios'
import { useEffect,useState } from 'react';
import AppSpiner from '../appSpiner/appSpinner';
import './style.css';
import AppPortada from './portada';
const delay = (ms) => new Promise((res) => setTimeout(res, 2000));
const AppCard = () => {
const [data, setData] = useState({
    data1: [],
    loading1: true,
    error1: false,

    data2: [],
    loading2: true,
    error2: false,

    data3: [],
    loading3: true,
    error3: false,

    data4: [],
    loading4: true,
    error4: false,

    data5: [],
    loading5: true,
    error5: false,

    data6: [],
    loading6: true,
    error6: false,

    data7: [],
    loading7: true,
    error7: false,

    data8: [],
    loading8: true,
    error8: false,
});


const fetchData = async (url, setDataKey) => {

    try {
        // await delay(500);
      const response = await axios.get(url);
      setData((prevData) => ({ ...prevData, [setDataKey]: response.data }));
    } catch (error) {
      console.error(error);
      setData((prevData) => ({ ...prevData, [`error${setDataKey.charAt(setDataKey.length - 1)}`]: true }));
    }finally{
        setData((prevData) => ({ ...prevData, [`loading${setDataKey.charAt(setDataKey.length - 1)}`]: false }));

    }
  };
useEffect(() => {
    fetchData('https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass', 'data1');
    fetchData('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic', 'data2');
    fetchData('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic', 'data3');
    fetchData('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka', 'data4');
    fetchData('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin', 'data5');
    fetchData('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Tequila', 'data6');
    fetchData('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Whisky', 'data7');
    fetchData('https://www.thecocktaildb.com/api/json/v1/1/random.php', 'data8');
}, [])

  return (<>
    
    <div className='w-full place-content-center grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] pb-20 gap-6 bg-gray-200'>
       <div className='col-span-3'>

        {data.loading8 ? <AppSpiner/> : <AppPortada data={data.data8.drinks}/>}
        {data.error1 ? <p>Error</p> : null}
       </div>

        {/* {JSON.stringify(data.data2,null,2)} */}


        {data.loading1 ? <AppSpiner/> : <Cards data={data.data1.drinks}/>}
        {data.error1 ? <p>Error</p> : null}

        {data.loading2 ? <AppSpiner/> : <Cards data={data.data2.drinks}/>}
        {data.error2 ? <p>Error</p> : null}

        {data.loading3 ? <AppSpiner/> : <Cards data={data.data3.drinks}/>}
        {data.error3 ? <p>Error</p> : null}

        {data.loading4 ? <AppSpiner/> : <Cards data={data.data4.drinks}/>}
        {data.error4 ? <p>Error</p> : null}

        {data.loading5 ? <AppSpiner/> : <Cards data={data.data5.drinks}/>}
        {data.error5 ? <p>Error</p> : null}

        {data.loading6 ? <AppSpiner/> : <Cards data={data.data6.drinks}/>}
        {data.error6 ? <p>Error</p> : null}

        {data.loading7 ? <AppSpiner/> : <Cards data={data.data7.drinks}/>}
        {data.error7 ? <p>Error</p> : null}
    </div>
  </>
  )
}

export default AppCard;