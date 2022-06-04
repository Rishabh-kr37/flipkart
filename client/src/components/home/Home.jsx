
import {useEffect} from 'react';
import Banner from './banner';
//components
import NavBar from './NavBar';

import MidSlide from './MidSlide';

import {Box,styled} from '@mui/material';
import {getProducts} from '../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import Slide from '../home/Slide';
import MidSection from './MidSection';


const Component= styled(Box)`
padding:10px;
background:#F2F2F2;
`
         

const Home=()=>{

        const {products}=useSelector(state=>state.getProducts);

        const dispatch =useDispatch();

        useEffect(()=>{
                dispatch(getProducts())
                
        },[dispatch])
        return(
                <>
                        <NavBar/>
                        <Component>
                        <Banner/> 
                        <MidSlide products={products} title="Deals of the Day" timer={true}/>
                        <MidSection/>
                        <Slide products={products}title="Discounts for You"timer={false}/>
                        <Slide products={products}title="Suggesting Items"timer={false}/>
                        <Slide products={products}title="Top Selection"timer={false}/>
                        <Slide products={products}title="Recommended Items"timer={false}/>
                        <Slide products={products}title="Trending Offers"timer={false}/>
                        <Slide products={products}title="Seasons's top Pick"timer={false}/>
                        <Slide products={products}title="Top Deals on Accessories"timer={false}/>
                        </Component>
                        

                </>
             
        )
} 


export default Home;