import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Col, Row } from "react-bootstrap";
import { loginRequest, myService } from "./auth/msalConfig";
import { useMsal } from "@azure/msal-react";
// test
export default function App() {
  const { instance, accounts } = useMsal();

  const request = {
    ...loginRequest,
    account: accounts[0],
  };

  const getWeatherData = () => {
    const callGetWeather = () => {
      const fetchWeatherEndpoint = async () =>
        await fetch(myService.myWeatherEndpoint);
      fetchWeatherEndpoint()
        .then((response) => response.json())
        .then((data) => console.log(data[0].date));
    };

    callGetWeather();
  };

  const getPortfoliosData = () => {
    const callGetPortfolios = (token) => {
      const headers = new Headers();
      const bearer = `Bearer ${token}`;

      headers.append("Authorization", bearer);

      const options = {
        method: "GET",
        headers,
      };

      const fetchPortfoliosEndpoint = async () =>
        await fetch(myService.myPortfolioEndpoint, options);
      fetchPortfoliosEndpoint()
        .then((response) => response.json())
        .then((data) => console.log(data[0].date));
    };

    instance
      .acquireTokenSilent(request)
      .then((response) => {
        callGetPortfolios(response.accessToken);
      })
      .catch((e) => {
        console.error(e);
        instance.acquireTokenRedirect(request).then((response) => {
          callGetPortfolios(response.accessToken);
        });
      });
  };

  return (
    <div class="container">
       <div class="row align-items-start">

      <Row xs={1} md={4} className="g-4">
        <Col>
          <Card border="primary" style={{ width: "18rem" }}>
            <Card.Header>Weather</Card.Header>
            <Card.Body>
              <Button
                variant="primary"
                as="input"
                type="button"
                value="Get Weather data"
                onClick={getWeatherData}
              ></Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card border="primary" style={{ width: "18rem" }}>
            <Card.Header>Portfolios</Card.Header>
            <Card.Body>
              <Button
                variant="primary"
                as="input"
                type="button"
                value="Get Portfolios"
                onClick={getPortfoliosData}
              ></Button>
            </Card.Body>
            <Card.Body>
              <Button
                variant="secondary"
                as="input"
                type="button"
                value="Update Portfolios"
                onClick={getPortfoliosData}
              ></Button>
            </Card.Body>
            <Card.Body>
              <Button
                variant="success"
                as="input"
                type="button"
                value="Create Portfolios"
                onClick={getPortfoliosData}
              ></Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card border="primary" style={{ width: "18rem" }}>
            <Card.Header>Positions</Card.Header>
            <Card.Body>
              <Button
                variant="primary"
                as="input"
                type="button"
                value="Get Positions"
                onClick={getPortfoliosData}
              ></Button>
            </Card.Body>
            <Card.Body>
              <Button
                variant="secondary"
                as="input"
                type="button"
                value="Update Positions"
                onClick={getPortfoliosData}
              ></Button>
            </Card.Body>
          </Card>
        </Col>

        <Col></Col>
      </Row>
      </div>
    </div>
  );
}
