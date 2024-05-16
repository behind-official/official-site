
import Link from "next/link.js";
import { connectDB } from "./../util/database.js";

export default async function Portfoliolist() {

    const client = await connectDB;
    const db = client.db("behind")
    
    let result = await db.collection('portfolio').find().toArray();
    JSON.stringify(result)
    
    return(
        <div className="list-bg">
            {
                result.map((a, i)=> {
                    return(
                        <div className="list-item" key={i}>
                            <h4>{result[i].title}</h4>
                            <Link href={"/portfolioDetail/" + result[i]._id}>
                                링크
                            </Link>
                            <p>{result[i].int}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}