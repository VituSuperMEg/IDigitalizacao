import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { DefaultLayout } from "../layout/DefaultLayout";
import { TipoDocumentos } from "../pages/TipoDocumentos";

export function Router(){
  return(
    <Routes>
      <Route path="/" element={ <DefaultLayout /> }>
        <Route path="/" element={ <Home /> }/>
        <Route path="/tipo-documentos" element={ <TipoDocumentos /> }/>
      </Route>
    </Routes>
  )
}