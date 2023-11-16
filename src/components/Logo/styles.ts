import styled from 'styled-components'
import colors from '../../constants/colors'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.background};

  margin-left: 65px;
`

export const Acronym = styled.h1`
  font-size: 40px;
  margin-right: 10px;
`

export const Name = styled.h1`
  font-size: 20px;
  font-weight: 300;
  margin-top: 20px;
`
