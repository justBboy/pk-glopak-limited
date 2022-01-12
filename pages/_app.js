import '../styles/globals.css'
import {AnimatePresence} from "framer-motion";
import { StoreProvider } from '../store/store';
import reducer, { initialState } from '../store/reducer';

function MyApp({ Component, pageProps }) {
  return(
    <StoreProvider initialState={initialState} reducer={reducer}>
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
    </StoreProvider>
  ) 
}

export default MyApp
