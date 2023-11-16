import styled from "styled-components"

import colors from "../../constants/colors"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 8px;

  width: 50px;
  min-height: 19px;
  border-radius: 4px;
  border: 0.3px solid ${colors.quantityBorderColor};
  background-color: ${colors.background};
`

export const Quantity = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;
  height: 100%;
  background-color: ${colors.background};
  color: ${colors.primary};

  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.footer};
  }

  &:active {
    background-color: ${colors.primary};
    color: ${colors.background};
  }
`
