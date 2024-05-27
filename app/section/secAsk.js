import "../css/sec_ask.css";

export default function Write() {

    return(
        <div className="sec_ask">
            <h4 className="ask_tit">START A PROJECT 🎉</h4>
            <form action="/api/post/new" method="POST">
                <ul className="ask_list">
                    <li className="ask_item">
                        <label className="label" for="compayName">회사명 *</label>
                        <input type="text" placeholder="BEHIND" id="companyName" required/>
                    </li>
                    <li className="ask_item">
                        <label className="label" for="managerName">담당자 *</label>
                        <input type="text" placeholder="Eastway Hong" id="managerName" required/>
                    </li>
                    <li className="ask_item">
                        <label className="label" for="managerEmail">이메일 *</label>
                        <input type="email" placeholder="admin@behind.co.kr" id="managerEmail" required/>
                    </li>
                    <li className="ask_item">
                        <label className="label" for="managerPhone">연락처 *</label>
                        <input type="tel" placeholder="010-****-****" id="managerPhone" required/>
                    </li>
                    <li className="ask_item">
                        <div className="select_box">
                            <label for="budget">예산 *</label>
                            <select id="budget" className="select">
                                <option disabled selected>예산을 선택해주세요.</option>
                                <option value="500만원 이하">500만원 이하</option>
                                <option value="400만원 이하">400만원 이하</option>
                                <option value="300만원 이하">300만원 이하</option>
                                <option value="200만원 이하">200만원 이하</option>
                                <option value="100만원 이하">100만원 이하</option>
                            </select>
                        </div>
                    </li>
                    <li className="ask_item">
                        <div className="select_box">
                            <label for="budget">서비스 종류 *</label>
                            <select id="budget" className="select">
                                <option value="웹사이트">웹사이트</option>
                                <option value="광고영상">광고영상</option>
                                <option value="뮤직비디오">뮤직비디오</option>
                            </select>
                        </div>
                    </li>
                    <li className="ask_item">
                        <label for="askCont">문의내용</label>
                        <input type="text" placeholder="내용을 입력하세요" id="askCont"/>
                    </li>
                </ul>
                
                <button type="submit" className="btn_submit">SUBMIT</button>
            </form>
        </div>
    )
}
