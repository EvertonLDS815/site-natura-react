import yuna from "../assets/yuna.png";
import { Homepage } from "../styles/styles";

function Home() {
    return (
        <Homepage className="home" id="home" imgUrl="../assets/bg.avif">
            <div className="home-text">
                <h1>comece o seu dia <br /> aproveitando</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti velit, impedit nesciunt molestias explicabo saepe ratione consequuntur porro reiciendis tempore eos cum quia provident corporis nihil aut iusto. Mollitia, facere.</p>
                <a href="#" className="btn">Compre Agora</a>
            </div>
            <div className="home-img">
                <img src={yuna} alt="" />
            </div>
        </Homepage>
    )
};

export default Home;