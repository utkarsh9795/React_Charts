import './App.css';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip, AreaChart, Area, BarChart, Bar } from "recharts";

const pdata = [
{
  name: 'Python',
  student: 13,
  fees : 10
},
{
  name: 'Javascript',
  student: 15,
  fees : 12
},
{
  name: 'PHP',
  student: 5,
  fees : 10
},
{
  name: 'C#',
  student: 9,
  fees : 4
},
{
  name: 'C++',
  student: 10,
  fees : 8
},
{
  name: 'Java',
  student: 10,
  fees : 5
},
];
function App() {
  return (
    <>
    <h1 className='chart-heading'>Line Chart</h1>
    <ResponsiveContainer width="100%" aspect={3}>
     <LineChart data={pdata} width={500} height={500} margin={{top:5, right:150, left:20, bottom:5}}>
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis dataKey="name" interval={'preserveStartEnd'} />
      <YAxis />
      <Tooltip contentStyle={{backgroundColor : "yellow"}}/>
      <Legend />
     <Line type="" dataKey="student" stroke='red'activeDot={{r:8}} />
     <Line type="" dataKey="fees" stroke='purple' activeDot={{r:8}}/>
     </LineChart>
    </ResponsiveContainer>

    <h1 className='chart-heading'>Area Chart</h1>
    <ResponsiveContainer width="100%" aspect={3}>
      <AreaChart
      width={500}
      height={300}
      data={pdata}
      margin={{
        top:5,
        right: 30,
        left : 20,
        bottom: 5,
      }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="student" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>

    <h1 className='chart-heading'>Bar Chart</h1>
    <ResponsiveContainer width="100%" aspect={3}>
      <BarChart
      width={500}
      height={300}
      data={pdata}
      margin={{
        top:5,
        right: 30,
        left : 20,
        bottom: 5,
      }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="student" fill='#8884d8' />
        <Bar dataKey="fees" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
    </>
  );
}

export default App;
