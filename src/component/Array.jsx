export const Array = () => {
    const carData = [
        {
            make : "Mercedes",
            year : "2018"
        },
        {
            make : "Toyota",
            year : "2019"
        },
        {
            make : "Nissan",
            year : "2017"
        },
        {
            make : "Suzuki",
            year : "2022"
        }
    ]

    return carData.map((data) => {
        <div>
            <ul>
                <li>{data.make}</li>
                <li>{data.year}</li>
            </ul>
        </div>
    });
}