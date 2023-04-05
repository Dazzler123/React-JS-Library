// import logo from './logo.svg';
import './App.css';
import {FullName} from "./component/FullName";
import {User} from "./component/User";
import {UserDetails} from "./component/UserDetails";
import {ShowUser} from "./component/ShowUser";
import {View} from "./component/View";
import {Array} from "./component/Array";
import {AddMinusView} from "./component/AddMinusView";
import {EffectHookTask} from "./component/EffectHookTask";
import {Routing} from "./component/Routing";
import {ValueColorChange} from "./component/ValueColorChange";
import {TailwindCSSTest} from "./component/tailwindcss/TailwindCSSTest";


function App() {

    // const obj = {
    //     name: "Dasindu",
    //     address: "Gampaha"
    // };
    //
    return (
        // <div className="App">
        //     <h1>HELLO REACT</h1>
        //     <h1>Hello {obj.name}</h1>
        // </div>

        // document.getElementById('body').append(`<FullName/><VehicleTypes/>`)
        <div>
            {/*<h1>Student Table</h1>*/}
            {/*<FullName/>*/}
            {/*<VehicleTypes/>*/}
            {/*<View/>*/}
            {/*<br/>*/}
            {/*<Array/>*/}
            {/*<EventListener/>*/}
            {/*<AddMinusView/>*/}
            {/*<EffectHookTask/>*/}
            {/*<Forms/>*/}
            {/*<Routing/>*/}
            {/*<ValueColorChange/>*/}
            <TailwindCSSTest/>
        </div>
    )

}

export default App;
