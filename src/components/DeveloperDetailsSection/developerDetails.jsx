import styles from './devDetails.module.css';

function DevDetails() {
    return (
        <>
            <div className={styles.details}>
                <div className={styles.devName}>
                    <img alt="Developer logo" height="50" src="https://storage.googleapis.com/a1aa/image/Xsg62s0mpuhB4PlpBtjoYaRJ_R7-nvgbUIBfy6wQTYo.jpg" width="50" />
                    <div>
                        <h2>
                            Developer Name
                        </h2>
                        <p>
                            Address, City, UAE
                        </p>
                    </div>
                </div>
                <p>
                    With a net asset value of AED 17.5 Bn (USD 4.8 Bn),
                    Emaar Properties is among the most admired and valuable real
                    estate development companies in the world. Emaar, 
                    with its established competencies in real estate, 
                    retail and shopping malls, hospitality, and leisure, 
                    shapes new lifestyles through its focus on design excellence, 
                    build quality, and timely delivery.
                </p>
                <p>
                    Emaar’s leadership team is comprised of the industry’s most experienced leaders, 
                    who have made our place as one of the world’s greatest real estate and lifestyle developers.
                </p>
                <p>
                    *As of 31st December 2023, and based on the information available at the time of publication. 
                    Emaar does not warrant the accuracy of these figures and disclaims any liability for any errors or omissions.
                </p>
                <div className={styles.warranties}>
                    <h3>
                        Warranties
                    </h3>

                    <p>
                        Developer's warranties and guarantees
                    </p>
                </div>
                <div>
                    <h3>
                        Performance
                    </h3>
                    <p>
                        Developer's Performance Record
                    </p>
                </div>
                <div>
                    <div>
                        <span>
                            3
                        </span>
                        <span>
                            / 5
                        </span>
                    </div>
                </div>
                <h3>
                    Properties by Developer
                </h3>
                <div>
                    <img alt="Aerial view of modern skyscrapers by the waterfront" height="200" src="https://storage.googleapis.com/a1aa/image/i00v9-NIYHKRKnQsWAuwwk2n7tGSVTfJ0mWYdB0aq4Q.jpg" width="300" />
                    <p>
                        Property Name
                    </p>
                    <p>
                        Location, City | Developer
                    </p>
                </div>
            </div>
        </>
    )
}

export default DevDetails;