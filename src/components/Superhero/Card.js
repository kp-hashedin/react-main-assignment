import React from "react";
import "./Card.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Card = () => {
  const [profiles, setProfiles] = useState([]);
  const [isDataFetced, setIsDataFetched] = useState(false); // Setting for datafetch check

  // API calls for fetching data
  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
      .then((response) => response.json())
      .then((data) => {
        setProfiles(data);
        setIsDataFetched(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      {isDataFetced && (
        <div>
          {profiles.map((profile) => {
            return (
              <div className="container" key={profile.id}>
                <div>
                  <img src={profile.images.md} width={300} height={250} />
                  <h3>{profile.name}</h3>
                  <div
                    style={{
                      width: 100,
                      height: 33,
                      display: "inline-flex",
                      marginBottom: 20,
                      marginLeft: 10,
                    }}
                  >
                    <CircularProgressbar
                      value={profile.powerstats.intelligence}
                      text={`${profile.powerstats.intelligence}%`}
                      styles={buildStyles({
                        pathColor: `rgba(33, 33, 33 , ${
                          profile.powerstats.intelligence / 100
                        })`,
                        textColor: "#212121",
                      })}
                    />
                    <CircularProgressbar
                      value={profile.powerstats.power}
                      text={`${profile.powerstats.power}%`}
                      styles={buildStyles({
                        pathColor: `rgba(33, 33, 33 , ${
                          profile.powerstats.intelligence / 100
                        })`,
                        textColor: "#212121",
                      })}
                    />
                    <CircularProgressbar
                      value={profile.powerstats.strength}
                      text={`${profile.powerstats.strength}%`}
                      styles={buildStyles({
                        pathColor: `rgba(33, 33, 33 , ${
                          profile.powerstats.intelligence / 100
                        })`,
                        textColor: "#212121",
                      })}
                    />
                  </div>
                  <div>
                    <Link to={`/profile/${profile.id}`}>See Profile</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {!isDataFetced && <h1>Content is loading...</h1>}
    </div>
  );
};

export default Card;
