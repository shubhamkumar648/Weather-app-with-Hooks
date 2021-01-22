import React from 'react'



const Weather = ({description, city,country,error,temperature}) => {


function matchValues(){

if(description) {

    const weatherDescription = description.split('')
    const keyWords = ['cloudy', 'clouds', 'cloud', 'overcast']
    for(let i = 0; i < weatherDescription.length; i++) {
        if(keyWords.includes(weatherDescription[i])) {
            return <img src='https://media.freestocktextures.com/cache/74/8b/748ba3fe5976d8b03219a64851d2790d.jpg' alt='image-description' />

    }

}
//   console.log(keyWords)

//   console.log(weatherDescription)


}}

    return (
<>
{city && country && <p>{city} ,{country}</p>} 
{temperature && <p>{temperature}°F </p>}

{description && <p> Condition:{description}</p>}


{error && <p>{error}</p>}
{description && matchValues()}




</>

    )

    }





export default Weather