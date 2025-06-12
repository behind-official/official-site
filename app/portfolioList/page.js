
import { connectDB } from "../util/database.js";
import '../css/portfoliList.css'
import Header from "../components/header.js"
import List from "../components/listcompo.js"

export default async function Portfoliolist() {

    const client = await connectDB;
    const db = client.db("behind")

    const AllResult = await db.collection('portfolio').find().sort({order: -1}).toArray();
    const DepubleResult = await db.collection('portfolio').find({tabID: "DP"}).sort({order: -1}).toArray();
    const PubleResult = await db.collection('portfolio').find({tabID: "publ"}).sort({order: -1}).toArray();
    const TemResult = await db.collection('portfolio').find({tabID: "tem"}).sort({order: -1}).toArray();


    

    return(
        <>  
            <Header/>
            <List AllResult={AllResult} DepubleResult={DepubleResult} PubleResult={PubleResult} TemResult={TemResult}/>
        </>
    )
}