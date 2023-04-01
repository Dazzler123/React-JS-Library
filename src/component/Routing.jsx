import { BrowserRouter, Route, Routes} from "react-router-dom";
import {Forms} from "../component/Forms";
import {Other} from "./Other";
import {Nav} from "./Nav";

export const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                <Nav>
                    <Routes>
                        <Route path="/" element={<form/>}/>
                        <Route path="/form" element={<form/>}/>
                        <Route path="/other" element={<Other/>}/>
                    </Routes>
                </Nav>
            </BrowserRouter>
        </div>
    )
}