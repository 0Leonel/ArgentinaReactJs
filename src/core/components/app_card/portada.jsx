import AppCompra from './appCompra';
import { DESCRIPTION } from './description';

const AppPortada = (props) => {
  const item = props.data;

  const ingredientKeys = Object.keys(item[0]).filter((key) =>key.startsWith('strIngredient'));
  const measureKeys = Object.keys(item[0]).filter((key) => key.startsWith('strMeasure'));
  const cocktailRecipe = ingredientKeys.map((ingredientKey, index) => ({
    ingredient: item[0][ingredientKey],
    measure: item[0][measureKeys[index]],
  }));


  const hasIngredients = cocktailRecipe.some((ingredient) => ingredient.ingredient !== null);

  return (
    <div className=''>
      <div className='grid items-center gap-4 lg:grid-cols-2 justify-center rounded-lg shadow-lg'>
        <a href={`#${item[0].strDrink}`}>
          <img src={item[0].strDrinkThumb} alt={item[0].strDrink} className='object-cover rounded-lg' />
        </a>
        <div>
          <div className='flex flex-row justify-start items-center gap-6 pb-3'>
          <h3 className='text-md text-red-600 font-semibold'>{item[0].strCategory}</h3>
          <p className='text-sm text-gray-600'>Ultima modificación: <span className='italic'>{item[0].dateModified.toString().slice(0, 10)}</span> </p>

          </div>
          <div className='flex flex-row justify-start items-center gap-6 pb-3'>
          <h1 className='text-2xl text-[#25383b] font-bold font-sans'>{item[0].strDrink}</h1>
          <p className='text-sm text-gray-500 font-bold'>{item[0].strGlass}</p>
          {/* <p className='text-sm'>{item[0].strAlcoholic}</p> */}

          </div>
          {hasIngredients ? (
            <div>
              <p className='text-md text-gray-700 font-mono'>Ingredientes:</p>
              <ul>
                {cocktailRecipe.map((ingredient, index) => (
                  <li key={index} className='font-mono'> {ingredient.measure}  {ingredient.ingredient}</li>
                ))}
              </ul>
            </div>
          ) :  null}
          <p>{item[0].strInstructionsIT}</p>
          <p>{item[0].strInstructionsDE}</p>

          {item[0].strInstructions}
          
        </div>
        <div className='grid col-span-2 justify-center items-center pb-3'>
          <AppCompra
            price={item[0].idDrink}
            title={item[0].strDrink}
            description={item[0].strInstructions ? item[0].strInstructions : DESCRIPTION}
            imagen={item[0].strDrinkThumb}
          />
        </div>
      </div>
    </div>
  );
};

export default AppPortada;
