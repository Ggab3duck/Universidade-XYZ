import Campus from "./assets/img/campus.jpg"
import Campus2 from "./assets/img/campus2.jpg"
import Classroom from "./assets/img/classroom.jpg"
import Library from "./assets/img/library.png"
import "./styles/Carrosel.css"
function Carrolsel() {
    return (
        <div>
            <div className="slider">
                <div className="container">
                    <input type="radio" name="btn-radio" id="radio1"/>
                    <input type="radio" name="btn-radio" id="radio2"/>
                    <input type="radio" name="btn-radio" id="radio3"/>
                    <input type="radio" name="btn-radio" id="radio4"/>
                    {/* botoes de navegação */}
                    <div className="main_banner SliderOne">
                        <img src={Campus} alt="" />
                    <div className="main_banner SliderTwo">
                        <img src={Campus2} alt="img2" />
                    </div>
                    <div className="main_banner SliderThree">
                        <img src={Classroom} alt="img3" />
                    </div>
                    <div className="main_banner SliderFour">
                        <img src={Library} alt="img4" />
                    </div>

                    <div className="nav-auto">
                        <div className="auto-button1"></div>
                        <div className="auto-button2"></div>
                        <div className="auto-button3"></div>
                        <div className="auto-button4"></div>
                    </div>

                    <div className="nav-manual">
                        <label htmlFor="radio1" className="botao-manual"></label>
                        <label htmlFor="radio2" className="botao-manual"></label>
                        <label htmlFor="radio3" className="botao-manual"></label>
                        <label htmlFor="radio4" className="botao-manual"></label>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carrolsel