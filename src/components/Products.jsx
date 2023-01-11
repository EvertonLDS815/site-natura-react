import { HomeProducts } from "../styles/styles";
import BoxProducts from "./BoxProducts";

function Products() {

    return (
        <HomeProducts className="products" id="products">
            <div className="heading">
                <h2>Produtos mais procurados</h2>
            </div>
            <div className="products-container">
                {/* Box 1 */}
                <BoxProducts
                    name="kaiak"
                    linkImage="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRemGdwlWReEFlu-XCnLN_pKYfm3SQ8XRVKBzTMk672ZpUXemUHovS_T7xUX34MRWU5RjnujbcFjA&usqp=CAc"
                    value="104,90"
                    categ="Colônias" />
                {/* Box 2 */}
                <BoxProducts
                    name="Essencial Exclusivo"
                    linkImage="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSaowQVHQrXInjeFLZLJ-vGPIZcNah7Nu-P15y5yTkANLWcxA4ZdDKmuWxrOtkhid7RSdA_6z092A&usqp=CAc"
                    value="149,90"
                    categ="Perfumes" />
                {/* Box 3 */}
                <BoxProducts
                    name="Kriska"
                    linkImage="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQR8bf-XghMVsvWUxCz7J_mt17u6TsYkP1cmpgHk0Bcf-5i2nS8_67Jg9lk7TM8-NRIVzpphgmi0rU&usqp=CAc"
                    value="80,33"
                    categ="Colônias" />
                {/* Box 4 */}
                <BoxProducts
                    name="Ilia"
                    linkImage="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQY9_QCTLEfURzbejXn1QBcXhdyXsYVdAClqMDsV2Y4birX-0FJAx4gsKk-wR2bw_vwsf0IcRXP9g&usqp=CAc"
                    value="93,90"
                    categ="Perfumes" />
                {/* Box 5 */}
                <BoxProducts
                    name="Biografia"
                    linkImage="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRvd1RlAffjoBPze69ck7FaDeAwRckSy6cnNvX5fIoz31KWvFBDo5NkByhmDpHBUbMBy8W-G0CteCM&usqp=CAc"
                    value="72,59"
                    categ="Colônias" />
                {/* Box 6 */}
                <BoxProducts
                    name="Humor"
                    linkImage="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSR8Q_vs67n1_KebRiXr7wYE5uJeInvF9_8S19E-5P-wyGOXg95RYaJdvUSvD8R5f83XTDs4F36Rw&usqp=CAc"
                    value="69,00"
                    categ="Colônias" />
            </div>
            <div className="align-seeplus">
                <a className="seeplus" href="#nada">Ver mais</a>
            </div>
        </HomeProducts>
    )
}

export default Products;