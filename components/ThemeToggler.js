import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ThemeToggler({theme, toggleTheme}) {
   return (
      <div className={`theme-toggler theme-toggler_${theme.type}`} role="button" onClick={toggleTheme}>         
         <span className="theme-toggler__icon">
            <FontAwesomeIcon icon="sun"/>
         </span>
         <span className="theme-toggler__indicator"></span>
         <span className="theme-toggler__icon">
            <FontAwesomeIcon icon="moon" inverse/>
         </span>
      </div>
   )
}