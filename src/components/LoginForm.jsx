//로그인 폼 UI와 스타일 작성

import React, { useState } from "react";
import styled from "styled-components";
import StyledButton from "./StyledButton";
import Logo from "../logo.svg";

// 1. Flex로 좌우 분할
const FormWrapper = styled.div`
  display: flex;
  align-items: center; 
  justify-content: center;
  margin-top: 100px;
  /* 가로폭 지정 (ex: 700px), 반응형이면 min/max-width 사용 */
  width: 700px;
`;

// 2. 이미지 영역
const ImageBox = styled.div`
  width: 45%;  // 전체의 45% 차지
  min-width: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 3. 폼 영역
const Form = styled.form`
  background: #fff;
  padding: 48px 36px; //위아래/좌우 여백
  width: 55%;
  min-width: 300px;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px; // 요소간 간격 추가
`;

const Input = styled.input`
  width: 100%;
  padding: 14px;
  margin-bottom: 12px;
  border: 1px solid ${({theme}) => theme.colors.border};
  border-radius: ${({theme}) => theme.borderRadius};
  font-size: 16px;
  box-sizing: border-box;
`;

const Label = styled.label`
  font-size: 15px;
  margin-bottom: 5px;
  font-weight: 600;
`;

const FindPwBox = styled.div`
  font-size: 14px;
  color: #444;
  text-align: center;
  margin-top: 5px;
`;

const FindPwLink = styled.a`
  color: #ff7e7e;
  font-weight: 600;
  text-decoration: underline;
  margin-left: 5px;
  cursor: pointer;

  &:hover {
    color: #fa5252;
  }
`;

export default function LoginForm() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  return (
    <FormWrapper>
      {/* 왼쪽 이미지 영역 */}
      <ImageBox>
        {/* src 폴더에 logo.svg라면 아래처럼 사용 */}
        <img
          src={Logo}
          alt="로그인 이미지"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </ImageBox>
      {/* 오른쪽 폼 영역 */}
      <Form>
        <h2>Login</h2>
        <Label>아이디</Label>
        <Input value={id} onChange={e=>setId(e.target.value)} placeholder="아이디 입력(4~20자)" />
        <Label>비밀번호</Label>
        <Input type="password" value={pw} onChange={e=>setPw(e.target.value)} placeholder="비밀번호 입력(8~20자)" />
        <StyledButton type="submit">로그인 하기</StyledButton>
        
        <FindPwBox>
            비밀번호를 잊으셨습니까?
            <FindPwLink href="#">비밀번호 찾으러 가기</FindPwLink>
        </FindPwBox>
      </Form>
    </FormWrapper>
  );
}