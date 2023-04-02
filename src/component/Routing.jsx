import { BrowserRouter, Route, Routes} from "react-router-dom";
import {Forms} from "./Forms";
import {Other} from "./Other";
import {Nav} from "./Nav";

export const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                <Nav>
                    <Routes>
                        <Route path="/" element={<Forms/>}/>
                        <Route path="/form" element={<Forms/>}/>
                        <Route path="/other" element={<Other/>}/>
                    </Routes>
                </Nav>
            </BrowserRouter>
        </div>
    )
}