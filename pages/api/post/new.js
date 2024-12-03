import { connectDB } from "./../../../app/util/database.js";

export default async function handler(req, res) {
    if (req.method == "POST") {
        if (req.body.title == '') {
            return res.status(500).json('제목쓰셈')
        }
        const client = await connectDB;
        const db = client.db("behind")
        let result = await db.collection('ask').insertOne(req.body) //insertOne DB에 전송
        return res.status(200).redirect('/')

    }
}