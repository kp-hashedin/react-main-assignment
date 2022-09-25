import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Profile.css";
import TextCard from "./TextCard";
import Error from "../Error";

const Profile = () => {
  const [characterDetails, setCharacterDetails] = useState({});
  const params = useParams();
  const [isDataFetced, setIsDataFetched] = useState(false);
  const [checkForNotFound, setCheckForNotFound] = useState(false);
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${params.profile_id}.json`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setCharacterDetails(data);
        setIsDataFetched(true);
      })
      .catch((err) => {
        console.log(err);
        setCheckForNotFound(true);
      });
  });

  return (
    <div>
      {isDataFetced && (
        <div>
          <h1 style={{ textAlign: "center" }}>
            Profile of {characterDetails.name}
          </h1>
          <div className="profile-container">
            <div className="left-container">
              <img
                src={characterDetails.images.lg}
                className="profileImage"
                width={420}
                alt={characterDetails.name}
              />
            </div>
            <div className="right-container">
              <TextCard
                attributeTitle="Power Stats"
                attributes={characterDetails.powerstats}
              />
              <TextCard
                attributeTitle="Appearence"
                attributes={characterDetails.appearance}
              />
              <TextCard
                attributeTitle="Biography"
                attributes={characterDetails.biography}
              />
              <TextCard
                attributeTitle="Work"
                attributes={characterDetails.work}
              />
              <TextCard
                attributeTitle="Connections"
                attributes={characterDetails.connections}
              />
            </div>
          </div>
        </div>
      )}

      {checkForNotFound && <Error />} 
      {!isDataFetced && !checkForNotFound && <h1>Content is loading...</h1>}
    </div>
  );
};

export default Profile;
