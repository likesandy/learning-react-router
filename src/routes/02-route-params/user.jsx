import React from "react";
import { useSearchParams } from "react-router-dom";

export default function user() {
  // https://reactrouter.com/en/main/hooks/use-search-params#usesearchparams
  // return URLSearchParams
  const [searchParams] = useSearchParams();

  // URLSearchParams conversion object
  const objSearchParams = Object.fromEntries(searchParams);

  const { name, age } = objSearchParams;
  return (
    <div>
      user:{name},{age}
    </div>
  );
}
