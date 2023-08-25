// src/components/DataDisplay.js

import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore } from "./FireBaseConfig.js"; // Update the path accordingly


function DataDisplay() {
  const dataRef = firestore.collection("your_collection_name"); // Replace with your actual collection name
  const [data, loading, error] = useCollectionData(dataRef);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2>Data from Firebase</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.text}</li> // Assuming each document has a 'text' field
        ))}
      </ul>
    </div>
  );
}

export default DataDisplay;
