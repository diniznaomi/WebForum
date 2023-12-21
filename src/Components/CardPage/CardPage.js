import { useLocation } from "react-router-dom";
import { Navbar } from "../NavBar/Navbar";
import "./CardPage.css";
import OpenAI from "openai";
import { useCallback, useState } from "react";
import parse from "html-react-parser";

const { GoogleGenerativeAI } = require("@google/generative-ai");
export const CardPage = () => {
	const location = useLocation();
	const placeInfo = location.state.content;
	const [tableVal, setTableVal] = useState(null);
	const [tableProcessing, setTableProcessing] = useState(false);
	const genAI = new GoogleGenerativeAI(process.env["REACT_APP_OPENAI_API_KEY"]);

	const GenerateGeminiResponse = async () => {
		const model = genAI.getGenerativeModel({ model: "gemini-pro" });
		console.log(genAI)

		const prompt = "diga todos os jogos de futebol previstos para acontecer em dezembro de 2023 no Brasil";

		const result = await model.generateContent(prompt);
		const response = await result.response;
		const text = response.text();
		console.log(text);
	};

	const openai = new OpenAI({
		apiKey: process.env["REACT_APP_OPENAI_API_KEY"],
		dangerouslyAllowBrowser: true,
	});

	const GenerateSugestion = useCallback(
		async (city) => {
			try {
				setTableProcessing(true);
				const query = `Responda somente com uma tabela HTML com uma classe chamada 'myTable' que mostrará um plano de viagem de três dias para visitar ${city}.
				Cada dia deve conter duas atividades, seus horários e uma breve descrição, tudo em inglês. Não adicione palavras à resposta, somente a tabela HTML.`;
				const chatCompletion = await openai.chat.completions.create({
					messages: [{ role: "user", content: query }],
					model: "gpt-3.5-turbo",
					temperature: 0.7,
					top_p: 1.0,
					frequency_penalty: 0.2,
					presence_penalty: 0.0,
					max_tokens: 800
				});

				console.log(chatCompletion.choices[0].message.content);
				setTableVal(chatCompletion.choices[0].message.content);
				setTableProcessing(false);
			} catch (error) {
				console.error("Error generating suggestion:", error);
			}

			GenerateGeminiResponse();
		},
		[openai.chat.completions]
	);

	const imageGallery = placeInfo?.images
		.slice(1, placeInfo?.images.length)
		.map((img, k) => {
			return (
				<div className="col-12 col-md-6 px-1 my-1" key={k}>
					<img src={img} className="rounded smallImg"></img>
				</div>
			);
		});

	return (
		<div>
			<Navbar />
			<div>
				<div className="container mt-4">
					<div>
						<h4>{placeInfo?.travelTip}</h4>
						<span>
							<i className="bi bi-star-fill"></i>
							{` 4.34 • 202 reviews | Superhot • ${placeInfo?.city} , ${placeInfo?.country}`}
						</span>
					</div>
					<div className="row mt-5">
						<div className="col-12 col-md-12 col-lg-7 col-xl-7">
							<img
								src={placeInfo?.images[0]}
								className="rounded mainImg"
								alt="big"
							></img>
						</div>
						<div className="col-12 col-md-12 col-lg-5 col-xl-5">
							<div className="row">{imageGallery}</div>
						</div>
					</div>
				</div>
				<div className="container my-5">
					<div className="text-center">
						<button
							className="btn btn-lg btn-primary w-50 text-center"
							onClick={() => {
								GenerateSugestion(placeInfo.city);
							}}
						>
							{`Create travel itinerary to ${placeInfo.city} `}
							<i className="bi bi-magic"></i>
						</button>
					</div>
					<div className="mt-4 pb-5">
						{tableProcessing && !tableVal ? (
							<div className="d-flex justify-content-center">
								<div className="spinner-border" role="status">
									<span className="visually-hidden">Loanding...</span>
								</div>
							</div>
						) : !tableProcessing && tableVal ? (
							parse(tableVal)
						) : (
							""
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
