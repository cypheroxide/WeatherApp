/*import Google font*/
@import url('https://fonts.googleapis.com/css2?family=Sedan+SC&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Sedan SC", serif;
}
body{
    background: #e3f2fd;
}
h1{
    color: #fff;
    padding: 18px 0;
    text-align: center;
    font-size: 1.7m;
    background: #5372f0;
}
.container{
    display: flex;
    gap: 35px;
    padding: 30px;
}
.weather-input{
    width: 550px;
}
.weather-input input{
    width: 100%;
    height: 46px;
    outline: none;
    padding: 0 15px;
    margin: 10px 0 15px 0;
    font-size: 1.07rem;
    border-radius: 4px ;
    border: 1px solid #ccc;
}
.weather-input .separator{
    height: 1px;
    width: 10px;
    margin: 25px 0;
    background: #bbb;
    display: flex;
    align-items: center;
    justify-content: center;
}
.weather-input .separator::before{
    content: "or";
    color: #6c757d;
    font-size: 1.18rem;
    padding: 0 15px;
    margin: -4px;
    background: #e3f2fd;
}
.weather-input button{
    width: 100%;
    padding: 10px 0;
    cursor: pointer;
    outline: none;
    border: none;
    color: #fff;
    font-size: 1rem;
    border-radius: 4px;
    background: #5372f0;
}
.weather-input .location-btn{
    background: #6c757d;
}
.weather-data{
    width: 100%;
}
.current-weather{
    color: #fff;
    display: flex;
    border-radius: 5px;
    padding: 20px 70px 20px 20px;
    background: #5372f0;
    justify-content: space-between;
}
.current-weather h2{
font-size: 1.7rem;     
}
.weather-data h4{
    margin-top: 12px;
    font-size: 1rem;
    font-weight: 500;
}
.current-weather .icon img{
    max-width: 120px;
    margin-top: -15px;
}
.current-weather .icon h4{
    margin-top: -10px;
    text-transform: capitalize;
}
.days-forcast{
    font-size: 1.5rem;
    margin: 20px 0;
}
.weather-cards{
    display: flex;
    gap: 20px;
}
.weather-cards .card{
    list-style: none;
    color: #fff;
    padding: 18px 16px;
    border-radius: 5px;
    background: #6c757d;
    width: calc(100% / 5);
}
.weather-cards .card img{
    max-width: 70px;
    margin: 5px 0 -12px 0;
}

@media (max-width: 1440px){
    .weather-data .current-weather{
        padding: 20px;
    }
    .weather-cards{
        flex-wrap: wrap;
    }
    .weather-cards .card{
        width: calc(100% / 4 -15px);
    }
}
@media (max-width: 1200px){
    .weather-cards .card{
        width: calc(100% / 3 -15px);
    }
}
@media (max-width: 950px){
    .weather-input{
        width: 450px;
    }
    .weather-cards .card{
        width: calc(100% / 2 -10px);
    }
}
@media (max-width: 750px){
    .container{
        flex-wrap: wrap;
        padding: 15px;
    }
    .weather-input{
        width: 100%;
    }
}
