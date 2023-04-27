import React from 'react';

const CarCard = ({Car}) => {
    // alert(Car);
    return (
        <div className= "Car">


            {/* <div> */}
                {/* alert(Car); */}
                <img className="carItem" src={require(`${Car.src}`)} alt="car"></img>
                <br/>
                <div className="carDetails">

                <div className="carName">{Car.name}</div><br/>
                -{Car.engine}<br/>
                -{Car.odometer}<br/>
                <br/>
                <div className="carPrice">{Car.price}</div>
                <br/>

                </div>
                


            {/* </div> */}

        </div>


    );
}

export default CarCard;