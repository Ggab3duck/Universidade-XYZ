import Menu from "./Menu"
import "../styles/Home.css"
import Carrosel from "../Carrosel.jsx"
function Home() {
    return (
        <div>
            <div className="title">
                <h1>Universidade XYZ</h1>
            </div>
            <div className="introduction">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid nostrum eaque officiis impedit! Tempora laboriosam animi dolore magni doloribus amet vitae assumenda nostrum earum dignissimos, debitis quaerat non adipisci obcaecati fugiat corporis incidunt? Quia suscipit praesentium vitae iusto, quibusdam nam quod illum nostrum dolorem at unde facere, nesciunt molestias, non dignissimos vero rerum? Ipsa perferendis magnam optio saepe impedit dolorem. Quae, assumenda, molestias quos officiis officia ipsum sed aliquam odit distinctio esse iure dolorem vero aperiam possimus. Quidem labore odit quam doloribus dolorem, exercitationem ipsam vel omnis repellat minima quis laudantium molestiae consequuntur facilis maxime cumque, dolorum sed et culpa facere adipisci. Exercitationem nobis sit dicta esse consequuntur inventore distinctio molestiae, eveniet laudantium optio non doloribus omnis nihil, repudiandae quod eum nulla veniam nostrum fuga, voluptas cumque? Veritatis eaque modi, quia magni culpa, necessitatibus asperiores perferendis ratione itaque quo inventore totam. Similique cupiditate esse ad dignissimos nemo voluptatum consequatur culpa eveniet expedita laudantium eligendi placeat necessitatibus vitae facere, eum id error asperiores odio quasi aliquid quis dolor consequuntur. Maiores, at deleniti quia dolorum impedit rerum beatae quas blanditiis adipisci odio. Deserunt maiores laudantium fuga totam veritatis repudiandae quidem! Asperiores quidem perferendis, corrupti adipisci error cupiditate itaque, provident beatae vero accusantium sequi dolor, quibusdam est unde eaque delectus iure quo dicta nobis quis velit quas mollitia rem! Repellendus earum sit sequi modi est! Explicabo repellendus quidem cum vitae corrupti eveniet libero fuga. Aliquid, illo vitae voluptatem optio totam numquam ducimus, debitis est voluptatibus voluptate odit repudiandae qui vero impedit perferendis aut?</p>
                {/* <p>A universidade XYZ apresenta amplos profissionais capacitados e preparados para
                seu futuro inovador, além de uma faculdade com alta infraestrutura e orçamento para
                seus estudos. Parcelas acessiveis que cabem em seu bolso, e com integração a certos
                vestibulares</p> */}
            </div>
            <div className="carrosel">
               <Carrosel></Carrosel>
            </div>
            <Menu />
        </div>
    )
}
export default Home