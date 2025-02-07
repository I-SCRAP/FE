import React from 'react';
import { useSelector } from 'react-redux';
import CustomSVG1 from '../CustomSVG/CustomSVG1.js';
import CustomSVG2 from '../CustomSVG/CustomSVG2.js';
import CustomSVG3 from '../CustomSVG/CustomSVG3.js';
import CustomSVG4 from '../CustomSVG/CustomSVG4.js';
import CustomSVG5 from '../CustomSVG/CustomSVG5.js';
import CustomSVG6 from '../CustomSVG/CustomSVG6.js';
import './CardBackLayoutRender.css';  // CSS 파일을 따로 생성

export default function CardBackLayoutRender() {
    const selectedLayout = useSelector((state) => state.backLayout.selectedBackLayout);
    const selectedColor = useSelector((state) => state.backLayout.backLayoutColor);
    const selectedPopup = useSelector((state) => state.popup.selectedPopup);
    const popName = selectedPopup ? selectedPopup.name : "";
    const { place, date, price, companion } = useSelector((state) => state.backInfo);

    const variations = [
        ['#F8CDCC', '#FFF4F4'],
        ['#E2D4F4', '#FBF8FF'],
        ['#CEE2F5', '#F3F9FF'],
        ['#D1E8E5', '#F5FFFE'],
        ['#FBF0CF', '#FFFDF8'],
        ['#E9DBD0', '#FFF9F4'],
        ['#FE6F96', '#FFF6F9'],
        ['#6F69AC', '#F4F3FF'],
        ['#719FAF', '#F4FCFF'],
        ['#95DAC1', '#F5FFFC'],
        ['#FFFFFF', '#343434'],
        ['#000000', '#FFFFFF'],
    ];

    const selectedVariation = variations.find(variation => variation[0] === selectedColor);
    const firstColor = selectedVariation[0];
    const secondColor = selectedVariation[1]; // 두 번째 색상

    // 날짜 형식을 'YYYY.MM.DD'에서 'YYMMDD'로 변환하는 함수
    const formatDate = (dateString) => {
        const parts = dateString.split('-');
        return parts[0].slice(2) + parts[1] + parts[2];
    };

    // 글자를 15자로 제한하는 함수 (15자가 넘으면 '...' 추가)
    const truncateText = (text, maxLength = 20) => {
        return text.length > maxLength ? text.substring(0, maxLength) : text;
    };

    const truncateText2 = (text, maxLength = 15) => {
        return text.length > maxLength ? text.substring(0, maxLength): text;
    };


    return (
        <>
            {selectedLayout === 'layout1' && (
                <div className='svg-container1'>
                    <div className="text-overlay1">
                        <div className={firstColor === '#FFFFFF'? 'info-white' : 'info1'}>
                            <div>{truncateText(popName)}</div>
                            <div>{date}</div>
                            <div>{truncateText(place)}</div>
                            <div>{price}</div>
                            <div>{companion}</div>
                        </div>
                    </div>
                    <CustomSVG1 firstColor={firstColor} secondColor={secondColor} />
                </div>
            )}
            {selectedLayout === 'layout2' && (
                <div className='svg-container1'>
                    <div className="text-overlay1">
                        <div className={firstColor === '#000000'? 'info2-black' : 'info2'}>
                            <div>{truncateText(popName)}</div>
                            <div>{date}</div>
                            <div className='test222'>{truncateText(place)}</div>
                            <div>{price}</div>
                            <div>{companion}</div>
                        </div>
                    </div>
                    <CustomSVG2 firstColor={firstColor} secondColor={secondColor} />
                </div>
            )}
            {selectedLayout === 'layout3' && (
                <div className='svg-container1'>
                    <div className="text-overlay1">
                        <div className={firstColor === '#000000'? 'info3-black' : 'info3'}>
                            <div>{truncateText(popName)}</div>
                            <div>{date}</div>
                            <div>{truncateText(place)}</div>
                            <div>{price}</div>
                            <div>{companion}</div>
                        </div>
                    </div>
                    <CustomSVG3 firstColor={firstColor} secondColor={secondColor} />
                </div>
            )}
            {selectedLayout === 'layout4' && (
                <div className='svg-container1'>
                    <div className="text-overlay1">
                        <div className={firstColor === '#000000'? 'info4-black' : 'info4'}>
                            <div>{truncateText(popName)}</div>
                            <div className='info4-bundle'>
                                <div>{companion}</div>
                                <div>{date}</div>
                                <div>{price}</div>
                            </div>
                            <div>{truncateText(place)}</div>
                        </div>
                    </div>
                    <CustomSVG4 firstColor={firstColor} secondColor={secondColor} />
                </div>
            )}
            {selectedLayout === 'layout5' && (
                <div className='svg-container1'>
                    <div className="text-overlay1">
                        <div className={firstColor === '#000000'? 'info5-black' : 'info5'}>
                            <div>{truncateText(popName)}</div>
                            <div>{date}</div>
                            <div>{truncateText(place)}</div>
                            <div className='info5-bundle'>
                                <div>{price}</div>
                                <div>{companion}</div>
                            </div>
                        </div>
                    </div>
                    <CustomSVG5 firstColor={firstColor} secondColor={secondColor} />
                </div>
            )}
            {selectedLayout === 'layout6' && (
                <div className='svg-container1'>
                    <div className="text-overlay1">
                        <div className='info6' style={{ color: secondColor }}> {/* 글자 색을 secondColor로 설정 */}
                            <div className='info6-bundle1'>
                                <div className='info6-bundle3'>
                                    <div className='info6-date'>{formatDate(date)}</div>
                                    <div className='info6-place'>{truncateText2(place)}</div>
                                </div>
                                <div className='info6-popName'>{truncateText2(popName)}</div>
                            </div>
                            <div className='info6-bundle2'>
                                <div className='info6-companion'>{companion}</div>
                                <div className='info6-price'>{price}</div>
                            </div>
                        </div>
                    </div>
                    <CustomSVG6 firstColor={firstColor} secondColor={secondColor} />
                </div>
            )}
        </>
    );
}
