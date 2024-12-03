import Link from "next/link"
import "../css/footer.css"

export default function Header() {
    return(
        <header>
            <div className="inner_1520">
                <Link href={'/'} className="header_desc">
                    <img className="header_logo" src="./../images/header_logo.svg" alt="BHND로고"/>
                </Link>
                <Link href={'../portfolioList'} className="header_desc">Portfolio</Link>
            </div>
        </header>
    )
}