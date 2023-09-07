import { useState } from "react";
import Home from './components/Home'
import { AnyContext } from './context/AnyContext'
import './App.css';

const App = () => {
	const [text, setText] = useState("");

  return (
		<AnyContext.Provider value={{ text, setText }}>
			<div className="App">
				<Home />
			</div>
		</AnyContext.Provider>
  );
}

export default App;
