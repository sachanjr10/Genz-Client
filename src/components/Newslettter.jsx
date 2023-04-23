import { Send } from '@material-ui/icons'
import styled from "styled-components"
import { mobile } from "../responsive";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ textAlign: "center" })}
`
const InputContainer = styled.form`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({ width: "80%" })}


`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
`



const Newslettter = () => {
    //using emaijs in newleter
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_0nqqbzb', 'template_cxt31x5', form.current, 'ryQPVYlVlTEwLrlf3')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favorite products.</Desc>
        
        <InputContainer ref={form} className='email-container' onSubmit={sendEmail}>
            <Input type='email' name='user_email' placeholder='Your email'/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
        
    </Container>
  )
}

export default Newslettter