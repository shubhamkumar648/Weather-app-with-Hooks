import React from 'react'


const Form = (props) => {

    return (
        <div>
            hello form

         <form onSubmit={props.getWeather}>
            <label>City</label>
                <input
                    type="text"
                    name="city"
                    placeholder="city"
                    // value={country}
                    // onChange={handleSubmit}
                />
                <label>Country</label>
                <input
                    type="text"
                    name="country"
                    placeholder="country"
                     // value={city}
                    // onChange={handleSubmit}
                />
                    <button>Submit</button>
                    </form>
                </div>
    )


}




export default Form