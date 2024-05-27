
import Link from "next/link.js";
import { connectDB } from "./../util/database.js";

export default async function Portfoliolist() {

    // const client = await connectDB;
    // const db = client.db("behind")
    
    // let result = await db.collection('portfolio').find().sort({order: -1}).toArray();

    var result = [
        {
            "period":"24.05.01 - 24.05.10",
            "int:":"이것은 이러한 종류의 뭐시기인데 몇출까지 되려나 계속 쭈욱 쓸 수 있으려나 테스트 중, 줄이 길어지면 안되니까 적당히 5줄 이…",
            "url":"www.naver.com",
            "front":"HTML CSS3 SCSS javaScrit jQuery",
            "back":"PHP Mysql MongoDB",
            "design":"Photoshop illustrator Figma",
            "Clientname":"CJ제일제당",
            "title":"[2024삼성 갤럭시 언팩]",
            "order":"1"
        },
        {
            "period":"24.05.01 - 24.05.10",
            "int:":"이것은 이러한 종류의 뭐시기인데 몇출까지 되려나 계속 쭈욱 쓸 수 있으려나 테스트 중, 줄이 길어지면 안되니까 적당히 5줄 이…",
            "url":"www.naver.com",
            "front":"HTML CSS3 SCSS javaScrit jQuery",
            "back":"PHP Mysql MongoDB",
            "design":"Photoshop illustrator Figma",
            "Clientname":"CJ제일제당",
            "title":"[2024삼성 갤럭시 언팩]",
            "order":"1"
        },
        {
            "period":"24.05.01 - 24.05.10",
            "int:":"이것은 이러한 종류의 뭐시기인데 몇출까지 되려나 계속 쭈욱 쓸 수 있으려나 테스트 중, 줄이 길어지면 안되니까 적당히 5줄 이…",
            "url":"www.naver.com",
            "front":"HTML CSS3 SCSS javaScrit jQuery",
            "back":"PHP Mysql MongoDB",
            "design":"Photoshop illustrator Figma",
            "Clientname":"CJ제일제당",
            "title":"[2024삼성 갤럭시 언팩]",
            "order":"1"
        },
        {
            "period":"24.05.01 - 24.05.10",
            "int:":"이것은 이러한 종류의 뭐시기인데 몇출까지 되려나 계속 쭈욱 쓸 수 있으려나 테스트 중, 줄이 길어지면 안되니까 적당히 5줄 이…",
            "url":"www.naver.com",
            "front":"HTML CSS3 SCSS javaScrit jQuery",
            "back":"PHP Mysql MongoDB",
            "design":"Photoshop illustrator Figma",
            "Clientname":"CJ제일제당",
            "title":"[2024삼성 갤럭시 언팩]",
            "order":"1"
        },
        {
            "period":"24.05.01 - 24.05.10",
            "int:":"이것은 이러한 종류의 뭐시기인데 몇출까지 되려나 계속 쭈욱 쓸 수 있으려나 테스트 중, 줄이 길어지면 안되니까 적당히 5줄 이…",
            "url":"www.naver.com",
            "front":"HTML CSS3 SCSS javaScrit jQuery",
            "back":"PHP Mysql MongoDB",
            "design":"Photoshop illustrator Figma",
            "Clientname":"CJ제일제당",
            "title":"[2024삼성 갤럭시 언팩]",
            "order":"1"
        },
        {
            "period":"24.05.01 - 24.05.10",
            "int:":"이것은 이러한 종류의 뭐시기인데 몇출까지 되려나 계속 쭈욱 쓸 수 있으려나 테스트 중, 줄이 길어지면 안되니까 적당히 5줄 이…",
            "url":"www.naver.com",
            "front":"HTML CSS3 SCSS javaScrit jQuery",
            "back":"PHP Mysql MongoDB",
            "design":"Photoshop illustrator Figma",
            "Clientname":"CJ제일제당",
            "title":"[2024삼성 갤럭시 언팩]",
            "order":"1"
        },
        {
            "period":"24.05.01 - 24.05.10",
            "int:":"이것은 이러한 종류의 뭐시기인데 몇출까지 되려나 계속 쭈욱 쓸 수 있으려나 테스트 중, 줄이 길어지면 안되니까 적당히 5줄 이…",
            "url":"www.naver.com",
            "front":"HTML CSS3 SCSS javaScrit jQuery",
            "back":"PHP Mysql MongoDB",
            "design":"Photoshop illustrator Figma",
            "Clientname":"CJ제일제당",
            "title":"[2024삼성 갤럭시 언팩]",
            "order":"1"
        },
        {
            "period":"24.05.01 - 24.05.10",
            "int:":"이것은 이러한 종류의 뭐시기인데 몇출까지 되려나 계속 쭈욱 쓸 수 있으려나 테스트 중, 줄이 길어지면 안되니까 적당히 5줄 이…",
            "url":"www.naver.com",
            "front":"HTML CSS3 SCSS javaScrit jQuery",
            "back":"PHP Mysql MongoDB",
            "design":"Photoshop illustrator Figma",
            "Clientname":"CJ제일제당",
            "title":"[2024삼성 갤럭시 언팩]",
            "order":"1"
        },
        {
            "period":"24.05.01 - 24.05.10",
            "int:":"이것은 이러한 종류의 뭐시기인데 몇출까지 되려나 계속 쭈욱 쓸 수 있으려나 테스트 중, 줄이 길어지면 안되니까 적당히 5줄 이…",
            "url":"www.naver.com",
            "front":"HTML CSS3 SCSS javaScrit jQuery",
            "back":"PHP Mysql MongoDB",
            "design":"Photoshop illustrator Figma",
            "Clientname":"CJ제일제당",
            "title":"[2024삼성 갤럭시 언팩]",
            "order":"1"
        },
        {
            "period":"24.05.01 - 24.05.10",
            "int:":"이것은 이러한 종류의 뭐시기인데 몇출까지 되려나 계속 쭈욱 쓸 수 있으려나 테스트 중, 줄이 길어지면 안되니까 적당히 5줄 이…",
            "url":"www.naver.com",
            "front":"HTML CSS3 SCSS javaScrit jQuery",
            "back":"PHP Mysql MongoDB",
            "design":"Photoshop illustrator Figma",
            "Clientname":"CJ제일제당",
            "title":"[2024삼성 갤럭시 언팩]",
            "order":"1"
        },
        {
            "period":"24.05.01 - 24.05.10",
            "int:":"이것은 이러한 종류의 뭐시기인데 몇출까지 되려나 계속 쭈욱 쓸 수 있으려나 테스트 중, 줄이 길어지면 안되니까 적당히 5줄 이…",
            "url":"www.naver.com",
            "front":"HTML CSS3 SCSS javaScrit jQuery",
            "back":"PHP Mysql MongoDB",
            "design":"Photoshop illustrator Figma",
            "Clientname":"CJ제일제당",
            "title":"[2024삼성 갤럭시 언팩]",
            "order":"1"
        },
        {
            "period":"24.05.01 - 24.05.10",
            "int:":"이것은 이러한 종류의 뭐시기인데 몇출까지 되려나 계속 쭈욱 쓸 수 있으려나 테스트 중, 줄이 길어지면 안되니까 적당히 5줄 이…",
            "url":"www.naver.com",
            "front":"HTML CSS3 SCSS javaScrit jQuery",
            "back":"PHP Mysql MongoDB",
            "design":"Photoshop illustrator Figma",
            "Clientname":"CJ제일제당",
            "title":"[2024삼성 갤럭시 언팩]",
            "order":"1"
        },
        {
            "period":"24.05.01 - 24.05.10",
            "int:":"이것은 이러한 종류의 뭐시기인데 몇출까지 되려나 계속 쭈욱 쓸 수 있으려나 테스트 중, 줄이 길어지면 안되니까 적당히 5줄 이…",
            "url":"www.naver.com",
            "front":"HTML CSS3 SCSS javaScrit jQuery",
            "back":"PHP Mysql MongoDB",
            "design":"Photoshop illustrator Figma",
            "Clientname":"CJ제일제당",
            "title":"[2024삼성 갤럭시 언팩]",
            "order":"1"
        }
    ]
    JSON.stringify(result)

    return(
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
    )
}