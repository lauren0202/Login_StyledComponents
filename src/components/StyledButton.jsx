//props를 이용한 동적 스타일링 구현; 로그인 버튼에 마우스를 올릴 경우 버튼의 속성이 바뀌도록 설정

import styled from "styled-components";

const StyledButton = styled.button`
    background-color: ${props => props.theme.colors.primary};
    border-radius: ${props => props.theme.borderRadius};

    &:hover {
        background-color: ${props => props.theme.colors.primaryHover};
    }
`;

export default StyledButton;