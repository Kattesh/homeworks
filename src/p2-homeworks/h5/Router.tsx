import React from 'react'
import {Route, Routes} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";



function Router() {
    return (
        <div>
                <Routes>
                    <Route path='/' element='/PreJunior'/>
                    <Route path='/PreJunior' element={ <PreJunior/>}/>
                    <Route path='/Junior' element={ <Junior/>}/>
                    <Route path='/JuniorPlus' element={ <JuniorPlus/>}/>
                    <Route  element={<Error404/>}/>
                </Routes>

        </div>
    )
}

export default Router
