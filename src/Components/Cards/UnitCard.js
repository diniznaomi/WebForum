import { Link } from "react-router-dom";

export const UnitCard = (data, key) => {
    console.log(data)

    return(
			<div>
				<div
				class="card border-0 mt-3 p-0 cardStyle"
				style={{ width: "100%" }}
				>
                    <Link
                        to={`/cardPage/${data.game?.id}`}
                        state={{ content: data.game }}
                        className="linkItem"
                        key={key}
                        >
                            <div>
                                {data.game.images && (
                                    <div>
                                        <img
                                            className="d-block w-100 slideImg p-2 imageStyle"
                                            src={data.game.images[0]}
                                            alt="team"
                                        ></img>
                                    </div>
                                )}
                                <div className="card-body text-start cardContentStyle">
                                    <div className="d-flex justify-content-between">
                                        <p className="fw-bold m-0">
                                            {data.game.title}
                                        </p>
                                    </div>
                                    <p className="mt-1 mb-0">
                                        <ul class="nav justify-content-center probsStyle">
                                            <li class="nav-item">
                                                <span
                                                    class="nav-link p-2 propsBorderRight"
                                                >
                                                    {data.game.team1}:{" "}
                                                    <span className="probWinner">
                                                        {data.game.probabilities?.team1}
                                                    </span>
                                                </span>
                                            </li>
                                            <li class="nav-item ">
                                                <span
                                                    class="nav-link p-2 propsBorderCenter"
                                                >
                                                    Empate:{" "}
                                                    <span className="probTie">
                                                        {data.game.probabilities?.tie}
                                                    </span>
                                                </span>
                                            </li>
                                            <li class="nav-item ">
                                                <span
                                                    class="nav-link p-2 propsBorderLeft"
                                                >
                                                    {data.game.team2}:{" "}
                                                    <span className="probLoser">
                                                        {data.game.probabilities?.team2}
                                                    </span>
                                                </span>
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                    </Link>

                </div>
            </div>
    )

}