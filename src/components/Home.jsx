import React, { useEffect, useState } from "react";
import { About,Hero} from "./";
import axios from "axios";




const Home = () => {
  const [data,setData] = useState([])
 useEffect(()=>{
  axios.get('http://localhost:8081/prix')
  .then(res => setData(res.data))
  .catch(err => console.log(err));
 })
  return (
    <div>
      <Hero />
      <About />
      {/* <Experience />
      <Tech />
      <h1>List Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((article, key) =>
                        <tr key={key}>
                            <td>{article.Prix}</td>
                            
                            
                            
                        </tr>
                    )}
                    
                </tbody>
            </table>
      
      <Works />
      <Feedbacks />
      
     
        
        {data.map((article) => {
   // Assign the value inside the map function
  adminmdp = article.Nom;
})} */}
        
        
      
     
    
      
  </div>
  );

};
export default Home;








