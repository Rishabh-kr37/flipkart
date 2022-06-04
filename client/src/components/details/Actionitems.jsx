import { Box, Button, styled } from "@mui/material";
import { useState } from "react";
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import {post} from '../../utils/paytm';

import{addToCart} from '../../redux/actions/cartActions';

import { payUsingPaytm } from "../../service/api";
const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  [theme.breakpoints.down("lg")]: {
    padding: "20px 40px",
  },
}));

const Image = styled("img")({
  width: "90%",
  padding: "15px",
});

const StyledButton = styled(Button)(({ theme }) => ({
  width: "48%",
  borderRadius: 2,
  height: 50,
  [theme.breakpoints.down("lg")]: {
    width: "46%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "48%",
  },
}));
const Actionitem = ({ product }) => {

  const navigate=useNavigate();

  const dispatch=useDispatch();
  const [quantity,setQuantity]=useState(1);

  const {id} = product;
  const addItemsToCart=()=>{
    dispatch(addToCart(id,quantity));
    navigate('/cart');
  }
    
 const buyNow= async()=>{
  let response = await payUsingPaytm({ amount: 500, email: 'rishabh3730@gmail.com'});
  var information = {
    action: 'https://securegw-stage.paytm.in/order/process',
    params: response    
  }
  post(information);
  } 

  return (
    <LeftContainer>
      <Box
        style={{
          padding: "15px 20px",
          border: "1px solid #f0f0f0",
          marginBottom: 10,
        }}
      >
        <Image src={product.detailUrl} alt="product" />
      </Box>
      <StyledButton
        variant="contained" onClick={()=>addItemsToCart()} style={{ fontSize: 11, marginRight: 10, background: "#ff9f00" }}><Cart /> Add to Cart
      </StyledButton>
      <StyledButton variant="contained" onClick={()=>buyNow()}style={{ fontSize: 11, background: "#fb641b" }}><Flash /> Buy Now</StyledButton>
    </LeftContainer>
  )
}

export default Actionitem;
