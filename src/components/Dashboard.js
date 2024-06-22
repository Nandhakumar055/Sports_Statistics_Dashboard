
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width:100%;
`;

const ChartContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 20px 0;
`;

const Select = styled.select`
  padding:10px;
  background-color: rgb(108, 7, 167);
  color:white;
  border:none;
  border-radius: 10px;
`;


  const  sportsStats = [
      { id: 1, team: "RCB", wins: 12, losses: 2, draws: 1, points: 25 },
      { id: 2, team: "CSK", wins: 7, losses: 4, draws: 3, points: 18 },
      { id: 3, team: "MI", wins: 10, losses: 5, draws: 2, points: 22 },
      { id: 4, team: "LSG", wins: 3, losses: 3, draws: 1, points: 7 },
      { id: 5, team: "GT", wins: 6, losses: 6, draws: 2, points: 14 },
      { id: 6, team: "SRH", wins: 7, losses: 2, draws: 2, points: 16 },
      { id: 7, team: "RR", wins: 9, losses: 7, draws: 2, points: 20 },
      { id: 8, team: "K11P", wins: 8, losses: 4, draws: 3, points: 19 },
      { id: 9, team: "DC", wins: 4, losses: 8, draws: 0, points: 8 },
      { id: 10, team: "KKR", wins: 5, losses: 7, draws: 0, points: 10 }
    ]

  
const Dashboard = () => {
  const [data, setData] = useState([...sportsStats]);
  const [selectedTeam, setSelectedTeam] = useState('');


  const handleTeamChange = (e) => {
    setSelectedTeam(e.target.value);
  };

  const filteredData = selectedTeam ? data.filter(item => item.team === selectedTeam) : data;

  const COLORS = ['rgb(204, 0, 255)', 'rgb(155, 2, 147)', 'orange'];

  return (
    <DashboardContainer>
      <Select onChange={handleTeamChange} value={selectedTeam} >
        <option value="">All Teams</option>
        {data.map(item => (
          <option key={item.id} value={item.team}>{item.team}</option>
        ))}
      </Select>

      <ChartContainer>
        <h2>Team Points</h2>
        <BarChart width={600} height={300} data={filteredData}>
          <XAxis dataKey="team" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="points" fill="purple" />
        </BarChart>
      </ChartContainer>

      <ChartContainer>
        <h2>Win/Loss Ratio</h2>
        <PieChart width={400} height={400}>
          <Pie
            data={filteredData}
            dataKey="wins"
            nameKey="team"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
          >
            {filteredData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Pie
            data={filteredData}
            dataKey="losses"
            nameKey="team"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="#82ca9d"
          >
            {filteredData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ChartContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
