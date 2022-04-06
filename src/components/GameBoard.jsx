import Letter from "./Letter";

export default function Board() {
    return (
        <div className="board">
            <div className="row">
                <Letter letterPosition={0} attemptedValue={0}/>
                <Letter letterPosition={1} attemptedValue={0}/>
                <Letter letterPosition={2} attemptedValue={0}/>
                <Letter letterPosition={3} attemptedValue={0}/>
                <Letter letterPosition={4} attemptedValue={0}/>
            </div>
            <div className="row">
                <Letter letterPosition={0} attemptedValue={1}/>
                <Letter letterPosition={1} attemptedValue={1}/>
                <Letter letterPosition={2} attemptedValue={1}/>
                <Letter letterPosition={3} attemptedValue={1}/>
                <Letter letterPosition={4} attemptedValue={1}/>
            </div>
            <div className="row">
                <Letter letterPosition={0} attemptedValue={2}/>
                <Letter letterPosition={1} attemptedValue={2}/>
                <Letter letterPosition={2} attemptedValue={2}/>
                <Letter letterPosition={3} attemptedValue={2}/>
                <Letter letterPosition={4} attemptedValue={2}/>
            </div>
            <div className="row">
                <Letter letterPosition={0} attemptedValue={3}/>
                <Letter letterPosition={1} attemptedValue={3}/>
                <Letter letterPosition={2} attemptedValue={3}/>
                <Letter letterPosition={3} attemptedValue={3}/>
                <Letter letterPosition={4} attemptedValue={3}/>
            </div>
            <div className="row">
                <Letter letterPosition={0} attemptedValue={4}/>
                <Letter letterPosition={1} attemptedValue={4}/>
                <Letter letterPosition={2} attemptedValue={4}/>
                <Letter letterPosition={3} attemptedValue={4}/>
                <Letter letterPosition={4} attemptedValue={4}/>
            </div>
            <div className="row">
                <Letter letterPosition={0} attemptedValue={5}/>
                <Letter letterPosition={1} attemptedValue={5}/>
                <Letter letterPosition={2} attemptedValue={5}/>
                <Letter letterPosition={3} attemptedValue={5}/>
                <Letter letterPosition={4} attemptedValue={5}/>
            </div>
        </div>
    );
}

export const boardDefault = [
    ["x", "", "", "", ""],
    ["", "x", "", "", ""],
    ["", "", "x", "", ""],
    ["", "", "", "x", ""],
    ["", "", "", "", "x"],
    ["", "", "x", "", ""],
];