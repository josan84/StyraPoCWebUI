import "./App.css";
import { Button, Card, Row } from "react-bootstrap";
import { myService } from "./auth/msalConfig";

export default function App() {

  const getData = () => {
   
    const callGetWeather = () => {
     
      const fetchWeatherEndpoint = async () => await fetch(myService.myEndpoint);

      fetchWeatherEndpoint().then(response => response.json()).then(data => console.log(data[0].date));
      
    };
    
    // get token

    callGetWeather();
  };

  return (
    <Card border="primary">
      <Card.Header>Bla bla</Card.Header>
      <Card.Body>
        <Row>
          <Button
            variant="primary"
            as="input"
            type="button"
            value="Get my data"
            onClick={getData}
          ></Button>
        </Row>
      </Card.Body>
    </Card>
  );
}