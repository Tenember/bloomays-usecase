import React, { useState, useEffect } from "react";
import axios from "axios";
import "./LeavingArrivingBloomers.css";

interface Freelance {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
}

interface Mission {
  id: string;
  label: string;
  beginDate: string;
  endDate: string;
  missionType: string;
  freelance: Freelance;
}

interface LeavingArrivingBloomersProps {
  onClose: () => void;
}

const LeavingArrivingBloomers: React.FC<LeavingArrivingBloomersProps> = ({
  onClose,
}) => {
  const [missions, setMissions] = useState<Mission[]>([]);

  useEffect(() => {
    axios
      .get<Mission[]>("http://localhost:3000/api/missions")
      .then((response) => {
        setMissions(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

const organizeMissionsByDate = (missions: Mission[]) => {
  // Trier les missions par date de début
  const sortedMissions = missions.sort(
    (a, b) => new Date(a.beginDate).getTime() - new Date(b.beginDate).getTime()
  );

  const arriving: { [date: string]: Freelance[] } = {};
  const leaving: { [date: string]: Freelance[] } = {};

  sortedMissions.forEach((mission) => {
    const { beginDate, endDate, freelance } = mission;
    const formattedBeginDate = formatDate(beginDate);
    const formattedEndDate = formatDate(endDate);

    if (arriving[formattedBeginDate]) {
      arriving[formattedBeginDate].push(freelance);
    } else {
      arriving[formattedBeginDate] = [freelance];
    }

    if (leaving[formattedEndDate]) {
      leaving[formattedEndDate].push(freelance);
    } else {
      leaving[formattedEndDate] = [freelance];
    }
  });

  return { arriving, leaving };
};

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    return `${day}/${month}/${year}`;
  };

  const { arriving, leaving } = organizeMissionsByDate(missions);
  const numArrivingBloomers = Object.values(arriving).flat().length;
  const numLeavingBloomers = Object.values(leaving).flat().length;

  return (
    <>
      <div className="overlay" onClick={onClose} />
      <div className="popup-container">
        <div className="popup-content">
          <div className="header">
            <span className="count green">{numArrivingBloomers}</span>
            <h2 className="title">Bloomers entrants</h2>
          </div>
          <ul className="bloomers-list">
            {Object.entries(arriving).map(([date, bloomers], index) => (
              <li key={date} className="bloomer">
                <div className="date green">
                  <div className="dot" />
                  <h3>{date}</h3>
                </div>
                {index !== Object.entries(arriving).length - 1 ? (
                  <div className="line" />
                ) : (
                  <div className="margin-line" />
                )}
                {bloomers.map((bloomer) => (
                  <li key={bloomer.id} className="gray">
                    {bloomer.firstname} {bloomer.lastname}
                  </li>
                ))}
              </li>
            ))}
          </ul>
          <div className="header">
            <span className="count red">{numLeavingBloomers}</span>
            <h2 className="title">Bloomers sortants</h2>
          </div>
          <ul className="bloomers-list">
            {Object.entries(leaving).map(([date, bloomers], index) => (
              <li key={date} className="bloomer">
                <div className="date red">
                  <div className="dot" />
                  <h3>{date}</h3>
                </div>
                {index !== Object.entries(arriving).length - 1 ? (
                  <div className="line" />
                ) : (
                  <div className="margin-line" />
                )}
                {bloomers.map((bloomer) => (
                  <li key={bloomer.id} className="gray">
                    {bloomer.firstname} {bloomer.lastname}
                  </li>
                ))}
              </li>
            ))}
          </ul>
          <span className="close-btn" onClick={onClose}>
            ×
          </span>
        </div>
      </div>
    </>
  );
};

export default LeavingArrivingBloomers;
