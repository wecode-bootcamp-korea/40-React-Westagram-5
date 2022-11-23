//router 컴포넌트를 만들고 이를 export 해줄것

import React from "react";
import { BrowserRouter,Routes,Route, Router } from "react-router-dom";
import Main from "./pages/main/components"

function Router () {
   return (
     <BrowserRouter>
      <Routes>
       <Route path="" element={<Main/>} />
      </Routes>
     </BrowserRouter>
    )
}

export default Router;