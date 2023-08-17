import { useState } from 'react';
import React from 'react';
import flipCoinLogo from '../assets/flipCoin.png';
import flipCoinDetail from '../assets/flipcoinDetail.png';
import {Box, Button, Typography, styled} from '@mui/material';
import Layout from '../components/Layout/Layout';

const Main = styled(Box)`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background: #ECECEC;
    
`

const Component = styled(Box)`
    height: 100%;
    width: 800px;
    background: white;
    // margin: 80px 140px;
    padding: 30px;
    
`
const Image = styled('img')({
    height: 60,
    marginTop: -9,
    marginLeft: -10,
    padding: 12,
    
});

const Container = styled(Box)`
    display: flex;
   
`;

const Coins = styled(Typography)`
    float: right;
`;

const StyledRow = styled(Typography)`
    padding: 5px 5px;

`

const Heading = styled(Typography)`
    margin-top:-10px;
`


const FlipCoin = () => {
    const [data, setData] = useState([{
        "id": 1,
        "productName": "mouse",
        "type": "debit",
        "flipcoin": "100",
        "date": "1 Jan 2023"
    }, {
        "id" : 2,
        "productName": "keyboard",
        "type": "credit",
        "flipcoin": "200",
        "date": "30 Feb 2023"
    }, {
        "id" : 3,
        "productName": "dress",
        "type": "credit",
        "flipcoin": "54",
        "date": "3 Apr 2023"
    }
    , {
        "id" : 4,
        "productName": "keyboard",
        "type": "credit",
        "flipcoin": "200",
        "date": "30 Feb 2023"
    }
    , {
        "id" : 5,
        "productName": "keyboard",
        "type": "credit",
        "flipcoin": "200",
        "date": "30 Feb 2023"
    }


    ])
    return (<Layout>
        <Main>
            <Component>
                
                <Container>
                    <Heading style={{ fontFamily: 'Poppins, sans-serif', fontSize: 25, padding: 10}} >
                        FlipCoin Balance
                    </Heading>
                <Image src={flipCoinLogo} alt='flipCoin'/>
                <Typography style={{marginTop: 7, marginLeft: 5, fontWeight: 600, fontSize: 20}}>45</Typography>
                </Container>
                
                <img src={flipCoinDetail} style={{width: '100%', height: '30%'}} alt='flipCoinDetail'/>
                <hr style={{ color: '#828282', backgroundColor: 'red', height: '1px' }} />
                
                <Box>
                    {data.map((i, index) => {
                        if (index<5){

                            
                            
                            return(
                            <Box>
                                
                                {/* <h1>{index}</h1> */}
                                <StyledRow>
                                    
                                    <Typography style={{fontFamily: 'Poppins, sans-serif'}}>{i.productName}</Typography>
                                        <Box>
                                            <Coins component="span" style={{fontFamily: 'Poppins, sans-serif'}}>{i.type === "debit" ? "-" : "+"}{i.flipcoin}</Coins>
                                        </Box>
                                    <Typography style={{fontFamily: 'Poppins, sans-serif'}}>{i.type === "debit" ? "debited" : "credited" } on {i.date}</Typography>
                                    {/* <hr style={{background: 'red'}}/> */}
                                    <hr style={{ color: '#828282', backgroundColor: 'red', height: '1px' }} />
                                    {/* <p style={{color:'#ECECEC'}}>_________________________________________________________________________________</p> */}
                                </StyledRow>
                                
                                
                                    
                                
                                
                                

                            </Box>
                            )
                        }
                        }   
                    )}
                </Box>
            </Component>
        </Main>
        </Layout>   
    )
        
    
}

export default FlipCoin;