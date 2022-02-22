import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_CATEGORIES } from "../graphql/queries";
import { Link } from "react-router-dom";
import { CircularProgress } from '@mui/material';

const Category = () => {
  const { data, loading, error } = useQuery(GET_ALL_CATEGORIES);
  if (loading) return <div className="loader"><CircularProgress/></div>;
  return (
    <div className="category">
      {data.categories.data.map(({ id, attributes }) => {
        return (
          <Link key={id} to={`/category/${id}`}>
            <h4 className="chip btn white">{attributes.name}</h4>
          </Link>
        );
      })}
    </div>
  );
};

export default Category;
