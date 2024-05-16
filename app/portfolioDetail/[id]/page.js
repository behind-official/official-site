import { ObjectId } from "mongodb";
import { connectDB } from "../../util/database.js";

export default async function Portfoliodetail(props) {
    const client = await connectDB;
    const db = client.db("behind")
    
    let result = await db.collection('portfolio').findOne({_id: new ObjectId(props.params.id)})

    console.log(props.params);
    return (
        <div>
            <h4>BHND</h4>
            <h4>{result.clientname}</h4>
            <p>{result.period}</p>
        </div>
    )
}