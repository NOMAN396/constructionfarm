import React, { useState, useEffect } from 'react';
import Header from "../Header/header";
import Footer from "../Footer/footer";
import './team.css';
import { Teams } from '../../apiservice/team';
import { Teammember } from '../../apiservice/teammember';
import axios from 'axios';

function Team() {
  const [teamData, setTeamData] = useState([]);
  const [teammemberData, setTeammemberData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teamResponse = await Teams();
        setTeamData(teamResponse.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
    getTeamMembersData();
  }, []);

  function getTeamMembersData() {
    axios.get('http://localhost/reactcrud/team.php')
      .then(function (response) {
        setTeammemberData(response.data.data);
      });
  }
  const[projectData,project2Data] = useState([]);
  const [teammembeData, setTeammembeData] = useState([]);
  useEffect(() => {
      const fetchData = async () => {
          try {
              const data = await Teammember();
              project2Data(data);

          } catch (error) {
              console.error(error.message);
          }
      };

      fetchData();
      getTeamMemberData();
  }, []);
  
  function getTeamMemberData() {
    axios.get('http://localhost/reactcrud/teammember.php')
      .then(function (response) {
        setTeammembeData(response.data.data);
      });
  }

  return (
    <div>
      <Header />
      <section id="trainers" className="trainers">
        <div className="container" data-aos="fade-up">
          <div className="row" data-aos="zoom-in" data-aos-delay="100">
            <div className="col-12">
              {teammembeData.map(( team, index) => (
                <div className="member" key={index}>
                  <img src={team.image} alt="" />
                  <div className="member-content">
                    <h4 className="text-light">{team.name}</h4>
                    <span className="text-info">{team.title}</span>
                    <p>{team.details}</p>
                    <div className="social">
                      <a href="#"><i className="bi bi-twitter"></i></a>
                      <a href="#"><i className="bi bi-facebook"></i></a>
                      <a href="#"><i className="bi bi-instagram"></i></a>
                      <a href="#"><i className="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {teamData.map((teammember, index) => (
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch" key={index}>
                <div className="member">
                  <img src={teammember.image} className="img-fluid" alt="" />
                  <div className="member-content">
                    <h4 className="text-light">{teammember.name}</h4>
                    <span className="text-success">{teammember.title}</span>
                    <p>{teammember.details}</p>
                    <div className="social">
                      <a href="#"><i className="bi bi-twitter"></i></a>
                      <a href="#"><i className="bi bi-facebook"></i></a>
                      <a href="#"><i className="bi bi-instagram"></i></a>
                      <a href="#"><i className="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Team;
