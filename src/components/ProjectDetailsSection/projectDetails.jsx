import styles from './projectDetails.module.css';

function ProjectDetails() {
    return (
        <div className={styles.detailsPage}>
            <div className={styles.details}>
                <h2>
                    Project Name
                </h2>
                <p >
                    Community, Emirate, UAE
                </p>
                <p>
                    Ideally positioned on the tip of Creek Island and only steps away from the shimmering waters,
                    Address Harbour Point occupies a prime location within Dubai Creek Harbour.
                    A short walk along the promenade gets you to the 5-star Creek Marina in 5 minutes,
                    while a short drive via the island’s circular boulevard takes you to Downtown Dubai and Dubai International Airport in less than 20 minutes.
                </p>

                <p>
                    In addition to overlooking the marvelous creek,
                    these luxurious homes offer you easy access to the 5-star Creek Marina and lush Island Park,
                    where you can revel in art installations, colourful attractions,
                    wonderful nature and other experiences for the whole family.
                </p>

                <h2 className={styles.features}>
                    FEATURES AND AMENITIES
                </h2>
                <div className={styles.featuresList}>
                    <div>

                        <h3>
                            Units
                        </h3>
                        <ul>
                            <li>
                                Kitchen Appliances
                            </li>
                            <li>
                                Air Conditioning
                            </li>
                            <li>
                                Balconies
                            </li>
                            <li>
                                View of Dubai Canal
                            </li>
                            <li>
                                Views of Dubai City
                            </li>
                            <li>
                                Designated Parking
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>
                            Building
                        </h3>
                        <ul>
                            <li>
                                24 hr Security
                            </li>
                            <li>
                                6 High Speed Lifts
                            </li>
                            <li>
                                Gardens
                            </li>
                            <li>
                                Electric Car Charging
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="font-semibold">
                            Recreation
                        </h3>
                        <ul class="list-none mt-2 text-gray-700">
                            <li>
                                <i class="fas fa-check-circle text-red-600">
                                </i>
                                Shared Swimming Pool
                            </li>
                            <li>
                                <i class="fas fa-check-circle text-red-600">
                                </i>
                                Sun Deck
                            </li>
                            <li>
                                <i class="fas fa-check-circle text-red-600">
                                </i>
                                Children's Play Area
                            </li>
                            <li>
                                <i class="fas fa-check-circle text-red-600">
                                </i>
                                Gym
                            </li>
                            <li>
                                <i class="fas fa-check-circle text-red-600">
                                </i>
                                Sauna
                            </li>
                            <li>
                                <i class="fas fa-check-circle text-red-600">
                                </i>
                                Padel Tennis Courts
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="font-semibold">
                            Locality
                        </h3>
                        <ul class="list-none mt-2 text-gray-700">
                            <li>
                                <i class="fas fa-check-circle text-red-600">
                                </i>
                                15 mins from Downtown Dubai
                            </li>
                            <li>
                                <i class="fas fa-check-circle text-red-600">
                                </i>
                                15 mins from DXB Airport
                            </li>
                            <li>
                                <i class="fas fa-check-circle text-red-600">
                                </i>
                                5 mins from Dubai Metro
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;
