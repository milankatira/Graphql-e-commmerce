import React from 'react'
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { GET_PRODUCT_BY_CATEGORY } from '../graphql/queries';
import Card  from '../components/MyCard'
import { CircularProgress } from '@mui/material';

const ProductByCategory = () => {
    const {cid} = useParams()
    console.log(cid)

    const {loading,data,error} =  useQuery(GET_PRODUCT_BY_CATEGORY,{
        variables:{
            categoryId:cid
        }
    })
    if(loading) return  <div className="loader"><CircularProgress/></div>;;
    return (
        <div>
            <div className="homeroot">
                {
                    data.category.data.attributes.products.data.map(({id,attributes})=>{
                      return <Card
                        key={id}
                        id={id}
                        name={attributes.name}
                        price={attributes.price}
                        description={attributes.description}
                        img={attributes.images.data[0].attributes.url}
                      />
                    })
                }
            </div>
        </div>
    )
}

export default ProductByCategory