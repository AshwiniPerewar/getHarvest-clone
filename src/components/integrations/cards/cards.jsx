import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIngegrationAPI } from "../../../store/integrationReducer/integration.action";
import styles from "./card.module.css";

export const Cards = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.integration);

  useEffect(() => {
    dispatch(getIngegrationAPI());
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error...</div>
      ) : (
        <div className={styles.cardMainDiv}>
          {data.map((el) => (
            <div key={el.id}>
              <div>
                <img
                  src={el.imageUrl}
                  alt="icons"
                />
              </div>

              <div>
                <h1>{el.title}</h1>
                <p>{el.discription}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
