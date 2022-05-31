export const msalConfig =
{
    auth: {
        clientId: "0ca77bae-04a1-42a1-a1e1-1d28d27d66e0", 
        authority: "https://login.microsoftonline.com/93c16d38-d1d7-4702-ab62-e9d16603afe5",
        redirectUri: "http://localhost:3000/"
    },
cache: {
    cacheLocation: "sessionStorage"
}
};

export const loginRequest ={
    scopes: ["api://0ca77bae-04a1-42a1-a1e1-1d28d27d66e0/Portfolios.Read"]
}

export const myService = {
    myWeatherEndpoint: "https://localhost:7135/WeatherForecast",
    myPortfolioEndpoint: "https://localhost:7135/portfolios"
}