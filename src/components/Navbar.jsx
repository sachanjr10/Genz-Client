
import { Badge } from '@material-ui/core'
import { Home, HomeOutlined, HomeRounded, Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'




const Container = styled.div`
  height: 60px;
  ${mobile({height: "50px"})}
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({padding: "10px 0px"})};
`
const Left  = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Icon = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display:"none"})}
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`
const Input = styled.input`
  border: none;
  ${mobile({width:"50px"})}
`
const Center  = styled.div` 
  flex: 1;
  text-align: center;
`
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({fontSize:"24px"})}
`
const Right  = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex: 2, justifyContent:"center"})}
`
// for making badge jo uper aata hai using material ui
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({fontSize:"12px", marginLeft:"10px"})}
`

const Navbar = () => {

  // ye cart ke icon ka badge ke upar pop hota hai uske liye hai
  const quantity = useSelector(state=>state.cart.quantity)
  //console.log(quantity);
  const navigate = useNavigate();

  const {currentUser} = useSelector(state => state.user)

  function handleClick()
  {
    navigate("/register");
  }

  function handleChoice()
  {
    navigate("/login");
  }
  function handleChic()
  {
    navigate("/");
  }
  return (
    <Container>
      <Wrapper>
        <Left>
          <Icon onClick={handleChic}>
            <HomeRounded/>
          </Icon>
          <SearchContainer>
            <Input placeholder='Search'/>
            {/* material ui is used in search here */}
            <Search style={{color: "gray", fontSize: 16}}/>
          </SearchContainer>
        </Left>
        <Center><Logo>GenZ.</Logo></Center>
        <Right>
          {currentUser ? <MenuItem>{currentUser.username}</MenuItem>:(
          <>
          <MenuItem onClick={handleClick}>REGISTER</MenuItem>
          <MenuItem onClick={handleChoice}>SIGN IN</MenuItem>
          </>)}
          
          <Link to="/cart">
          {/* to link with cart */}
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined/>
            </Badge>
          </MenuItem>
          </Link>
        </Right>
        
      </Wrapper>
    </Container>
  )
}

export default Navbar