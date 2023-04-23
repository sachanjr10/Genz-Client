import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Products from '../components/Products'
import Newslettter from '../components/Newslettter'
import Footer from '../components/Footer'
import { mobile } from "../responsive";
import { useLocation } from 'react-router-dom'


const Container = styled.div`
    
`

const Title = styled.h1`
    margin: 20px;

`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    
`

const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`
const FilterText = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    
  ${mobile({ marginRight: "0px" })}
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px" })}

`
const Option = styled.option`
    
`

const ProductList = () => {
    //used to get the correct path name after the product
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    //color , size change karne ke liye
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (event) => {
        const value = event.target.value
        setFilters({
            ...filters,
            [event.target.name]: value,
        })
    }
    
  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Title>{cat}</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select name = "color" onChange={handleFilters}>
                <Option disabled>
                   Color
                 </Option>
                 <Option>white</Option>
                 <Option>black</Option>
                 <Option>red</Option>
                 <Option>blue</Option>
                 <Option>yellow</Option>
                 <Option>green</Option>
                </Select>
                <Select name = "size" onChange={handleFilters}>
                <Option disabled selected>
                    Size
                  </Option>
                  <Option>XS</Option>
                  <Option>S</Option>
                  <Option>M</Option>
                  <Option>L</Option>
                  <Option>XL</Option>  
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select onChange={(event)=>setSort(event.target.value)} >
                <Option value="newest">Newest</Option>
                <Option value="asc">Price (asc)</Option>
                <Option value="desc">Price (desc)</Option>
                </Select>     
            </Filter>
        </FilterContainer>
        
        
        <Products cat={cat} filters={filters} sort={sort} />
        <Newslettter/>
        <Footer/>
        
        </Container>
    
  )
}

export default ProductList