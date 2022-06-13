export const msalConfig =
{
    auth: {
        clientId: "0ca77bae-04a1-42a1-a1e1-1d28d27d66e0", 
        authority: "https://login.microsoftonline.com/93c16d38-d1d7-4702-ab62-e9d16603afe5",
        redirectUri: window.location.href.indexOf("localhost") >= 0 ? 
                        window.location.href.split("/").slice(0,3).join("/") : 
                        "https://josan84.github.io/StyraPoCWebUI/"
    },
cache: {
    cacheLocation: "sessionStorage"
}
};

export const loginRequest ={
    scopes: ["api://0ca77bae-04a1-42a1-a1e1-1d28d27d66e0/Portfolios.Read"]
}

export const myService = {
    myFreePortfoliosEndpoint:
                           // "http://localhost:7135/freeportfolios" 
                            //"https://opastyrawebapi-appservice.azurewebsites.net/freeportfolios"
                            "http://20.228.234.252:8083/freeportfolios"
                            ,
    myPortfolioEndpoint: 
                         // "https://localhost:7135/portfolios" :
                           // "https://opastyrawebapi-appservice.azurewebsites.net/portfolios"
                           "http://20.228.234.252:8083/portfolios"
}