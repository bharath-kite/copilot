import style from "./home.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
const Home = ()=>{
    return(
        <div>
            {/* Navigation Bar */}
            <nav className={style.header}>
                <section className={style.left_header}>
                    <p><aside></aside></p>
                    <p className={style.header_text}>Copilot</p>
                </section>
                <div className={style.font_Icon}>
                    <FontAwesomeIcon icon={faXmark} />  
                </div>
            </nav>
            {/* First Conversation */}
            <section className={style.chat}>
                <div className={style.outerBox}>
                    <aside className={style.chat_profile}>
                        <p className={style.status}>Just Now</p>
                        <p className={style.sender}>You</p>
                        <p><div></div></p>
                    </aside>
                    <article className={style.chat_1}>
                        <p>Show me the critical incident with open status for nexus Saas application</p>
                    </article>
                </div>
            </section>
            {/* Second Conversation */}
            <div className={style.chat1}>
                <article className={style.outerBox1}>
                    <section className={style.chat_profile1}>
                        <p><div></div></p>
                        <p className={style.sender1}>Copilot</p>
                        <p className={style.status1}>Just Now</p>
                    </section>
                    <aside className={style.chat_2}>
                        <p>Here are the currently open incidents from Nexus SaaS:</p>
                        <div className={style.error_status}>
                            <p className={style.error}><section></section>High Traffic Alert: Traffic Volume Exceeded Threshold on <p>nexust-frontend</p> <p className={style.time}> <article></article> 08:50 AM</p></p>
                            <p className={style.error}><section></section>Error Rate Alert: Error Frequency Surpassed Threshold on <p>nexust-frontend</p> <p className={style.time}> <article></article> 08:50 AM</p></p>
                        </div>
                    </aside>
                </article>
            </div>
            {/* Third Conversation */}
            <section className={style.chat2}>
                <div className={style.outerBox}>
                    <aside className={style.chat_profile}>
                        <p className={style.status}>Just Now</p>
                        <p className={style.sender}>You</p>
                        <p><div></div></p>
                    </aside>
                    <article className={style.chat_1}>
                        <p>What are the latest updates to associated resources?</p>
                    </article>
                </div>
            </section>
            {/* Fourth Conversation */}
            <div className={style.chat3}>
                <article className={style.outerBox1}>
                    <section className={style.chat_profile1}>
                        <p><div></div></p>
                        <p className={style.sender1}>Copilot</p>
                        <p className={style.status1}>Just Now</p>
                    </section>
                    <aside className={style.chat_2}>
                        <p>See the data below for recent changes to related resources</p>
                        <div className={style.error_status}>
                            <p className={style.error}> <p> <section className={style.img1}></section>nexus-frontend-deployment </p> developed by <p className={style.small}> <section className={style.img2}></section> Jaya Krishnan</p> <p className={style.time}> <article></article> 08:50 AM</p></p>
                            <p className={style.error}> <p className={style.larger}> <section className={style.img1}></section>vnet-nexussaas-prod-eastus-prod </p> configuration updated by <p className={style.small}> <section className={style.img2}></section> Jaya Krishnan</p> <p className={style.time}> <article className={style.send}></article> 08:50 AM</p></p>
                        </div>
                    </aside>
                </article>
            </div>
        </div>
    )
}
export default Home