import "./globals.css";
import "./css/reset.css";
import "./css/sec_portfolio.css";
import Header from './section/header.js'
import Footer from './section/footer.js'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className='sec_project_wrap'>
            {/* 헤더 */}
            <Header/>

            {/* 메인 */}
            {children} 

            {/* 풋터 */}
            <Footer/>
        </body>
    </html>
  );
}
