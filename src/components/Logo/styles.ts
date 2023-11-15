import styled from 'styled-components'
import colors from '../../constants/colors'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.background};

  margin-left: 65px;
`

export const Acronym = styled.span`
  font-weight: 600;
  font-size: 40px;
  margin-right: 10px;
`

export const Name = styled.span`
  font-size: 20px;
  margin-top: 6px;
`
