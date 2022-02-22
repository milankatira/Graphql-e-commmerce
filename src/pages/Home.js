import React,{useState,useEffect} from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "../graphql/queries";
import MyCard from "../components/MyCard";
import '../App.css'
import Search from "../components/Search";
import Pagination from "../components/Pagination";
import { CircularProgress } from '@mui/material';
const Home = () => {
  // const { loading, data, error } = useQuery(GET_ALL_PRODUCTS);

  const [page,setPage] = useState(1)
  const {loading,error,data,refetch} = useQuery(GET_ALL_PRODUCTS,{
      variables:{
          "pagination": {
            "page": page,
            "pageSize": 2
          }
       }
  })

  useEffect(() => {
     if(page !=1) refetch() 
  }, [page])

  const updatePage = (page)=>{
      setPage(page)
  }

  if (loading) return  <div className="loader"><CircularProgress/></div>;;
  if (error) return <p>Error</p>;
  if (data) {
    console.log(data.products.data);
  }
  return (
    <div>
      <Search/>
      <div className="homeroot">
        {data.products.data.map(({ id, attributes }) => {
          return (
            <MyCard
              id={id}
              name={attributes.name}
              description={attributes.description}
              price={attributes.price}
              img={attributes.images.data[0].attributes.url}
            />
          );
        })}
      </div>
      <Pagination
             pageCount={data.products.meta.pagination.pageCount}
             updatePage={updatePage}
             />

    </div>
  );
};

export default Home;
