import 'styles/main.scss'
import { library, config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faBorderAll, faList, faSortNumericDown, faSortNumericUp, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { ThemeProvider } from 'providers/ThemeProvider';

config.autoAddCss = false;
library.add(
  faMoon,
  faSun,
  faBorderAll, 
  faList, 
  faSortNumericDown, 
  faSortNumericUp);

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )  
}

export default MyApp
