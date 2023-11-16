import styled from "styled-components"

import colors from "../../../constants/colors"

export const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  position: relative;

  min-height: 95px;
  width: 379px;
  border-radius: 8px;
  padding: 0px 20px;
  background-color: ${colors.background};
  box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);
`

export const CloseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -30px;
  right: -5px;

  font-size: 14px;
  font-weight: 400;

  width: 18px;
  height: 18px;
  margin-top: 25px;
  background-color: ${colors.sidebarButtonBackground};
  color: ${colors.background};

  border: none;
  border-radius: 50%;
  cursor: pointer;
`

export const Name = styled.span`
  font-size: 16px;
  font-weight: 400;
  max-height: 36px;
  width: 124px;
  color: ${colors.productDescription};
`

export const Image = styled.img`
  height: 65px;
  object-fit: contain;
`

export const Price = styled.span`
  display: inline-flex;
  font-size: 14px;
  font-weight: 700;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  padding: 4px 8px;
  color: ${colors.sidebarButtonBackground};
`
