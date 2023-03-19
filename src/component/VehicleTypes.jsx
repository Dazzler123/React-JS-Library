export const VehicleTypes = () => {
    const obj = {
        model: "CLA 200",
        make: "Mercedes Benz"
    };

    return (
        <div className="App">
            <h1>Vehicle :  {obj.make + ' ' + obj.model}</h1>
        </div>
    );
};