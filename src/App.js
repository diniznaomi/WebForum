import "./App.css";
import { CardPage } from "./Components/CardPage/CardPage";
import { Home } from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />}/>
          <Route path='/cardPage/:id' element={<CardPage />}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
