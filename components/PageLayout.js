import { Container } from 'react-bootstrap'
import BlogNavbar from './BlogNavbar'
import Footer from './Footer'
import { useTheme } from '../providers/ThemeProvider';

export default function PageLayout({children, className}) {

   const { theme, toggleTheme } = useTheme();

   return (
      <div className={theme.type && `${theme.type}-theme`}>
         
         <Container>
            <BlogNavbar theme={theme} toggleTheme={toggleTheme} />

            <div className={`main-content ${className}`}>
               {children}
            </div>

            <Footer />
         </Container>
         <style jsx global>{`
         html, body{
            background-color: ${theme.backgroundColor};
            color: ${theme.fontColor};
            transition: color .2s ease-out, background-color .2s ease-out;
         }
         `}            
         </style>
      </div>
   )
}
