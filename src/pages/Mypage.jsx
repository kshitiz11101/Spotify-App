import { useEffect, useState } from "react";
import { Search } from "../components/Search";
import { Songs } from "../components/Songs";
import { Header } from "../components/Header";
// import { Login } from "../components/Login";
// import { Register } from "../components/Register";
import axios from "axios";
// import axios from "axios";
// import { Typography } from "@mui/material";
export const Mypage = () => {
         const [allsongs,setSong]=useState([]);
         const fetchSongs=async()=>{
            try {
                const response = await axios.get('https://itunes.apple.com/search?term=daler+mehndi&limit=25');
                console.log('Data is ', response.data);
                setSong(response.data.results);
              } catch (error) {
                console.error('Error fetching songs:', error);
              }
            };
          
            useEffect(() => {
              fetchSongs();
            }, []);
  return (
      <div className="container" style={{ width: "500px" }}>
        <Header />
      <Search />
      <Songs songs={allsongs}/>
      {/* <Typography>Register</Typography> */}
      {/* <Login/> */}
      {/* <Register /> */}
    </div>
  );
};

