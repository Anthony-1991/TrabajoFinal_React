import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemPerifericoDetail from "../../Components/ItemPerifericoDetail/ItemPerifericoDetail";
import "./PerifericoDetailPage.css";

import {
  collection,
  query,
  where,
  getDocs,
  documentId,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const PerifericoDetailPage = () => {
  const { id } = useParams();
  const [perifericoData, setPerifericoData] = useState([]);

  useEffect(() => {
    const getPerifericos = async () => {
      const q = query(
        collection(db, "perifericos"),
        where(documentId(), "==", id)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });

      setPerifericoData(docs);
    };
    getPerifericos();
  }, [id]);

  return (
    <div className="DetailContainer">
      {perifericoData.map((data) => {
        return (
          <div key={data.id}>
            <ItemPerifericoDetail data={data} />
          </div>
        );
      })}
    </div>
  );
};

export default PerifericoDetailPage;
