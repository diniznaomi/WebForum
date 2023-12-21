import { Link } from "react-router-dom";
import "./Cards.css";
import { sportsFutebolDataMock } from "../../Utils/mocks/sportsFutebolDataMock";

export const Cards = () => {
	return (
		<div className="container p-0">
			<div className="row cardContainer ">
				{sportsFutebolDataMock.map((c, key) => {
					return (
						<div className="col-12 p-0" key={key}>
							<div key={key}>
								<div className="mt-4">
									<div className="row">
										{c.games.map((game, key) => {
											return (
												<div
													className="col-md-5 col-lg-4 col-xl-4 col-12 p-0"
													key={key}
												>
													<div>
														<div
															class="card border-0 mt-3 p-0 cardStyle"
															style={{ width: "90%" }}
														>
															<Link
																to={`/cardPage/${game.id}`}
																state={{ content: game }}
																className="linkItem"
															>
																<div>
																	{game.images && (
																		<div>
																			<img
																				className="d-block w-100 slideImg p-2 imageStyle"
																				src={game.images[0]}
																				alt="team"
																			></img>
																		</div>
																	)}
																	<div className="card-body text-start cardContentStyle">
																		<div className="d-flex justify-content-between">
																			<p className="fw-bold m-0">
																				{game.title}
																			</p>
																		</div>

																		<p className="mt-1 mb-0">
																			<ul class="nav justify-content-center probsStyle">
																				<li class="nav-item">
																					<span
																						class="nav-link p-2 propsBorderRight"
																					>
																						{game.team1}:{" "}
																						<span className="probWinner">
																							{game.probabilities.team1}
																						</span>
																					</span>
																				</li>
																				<li class="nav-item ">
																					<span
																						class="nav-link p-2 propsBorderCenter"
																					>
																						Empate:{" "}
																						<span className="probTie">
																							{game.probabilities.tie}
																						</span>
																					</span>
																				</li>
																				<li class="nav-item ">
																					<span
																						class="nav-link p-2 propsBorderLeft"
																					>
																						{game.team2}:{" "}
																						<span className="probLoser">
																							{game.probabilities.team2}
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
												</div>
											);
										})}
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
