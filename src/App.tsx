
import { Router } from "./routes/Router";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from 'react-router-dom';

export default function App () {
  return (
    <BrowserRouter>
     <Router />
     <GlobalStyle />
    </BrowserRouter>
  )
}