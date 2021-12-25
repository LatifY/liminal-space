import { useEffect, useState } from "react";
import { data } from "./data";
import Footer from "./Footer";

export default function App() {
    const [url, setUrl] = useState("01.jpg");
    const [number, setNumber] = useState(0)

    useEffect(() => {
        setPhoto();
    }, []);

    const setPhoto = () => {
        const randomNumber = Math.floor(Math.random() * data.length);
        if(randomNumber == number){
            console.log("ey hold on")
            setPhoto()
            return
        }
        console.log("its ok now")
        setNumber(randomNumber)
        setUrl(data[randomNumber].url);
    };

    return (
        <div className="App">
            {/* <h1>Liminal Space</h1> */}
            <img
                id="image"
                onClick={() => setPhoto()}
                src={require("./images/" + url)}
            />
            <br/>

            {/* <iframe className="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/fMu02_v62aU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            
            <Footer />
        </div>
    );
}
