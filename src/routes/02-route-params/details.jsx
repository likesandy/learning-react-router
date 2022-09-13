import React from "react";
import { useParams } from "react-router-dom";

export default function details(props) {
  // https://reactrouter.com/en/main/hooks/use-params
  const params = useParams();

  const { id } = params;

  return <div>id:{id}</div>;
}
