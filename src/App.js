
import './App.css';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Card from "@mui/material/Card"
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
 import CssBaseLine from '@mui/material/CssBaseline'
 import Grid from '@mui/material/CssBaseline'
 import Toolbar from '@mui/material/Toolbar';
 


import ContainedButton from './components/ContainedButton';
import MyAppBar from './modules/MyAppBar';

 



import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';


function App() {
  return (
    <div className="App">
      <MyAppBar/>
      <ContainedButton/>
       <Typography  mt={3} >Any Text material </Typography>
        <CssBaseLine/>
    </div>
  );
}

export default App;
