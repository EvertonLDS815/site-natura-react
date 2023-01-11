import { Footerpage } from "../styles/styles";
import Copyright from "./Copyright";

function Footer() {

    return (
        <>
            <Footerpage className="footer">
                <div className="footer-box">
                    <h2>Natura - Josefa Lino</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, alias.</p>
                    <div className="social">
                        <a href="#facebook"><i className="bx bxl-facebook"></i></a>
                        <a href="#email"><i className='bx bx-envelope'></i></a>
                        <a href="https://instagram.com/jl_natura01" target="_blank"><i className="bx bxl-instagram"></i></a>
                        <a href="https://wa.me/5587991149141"><i className="bx bxl-whatsapp"></i></a>
                    </div>
                </div>
                <div className="footer-box">
                    <h3>Suporte</h3>
                    <li><a href="#">Produtos</a></li>
                    <li><a href="#">Ajuda e Suporte</a></li>
                    <li><a href="#">Privacidade</a></li>
                    <li><a href="#">Termos de Uso</a></li>
                    <li><a href="#">Vendas</a></li>
                </div>
                <div className="footer-box">
                    <h3>Exibição</h3>
                    <li><a href="#">Recursos</a></li>
                    <li><a href="#">Carreira</a></li>
                    <li><a href="#">Blog ou Posts</a></li>
                    <li><a href="#">Saiba mais</a></li>
                </div>
                <div className="footer-box">
                    <h3>Contato</h3>
                    <div className="contact">
                        <span><i className="bx bxs-map"></i>250 New York City, USA 10001</span>
                        <span><i className="bx bxs-phone"></i>+1 414 735 8662</span>
                        <span><i className="bx bxs-envelope"></i>coffee@shop.com</span>
                    </div>
                </div>
            </Footerpage>
            <Copyright />
        </>
    )
}

export default Footer;