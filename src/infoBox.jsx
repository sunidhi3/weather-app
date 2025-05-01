import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){
    const INIT_URL="https://www.weather.gov/images/safety/duststorm.png";

    let HOT_URL="https://th.bing.com/th/id/OIP._6UW1704oYjKYfVcf84iMgHaEc?w=276&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";
    let COLD_URL="https://th.bing.com/th/id/OIP.0PLXi5gcWNPJK_CJ-65apQHaEo?w=280&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";
    let RAIN_URL="https://th.bing.com/th/id/OIP.4Yvy2pUo5zAtKM0xOAuQqQHaEo?w=285&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";

    return(
        <div className="infoBox">
          
          <div className='cardContainer'>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>40?RAIN_URL:info.temp>15 ? HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.City}
          {info.humidity>40?ThunderstormIcon:info.temp>15 ? SunnyIcon:AcUnitIcon}
          
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p>Temperature: {info.temp}&deg;C</p>
         <p>Humidity: {info.humidity}</p>
         <p>Min temp: {info.tempMin}&deg;C</p>
         <p>Max temp: {info.tempMax}&deg;C</p>
         <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>

        </div>
    );
};