<template>
  <headerComponent></headerComponent>
         <section id="container">
            <!-- page-contract -->
            <div class="container page-contract">
                <div class="title_area">계약 관리</div>
                <div class="search_wrap">
                    <div class="search_area">
                        <dl>
                            <dt>구분</dt>
                            <dd>
                                <div class="chk_area">  
                                    <input type="checkbox" name="ch01" id="ch01_1">
                                    <label for="ch01_1"><i class="ico_chk"></i>전체</label>
                                </div>
                                <div class="chk_area">
                                    <input type="checkbox" name="ch01" id="ch01_2">
                                    <label for="ch01_2"><i class="ico_chk"></i>계약진행</label>
                                </div>
                                <div class="chk_area">
                                    <input type="checkbox" name="ch01" id="ch01_3">
                                    <label for="ch01_3"><i class="ico_chk"></i>계약</label>
                                </div>
                                <div class="chk_area">
                                    <input type="checkbox" name="ch01" id="ch01_4">
                                    <label for="ch01_4"><i class="ico_chk"></i>계약완료</label>
                                </div>
                            </dd>
                            <dt class="right_area">주소</dt>
                            <dd  class="right_area pt0">
                                <select name="option1" id="option1">
                                    <option value="option1">전체</option>
                                </select>
                            </dd>
                        </dl>
                        <dl>
                            <dt>키워드</dt>
                            <dd>
                                <div class="table_row">
                                    <div class="radio_area">
                                        <input type="radio" name="radio01" id="radio01_1">
                                        <label for="radio01_1"><i class="ico_radio"></i>상호명</label>
                                    </div>
                                    <div class="radio_area">
                                        <input type="radio" name="radio01" id="radio01_2">
                                        <label for="radio01_2"><i class="ico_radio"></i>고객명</label>
                                    </div>
                                </div>
                                <div class="mt10 table_row">
                                    <div class="radio_area">
                                        <input type="radio" name="radio01" id="radio01_3">
                                        <label for="radio01_3"><i class="ico_radio"></i>회원번호</label>
                                    </div>
                                    <input type="text" name="txt01" id="txt01" style="width: 180px;">
                                    <label for="txt01" class="blind"></label>
                                </div>
                            </dd>
                            <dt class="right_area">기간</dt>
                            <dd class="right_area">
                                <div class="table_row">
                                    <div class="radio_area">
                                        <input type="radio" name="radio02" id="radio02_1">
                                        <label for="radio02_1"><i class="ico_radio"></i>상담접수일</label>
                                    </div>
                                    <div class="radio_area">
                                        <input type="radio" name="radio02" id="radio02_2">
                                        <label for="radio02_2"><i class="ico_radio"></i>계약일</label>
                                    </div>
                                </div>
                                <div class="mt10 table_row">
                                    <input type="text" placeholder="시작일" class="ico_date" name="period01" id="datepicker1">
                                        <span class="hypen">~</span>
                                        <input type="text" placeholder="종료일" class="ico_date" name="period01" id="datepicker2">
                                </div>
                            </dd>
                        </dl>
                    </div>
                    <div class="btn_area">
                        <button type="button" class="btn">검색</button>
                    </div>
                </div><!-- search_wrap -->
                <div class="list_wrap">
                    <div class="result_box">
                        <p class="total">총 <span class="main_color">00</span>건</p>
                        <div class="btn-box">
                            <a href="#" class="btn btn_line"><i class="icon_dl"></i> 엑셀 다운로드</a>
                        </div>
                    </div>
                    <div class="table_list">
                        <table>
                            <caption>검색결과</caption>
                            <colgroup>
                                <col style="width:7.5%;">
                                <col style="width:13%;">
                                <col style="width:8%;">
                                <col style="width:12.4%;">
                                <col style="width:8%;">
                                <col style="width:11.8%;">
                                <col style="width:6%;">
                                <col style="width:15.6%;">
                                <col style="width:5.2%;">
                                <col>
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col">번호</th>
                                    <th scope="col">상담/계약번호</th>
                                    <th scope="col">구분</th>
                                    <th scope="col">등록개월</th>
                                    <th scope="col">잔여개월</th>
                                    <th scope="col">상호명</th>
                                    <th scope="col">고객명</th>
                                    <th scope="col">연락처</th>
                                    <th scope="col">주소</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>20</td>
                                    <td class="align_l"><a href="#" class="link">C0000000</a></td>
                                    <td><span class="state">상담완료</span></td>
                                    <td class="c_grey">6개월</td>
                                    <td class="c_grey">6개월</td>
                                    <td>착한낙지</td>
                                    <td>홍길동</td>
                                    <td>010-0000-0000</td>
                                    <td>서울시</td>
                                    <td class="btn_area"><button type="button" class="btn">신규계약</button></td>
                                </tr>
                                <tr>
                                    <td>19</td>
                                    <td class="align_l"><a href="#" class="link">C0000000</a></td>
                                    <td><span class="state ico2">계약완료</span></td>
                                    <td class="c_grey">-</td>
                                    <td class="c_grey">24개월</td>
                                    <td>착한낙지</td>
                                    <td>홍길동</td>
                                    <td>010-0000-0000</td>
                                    <td>서울시</td>
                                    <td class="btn_area"><button type="button" class="btn">신규계약</button></td>
                                </tr>
                                <tr>
                                    <td>18</td>
                                    <td class="align_l"><a href="#" class="link">C0000000</a></td>
                                    <td><span class="state ico3">갱신-2차</span></td>
                                    <td class="c_grey">-</td>
                                    <td class="c_grey">-</td>
                                    <td>착한낙지</td>
                                    <td>홍길동</td>
                                    <td>010-0000-0000</td>
                                    <td>00시</td>
                                    <td class="btn_area"><button type="button" class="btn btn_line">갱신계약</button></td>
                                </tr>
                                <tr>
                                    <td>16</td>
                                    <td class="align_l"><a href="#" class="link">C0000000</a></td>
                                    <td><span class="state ico4">계약진행</span></td>
                                    <td class="c_grey">-</td>
                                    <td class="c_grey">-</td>
                                    <td>착한낙지</td>
                                    <td>홍길동</td>
                                    <td>010-0000-0000</td>
                                    <td>00시</td>
                                    <td class="btn_area"><button type="button" class="btn btn_line">갱신계약</button></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td class="align_l"><a href="#" class="link">C0000000</a></td>
                                    <td><span class="state">상담완료</span></td>
                                    <td class="c_grey">-</td>
                                    <td class="c_grey">-</td>
                                    <td>착한낙지</td>
                                    <td>홍길동</td>
                                    <td>010-0000-0000</td>
                                    <td>부산시</td>
                                    <td class="btn_area"><button type="button" class="btn btn_line">갱신계약</button></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td class="align_l"><a href="#" class="link">C0000000</a></td>
                                    <td><span class="state">상담완료</span></td>
                                    <td class="c_grey">-</td>
                                    <td class="c_grey">-</td>
                                    <td>착한낙지</td>
                                    <td>홍길동</td>
                                    <td>010-0000-0000</td>
                                    <td>부산시</td>
                                    <td class="btn_area"><button type="button" class="btn">신규계약</button></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td class="align_l"><a href="#" class="link">C0000000</a></td>
                                    <td><span class="state">상담완료</span></td>
                                    <td class="c_grey">6개월</td>
                                    <td class="c_grey">6개월</td>
                                    <td>착한낙지</td>
                                    <td>홍길동</td>
                                    <td>010-0000-0000</td>
                                    <td>서울시</td>
                                    <td class="btn_area"><button type="button" class="btn">신규계약</button></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td class="align_l"><a href="#" class="link">C0000000</a></td>
                                    <td><span class="state s5">미계약</span></td>
                                    <td class="c_grey">6개월</td>
                                    <td class="c_grey">6개월</td>
                                    <td>착한낙지</td>
                                    <td>홍길동</td>
                                    <td>010-0000-0000</td>
                                    <td>서울시</td>
                                    <td class="btn_area"><button type="button" class="btn">신규계약</button></td>
                                </tr>
                                <tr>
                                    <td>01</td>
                                    <td class="align_l"><a href="#" class="link">C0000000</a></td>
                                    <td><span class="state s6">추가계약</span></td>
                                    <td class="c_grey">6개월</td>
                                    <td class="c_grey">6개월</td>
                                    <td>착한낙지</td>
                                    <td>홍길동</td>
                                    <td>010-0000-0000</td>
                                    <td>서울시</td>
                                    <td class="btn_area"><button type="button" class="btn">신규계약</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="pagination-area">
                        <a href="#" class="prev">이전 페이지</a>
                        <a href="#">1</a>
                        <a href="#" class="on">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">5</a>
                        <a href="#" class="next">다음 페이지</a>
                    </div>
                </div><!-- list_wrap -->
            </div><!-- wrap -->
        </section>
    <GlobalComponent></GlobalComponent>
    <p>app.vue</p>
</template>

<script>
import GlobalComponent from './components/global-component.vue'
import headerComponent from './components/header.vue'
  export default {
    name: 'globalComponent',
    components: {GlobalComponent, headerComponent}
  }
</script>
