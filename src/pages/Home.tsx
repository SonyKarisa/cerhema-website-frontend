import styles from "../style/HomeStyle.module.css";
import praise from '../assets/goldenhourworship.jpg';

function Home(){
    return(
        <div className={styles.homeContainer}>
            <h2 className={styles.centerItems}>Welcome to CeRhema Church</h2>
            <section>{/*Image or video intro or in background */}
                <h3></h3>
                <img className={styles.homeImages} src={praise} alt="Church members worshiping"/>
            </section>
            <section> {/*EVENTS*/}
                <h3>Upcoming Events</h3>
                <h4>Solution Night</h4>
               {/*insert calender */}
            </section>
          <section> {/*Attend Service */}
            <h3></h3>
          </section>
        </div>
    );
}

export default Home;