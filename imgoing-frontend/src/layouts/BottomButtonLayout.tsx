import React from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { KeyboardAvoidingView, Platform } from "react-native";
import styled from "styled-components/native";
import RoundButton from "../components/common/RoundButton";

interface BottomButtonLayoutProps {
    children: React.ReactNode;
    text: string;
    onPress: () => void;
}

const BottomView = styled.View`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: center;
`

const ButtonView = styled.View`
    padding: 0 20px;
`

const GradientOverlay = styled(LinearGradient)`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`

const BottomLayoutView = styled.View`
    position: relative;
`

const BottomButtonLayout = (props: BottomButtonLayoutProps) => {
    const { children, text, onPress } = props;
    return(
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <BottomLayoutView>
                {children}
                <BottomView>
                    <ButtonView>
                        <RoundButton onPress={onPress}>{text}</RoundButton>
                    </ButtonView>
                    <GradientOverlay colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)' ,'rgba(255,255,255,1)']}></GradientOverlay>
                </BottomView>
            </BottomLayoutView>
        </KeyboardAvoidingView>
    )
}

export default BottomButtonLayout;