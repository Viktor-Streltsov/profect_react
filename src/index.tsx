import { render } from "react-dom";
import Counter from "./components/counter/Counter";

render(
    <div>
        <h1>Hello World</h1>
        <div><Counter/></div>
    </div>,
    document.getElementById('root')
)