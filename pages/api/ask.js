import { connectDB } from "../../app/util/database";

export default async function List(요청, 응답) {
    if(요청.method == "GET") {
        const client = await connectDB;
        const db = client.db("behind")
        
        let result = await db.collection('ask').find().toArray();
        응답.status(200).json(result)
    }
    // 서버기능 처리 성공시 (200)
    // 서버기능 유저 잘못 (400)
    // 서버기능 서버 잘못 (500)
}