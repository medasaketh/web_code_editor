import Home from "./Home";


import DataProvider from "../context/DataProvider";

function Home1(){
    return(
        <DataProvider>
            <Home/>
        </DataProvider>
    )
}

export default Home1