import React from 'react';
import styled from 'styled-components';

const Sample = () => {
  return (
    <div>
      <BigText>Sample</BigText>
      <MiddleText>Sample</MiddleText>
      <SmallText>Sample</SmallText>
    </div>
  );
};

export default Sample;

const BigText = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.big};
`;

const MiddleText = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.middle};
`;

const SmallText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
`;
