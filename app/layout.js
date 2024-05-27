import "./globals.css";
import "./css/reset.css";
import "./css/sec_portfolio.css";


export default function RootLayout({ children }) {

  return (
    <html lang="en">
        <body className='sec_project_wrap'>
            {/* 헤더 */}
            <header>
                <div className="inner_1520">
                <img className="header_logo" src="./../images/header_logo.svg" title="BHND로고"/>
                <p className="header_desc">Portfolio</p>
                </div>
            </header>

            {/* 메인 */}
            {children} 

            {/* 풋터 */}
            <footer>
                <div className="banner_area">
                    <div className="banner_list banner_list--01">
                        <div className="list_text original">
                            <p>WELCOME</p>
                            <img src="./../images/footer_ico.svg"></img>
                            <p>OUR AGENCY</p>
                            <img src="./../images/footer_ico.svg"></img>
                            <p>INNOVATION</p>
                            <img src="./../images/footer_ico.svg"></img>
                            <p>JOINS FORCES</p>
                            <img src="./../images/footer_ico.svg"></img>
                            <p>WITH EXPERTISE</p>
                            <img src="./../images/footer_ico.svg"></img>
                            <p>PROGRESS</p>
                            <img src="./../images/footer_ico.svg"></img>
                            <p>COLLABORATION</p>
                            <img src="./../images/footer_ico.svg"></img>
                        </div>
                        <div className="list_text clone">
                            <p>WELCOME</p>
                            <img src="./../images/footer_ico.svg"></img>
                            <p>OUR AGENCY</p>
                            <img src="./../images/footer_ico.svg"></img>
                            <p>INNOVATION</p>
                            <img src="./../images/footer_ico.svg"></img>
                            <p>JOINS FORCES</p>
                            <img src="./../images/footer_ico.svg"></img>
                            <p>WITH EXPERTISE</p>
                            <img src="./../images/footer_ico.svg"></img>
                            <p>PROGRESS</p>
                            <img src="./../images/footer_ico.svg"></img>
                            <p>COLLABORATION</p>
                            <img src="./../images/footer_ico.svg"></img>
                        </div>
                    </div>
                    <div className="banner_list banner_list--02">
                    <div className="list_text original">
                            <p>WELCOME</p>
                            <p>OUR AGENCY</p>
                            <p>INNOVATION</p>
                            <p>JOINS FORCES</p>
                            <p>WITH EXPERTISE</p>
                            <p>PROGRESS</p>
                            <p>COLLABORATION</p>
                        </div>
                        <div className="list_text clone">
                            <p>WELCOME</p>
                            <p>OUR AGENCY</p>
                            <p>INNOVATION</p>
                            <p>JOINS FORCES</p>
                            <p>WITH EXPERTISE</p>
                            <p>PROGRESS</p>
                            <p>COLLABORATION</p>
                        </div>

                    </div>
    
                </div>
                <div className="inner_1520">
                    <div className="contact_area">
                       
                    </div>
                    <div className="company_info">

                    </div>
                </div>  
            </footer>
        </body>
    </html>
  );
}
