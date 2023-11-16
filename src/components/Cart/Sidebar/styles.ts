import styled from "styled-components"
import { Button } from "@mui/material"

import colors from "../../../constants/colors"


export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1000;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
  width: 486px;
  background-color: ${colors.primary};
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 20px 30px;
`

export const Title = styled.h2`
  width: 160px;

  font-size: 27px;
  font-weight: 700;
  color: ${colors.background};
`


export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;
  font-weight: 400;

  width: 38px;
  height: 38px;
  margin-top: 25px;
  background-color: ${colors.sidebarButtonBackground};
  color: ${colors.background};

  border: none;
  border-radius: 50%;
  cursor: pointer;
`

export const Cost = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0px 50px;
  margin-top: auto;
`

export const Total = styled.p`
  display: flex;
  justify-content: center;

  font-size: 28px;
  font-weight: 700;
  color: ${colors.background};

  padding: 20px 0;
`

export const BuyButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-size: 28px !important;
  font-weight: 700 !important;

  width: 100%;
  min-height: 97px;
  background-color: ${colors.sidebarButtonBackground} !important;
  color: ${colors.background} !important;

  border-radius: 0 !important;
  cursor: pointer;
`
