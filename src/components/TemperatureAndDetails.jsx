import React from "react";
import {
    UilArrow,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from "@iconscout/react-unicons";
import {findAllByDisplayValue} from "@testing-library/react";

function TemperatureAndDetails(){
    return (
        <div>
            <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
                <p>Cloudy or whatever</p>
            </div>
            <div className="flex flex-row items-center justify-between text-white py-3">
                <img src="https://cdn-icons-png.flaticon.com/512/146/146182.png"
                     alt=""
                     className="w-20 "/>
                <p className="text-5xl">34&deg;</p>
                <div className="flex flex-col space-y-2">

                    <div className="flex font-light text-sm items-center
                justify-center">
                        <UilTemperature size={18} className="mr-1"/>
                        Real fell:
                        <span className="font-medium ml-1">32&deg;</span>
                    </div>
                    <div className="flex font-light text-sm items-center
                justify-center">
                        <UilTear size={18} className="mr-1"/>
                        Humidity:
                        <span className="font-medium ml-1">65%</span>
                    </div>
                    <div className="flex font-light text-sm items-center
                justify-center">
                        <UilWind size={18} className="mr-1"/>
                        Wind Speed:
                        <span className="font-medium ml-1">11 km/h</span>
                    </div>

                </div>
            </div>

            <div className="flex flex-row justify-center space-x-2
        text-white text-sm">
                <UilSun/>
                <p className="font-light"> Rise:
                    <span className="font-medium ml-1">06:45 AM</span>
                </p>
                <p className="font-light">|</p>
                <UilSunset/>
                <p className="font-light"> Set:
                    <span className="font-medium ml-1">07:35 AM</span>
                </p>
                <p className="font-light">|</p>
                <UilSun/>
                <p className="font-light"> High:
                    <span className="font-medium ml-1">45&deg;</span>
                </p>
                <p className="font-light">|</p>
                <UilSun/>
                <p className="font-light"> Low:
                    <span className="font-medium ml-1">40&deg;</span>
                </p>
            </div>
        </div>


    );
}
export default TemperatureAndDetails