import "../css/sec_ask.css";

export default function Write() {

    return(
        <div className="sec_ask">
            <div className="inner_1260">
                <h4 className="ask_tit">START A PROJECT 🎉</h4>
                <form action="/api/post/new" method="POST">
                    <ul className="ask_list">
                        <li className="ask_item">
                            <label className="item_tit" for="compayName">회사명 <em className="fc_blue">*</em></label>
                            <input type="text" placeholder="BEHIND" id="companyName" required/>
                        </li>
                        <li className="ask_item">
                            <label className="item_tit" for="managerName">담당자명 <em className="fc_blue">*</em></label>
                            <input type="text" placeholder="홍길동" id="managerName" required/>
                        </li>
                        <li className="ask_item">
                            <label className="item_tit" for="managerEmail">이메일 <em className="fc_blue">*</em></label>
                            <input type="email" placeholder="admin@behind.co.kr" id="managerEmail" required/>
                        </li>
                        <li className="ask_item">
                            <label className="item_tit" for="managerPhone">연락처 <em className="fc_blue">*</em></label>
                            <input type="tel" placeholder="010-1234-5678" id="managerPhone" required/>
                        </li>
                        <li className="ask_item">
                            <span className="item_tit">예산 <em className="fc_blue">*</em></span>
                            <div className="select_box">
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
                            <span className="item_tit">서비스 종류 <em className="fc_blue">*</em></span>
                            <div className="select_box">
                                <select id="budget" className="select">
                                    <option disabled selected>서비스 종류를 선택해주세요.</option>
                                    <option value="웹사이트">웹사이트</option>
                                    <option value="광고영상">광고영상</option>
                                    <option value="뮤직비디오">뮤직비디오</option>
                                </select>
                            </div>
                        </li>
                    </ul>

                    <div className="ask_textarea">
                        <span className="item_tit">문의내용</span>
                        <textarea type="text" placeholder="내용을 입력하세요" className="ask_cont" id="askCont"></textarea>
                    </div>

                    
                    <button type="submit" className="btn_submit">SUBMIT</button>
                </form>
            </div>
        </div>
    )
}
