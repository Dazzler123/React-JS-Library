import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Forms} from "./Forms";
import {Other} from "./Other";
import {RoutingWithReactBootstrap} from "./RoutingWithReactBootstrap";

export const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                <RoutingWithReactBootstrap/>
                <Routes>
                    {/*<Route path="/" element={<Forms/>}/>*/}
                    <Route path="/form" element={<Forms/>}/>
                    <Route path="/other" element={<Other/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}