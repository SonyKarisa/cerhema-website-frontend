// Home.tsx
import styles from "../style/HomeStyle.module.css";
import praise from '../assets/goldenhourworship.jpg';

function Home() {
    return (
        <div className={styles.homeContainer}>
            {/* Section 1: Welcome & Service Times */}
            <section className={styles.introSection}>
                <h2 className={styles.centerItems}>Welcome to CeRhema Church</h2>
                <p className={styles.introText}>
                    A place of hope, faith, and community.<br />
                    Join us in fellowship and spiritual growth.
                </p>
                <div className={styles.serviceTimes}>
                    <h3>Service Times</h3>
                    <ul>
                        <li>Sunday Worship: <strong>10:00 AM</strong></li>
                        <li>Wednesday Prayer: <strong>7:00 PM</strong></li>
                    </ul>
                </div>
                <img className={styles.homeImage} src={praise} alt="Church members worshiping" />
            </section>

            {/* Section 2: Upcoming Events */}
            <section className={styles.eventsSection}>
                <h3>Upcoming Events</h3>
                <div className={styles.eventCard}>
                    <h4>Solution Nights</h4>
                    <p>
                        Every Friday at <strong>7:00 PM</strong><br />
                        An evening dedicated to practical answers, prayer, and encouragement.<br />
                        Come with your questions—leave with hope.
                    </p>
                    {/* You can add a calendar component here if you have one */}
                </div>
            </section>

            {/* Section 3: More Information & Location */}
            <section className={styles.infoSection}>
                <h3>More Information & Location</h3>
                <p>
                    Want to learn more? Connect with us for our beliefs, programs, and outreach.
                </p>
                <div className={styles.locationDetails}>
                    <strong>Location:</strong><br />
                    123 Main Street, [City], [State]<br />
                    Find us at the corner of Main & Elm.<br />
                    Parking available behind the church.
                </div>
                <div className={styles.contactDetails}>
                    <strong>Contact us:</strong><br />
                    <a href="mailto:info@cerhema.org">info@cerhema.org</a> | <a href="tel:1234567890">(123) 456-7890</a>
                </div>
            </section>
        </div>
    );
}

export default Home;
