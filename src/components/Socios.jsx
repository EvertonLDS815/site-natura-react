import rev1 from "../assets/rev1.jpg";
import rev2 from "../assets/rev2.jpg";
import rev3 from "../assets/rev3.jpg";
import { SociosPage } from "../styles/styles";

function Socios() {

    return (
        <SociosPage className="customers" id="customers">
            <div className="heading">
                <h2>Sócios</h2>
            </div>
            {/* Container */}
            <div className="customers-container">
                {/* Box 1 */}
                <div className="box">
                    <div className="stars">
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star-half'></i>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci facilis omnis odit veniam cumque quidem molestiae tempora recusandae facere cupiditate, excepturi dolorum quos magni reiciendis enim voluptatum nulla minima! Mollitia?</p>
                    <h2>Josefa Lino</h2>
                    <img src={rev1} alt="rev1" />
                </div>
                {/* Box 2 */}
                <div className="box">
                    <div className="stars">
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star-half'></i>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci facilis omnis odit veniam cumque quidem molestiae tempora recusandae facere cupiditate, excepturi dolorum quos magni reiciendis enim voluptatum nulla minima! Mollitia?</p>
                    <h2>Erika Lino</h2>
                    <img src={rev2} alt="rev2" />
                </div>
                {/* Box 3 */}
                <div className="box">
                    <div className="stars">
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star-half'></i>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci facilis omnis odit veniam cumque quidem molestiae tempora recusandae facere cupiditate, excepturi dolorum quos magni reiciendis enim voluptatum nulla minima! Mollitia?</p>
                    <h2>Everton Lino</h2>
                    <img src={rev3} alt="rev3" />
                </div>
            </div>
        </SociosPage>
    )
}

export default Socios;