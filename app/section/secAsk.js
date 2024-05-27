import "../css/sec_ask.css";

export default function Write() {

    return(
        <div className="sec_ask">
            <h4 className="ask_tit">START A PROJECT 🎉</h4>
            <form action="/api/post/new" method="POST">
                <ul className="ask_list">
                    <li className="ask_item">
                        <label for="compayName">회사명 *</label>
                        <input type="text" id="companyName" required/>
                    </li>
                    <li className="ask_item">
                        <label for="managerName">담당자 *</label>
                        <input type="text" id="managerName" required/>
                    </li>
                    <li className="ask_item">
                        <label for="managerEmail">이메일 *</label>
                        <input type="email" id="managerEmail" required/>
                    </li>
                    <li className="ask_item">
                        <label for="managerPhone">연락처 *</label>
                        <input type="tel" id="managerPhone" required/>
                    </li>
                    <li className="ask_item">
                        <lable for="budget">예산 *</lable>
                        <select id="budget">
                            <option value="500">500만원 이하</option>
                            <option value="400">400만원 이하</option>
                            <option value="300">300만원 이하</option>
                            <option value="200">200만원 이하</option>
                            <option value="100">100만원 이하</option>
                        </select>
                    </li>
                    <li className="ask_item">
                        <lable for="budget">서비스 종류 *</lable>
                        <select id="budget">
                            <option value="웹사이트">웹사이트</option>
                            <option value="광고영상">광고영상</option>
                            <option value="뮤직비디오">뮤직비디오</option>
                        </select>
                    </li>
                    <li className="ask_item">
                        <lable for="askCont">문의내용</lable>
                        <input type="text" id="askCont"/>
                    </li>
                </ul>
                
                <button type="submit">버튼</button>
            </form>
        </div>
    )
}
