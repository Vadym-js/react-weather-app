import React from "react";

function TopButtons() {
    const cities = [
        {
            id: 1,
            title: 'Kiev'
        },
        {
            id: 2,
            title: 'London'
        },
        {
            id: 3,
            title: 'Paris'
        },
        {
            id: 4,
            title: 'Tokyo'
        },
        {
            id: 5,
            title: 'Toronto'
        }
    ]
    return <div className=" flex items-center justify-around my-6">
        {cities.map((city) => (
            <button key={city.id} className="text-white text-lg font-medium m">{city.title}</button>
        ) )}
    </div>


}
export default TopButtons