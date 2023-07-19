import { useEffect, useState } from "react";
import "./ListCard.css";
import { Link } from "react-router-dom";

import CardPeriferico from "../CardPeriferico/CardPeriferico";

//FIREBASE
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

const ListCard = () => {
  const [perifericos, setPerifericos] = useState([]);

  useEffect(() => {
    const getPerifericos = async () => {
      const q = query(collection(db, "perifericos"));
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });

      setPerifericos(docs);
    };
    getPerifericos();
  }, []);

  return (
    <div>
      <div className="perifericos-grid">
        {perifericos.map((periferico) => {
          return (
            <div key={periferico.id}>
              <Link
                to={`/detail/${periferico.id}`}
                style={{ textDecoration: "none" }}
              >
                <CardPeriferico data={periferico} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListCard;
