import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import KaKaoMap from '@/components/KaKaoMap';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { Place } from '@/types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const Search = styled.div`
  display: flex;
  width: 100%;
  padding: 0 16px 14px 16px;
  box-sizing: border-box;
`;

const SearchInput = styled(Input)`
  flex: 1;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 10;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.6),
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 1)
  );
  padding: 20px 20px 0 20px;
`;

const MainPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [keyword, setKeyword] = useState<string>('');
  const [info, setInfo] = useState<Place>();

  const onPressed = () => {
    if (!inputRef.current) return;

    if (inputRef.current.value !== keyword) {
      setKeyword(inputRef.current.value);
      return;
    }

    if (window.ReactNativeWebView) {
      // 웹뷰 -> 앱
      window.ReactNativeWebView.postMessage(JSON.stringify(info));
    } else {
      console.log(info);
    }
  };

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onPressed();
      if (!inputRef.current) return;
      inputRef.current.blur();
    }
  };

  return (
    <Wrapper>
      <Search>
        <SearchInput placeholder="장소를 입력하세요" ref={inputRef} isValueEmpty={!keyword} onKeyUp={onKeyUp} />
      </Search>
      <KaKaoMap keyword={keyword} info={info} setInfo={setInfo} />
      <ButtonWrapper>
        <Button onClick={onPressed}>검색</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default MainPage;
