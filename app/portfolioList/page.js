
import Link from "next/link.js";
import { connectDB } from "../util/database.js";
import '../css/portfoliList.css'
import Header from "../components/header.js"
import Footer from "../components/footer.js"

export default async function Portfoliolist() {

    const client = await connectDB;
    const db = client.db("behind")
    
    let result = await db.collection('portfolio').find().sort({order: -1}).toArray();
    JSON.stringify(result)

    return(
        <>  
            <Header/>
            <div className="sec_portfolio">
                <div className="inner_1520">
                    <div className="title_box">
                        <p className="title">OUR PROJECT</p>
                        <div className="typing">
                            <p className="typing_txt">PROGRESS</p>
                            {/* <p className="typing_dot">.</p> */}
                        </div>
                    </div>
                    <div className="contents_box">
                        {
                            result.map((a, i)=> {
                                return(
                                    <div className="list_item" key={i}>
                                        <Link href={"/portfolioDetail/" + result[i]._id}>
                                            <div className="img_box">
                                                <img src={`/images/portfolio/portfolio_list00_pc.png`}/>
                                            </div>
                                        </Link>
                                        <h4 className="list_item--title">{result[i].title}</h4>
                                        <p className="list_item--desc">{result[i].int}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            
        </>
    )
}