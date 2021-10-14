import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Input from "../components/common/Input";
import SubheadlineTypo from '../components/typography/SubheadlineTypo';
import BottomButtonLayout from '../layouts/BottomButtonLayout';



const EditView = styled.View`
    height: 930px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 15px;
    padding-top: 20px;
    padding-bottom: 90px;
    background: white;
    
`

const EditScreen = () => {
    return(
        <BottomButtonLayout text="적용하기" onPress={() => {}}>
            <ScrollView style={{backgroundColor: "white"}}>
                <EditView>
                    <Input title="스케줄 이름을 입력해 주세요" placeholder="스케줄 이름 입력하기" />
                    <Input title="목적지를 입력해 주세요" placeholder="목적지 설정하기" />
                    <Input title="도착 시간을 입력해 주세요" placeholder="날짜 / 시간 설정하기" />
                    <Input title="외출 시 필요한 물품이 있나요?" placeholder="필요 물품 입력하기" />
                    <Input style={{height: 150}} multiline={true} numberOfLines={4} title="일정에 대한 상세 내용을 알려주세요" placeholder="일정에 대한 상세 내용 입력하기" />
                    <SubheadlineTypo color="grayHeavy">어떤 준비가 필요할까요?</SubheadlineTypo>
                </EditView>
            </ScrollView>
        </BottomButtonLayout>
    )
}
 

export default EditScreen;  