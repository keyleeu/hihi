import React from 'react';
import './Efirst.css'
import Product from "./../Product/Product";


function Efirst() {
    return (
        <div>
            <div className="profile">
                <p className="name">김연세</p>
                <ul>
                    <li>
                        <p>전화번호</p>
                        <p>010-1234-5678</p>
                    </li>
                    <li>
                        <p>평점</p>

                    </li>
                </ul>
            </div>
            <div className="profile">
                <p className="name">김연세</p>
                <ul>
                    <li>
                        <p>전화번호</p>
                        <p>010-1234-5678</p>
                    </li>
                    <li>
                        <p>평점</p>

                    </li>
                </ul>
            </div>
            <div>
                <Product title="편의점" price="4000" errand_price="4000" />
            </div>
            <input type="button" class="button" value="취소" ></input>

            <input type="button" class="button" value="완료" ></input>
        </div>

    );


}

export default Efirst;
