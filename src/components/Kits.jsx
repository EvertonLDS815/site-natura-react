import { Kitspage } from "../styles/styles";

function Kits() {
    return (
        <Kitspage className="kits" id="kits">
            <h2>Nossos Kits</h2>
            <div className="kits-grid">
                <div className="kits-img">
                    <img src="https://static.natura.com/cdn/ff/kl1uPPugtMUd2iWxDhkpXzvire3gXSRzDj8aTJF2u0Q/1670996184/public/products/120424_1_8.jpg" alt="" />
                </div>
                <div className="kits-text">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum unde tenetur consectetur voluptates optio iste autem eius perferendis distinctio ad maiores repudiandae voluptatem harum animi, culpa pariatur, voluptas praesentium nobis.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe vel accusantium, incidunt magnam, maxime libero error temporibus officia praesentium debitis maiores fugiat omnis dicta qui quas cupiditate. Atque, neque possimus!
                        Deserunt tempore fugiat.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum unde tenetur consectetur voluptates optio iste autem eius perferendis distinctio ad maiores repudiandae voluptatem harum animi, culpa pariatur.</p>
                    <a href="#" className="btn">Learn More</a>
                </div>
            </div>
        </Kitspage>
    )
};

export default Kits;