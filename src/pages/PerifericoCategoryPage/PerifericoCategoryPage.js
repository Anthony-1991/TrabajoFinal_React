import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardPeriferico from "../../Components/CardPeriferico/CardPeriferico";
import "./PerifericoCategoryPage.css";

import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const PerifericoCategoryPage = () => {
  const { category } = useParams();
  const [perifericoData, setPerifericoData] = useState([]);

  useEffect(() => {
    const getPerifericos = async () => {
      const q = query(
        collection(db, "perifericos"),
        where("category", "==", category)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });

      setPerifericoData(docs);
    };
    getPerifericos();
  }, [category]);

  return (
    <div className="CategoryContainer">
      {perifericoData.map((data) => {
        return (
          <div key={data.id}>
            <CardPeriferico data={data} />
          </div>
        );
      })}
    </div>
  );
};

export default PerifericoCategoryPage;
