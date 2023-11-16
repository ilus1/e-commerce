import styled from 'styled-components'
import { Button } from '@mui/material'
import { AddOutlined, RemoveOutlined, DeleteOutline } from '@mui/icons-material'

import colors from '../../constants/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 285px;
  width: 218px;
  border-radius: 8px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
  background: ${colors.background};
  overflow: auto;
`

export const Image = styled.img`
  height: 140px;
  object-fit: contain;
  padding-top: 18px;
`

export const NamePriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  height: 62px;
  margin: 0px 12px;
`

export const Name = styled.span`
  font-size: 16px;
  font-weight: 400;
  height: 36px;
  width: 124px;
  color: ${colors.productDescription};
`

export const Price = styled.span`
  display: inline-flex;
  font-size: 14px;
  font-weight: 700;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  padding: 4px 8px;
  color: ${colors.background};
  background-color: ${colors.priceTag};
`

export const Description = styled.span`
  font-size: 10px;
  color: ${colors.productDescription};

  width: 192px;
  height: 25px;
  margin: 8px 12px 15px 12px;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const BuyButton = styled(Button)`
  font-size: 14px;
  font-weight: 600;
  border-top-right-radius: 0px !important;
  border-top-left-radius: 0px !important;

  width: 100%;
  height: 32px;
  overflow: hidden;
`

export const ChangeQuantityButton = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center;

  color: ${colors.primary};
  border-top: 2px solid ${colors.primary};

  font-size: 14px;
  font-weight: 600;
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;

  width: 100%;
  height: 32px;
  overflow: hidden;
`

export const AddIcon = styled(AddOutlined)`
  color: ${colors.primary};
  cursor: pointer;
`

export const RemoveIcon = styled(RemoveOutlined)`
  color: ${colors.primary};
  cursor: pointer;
`

export const DeleteIcon = styled(DeleteOutline)`
  color: ${colors.primary};
  cursor: pointer;
`
