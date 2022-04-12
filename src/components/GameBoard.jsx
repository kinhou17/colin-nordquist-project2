import Letter from "./Letter";


export default function Board() {
    return (
        <div className="board">
            <div className="row">
                <Letter letterIndex={0} attempt={0} />
                <Letter letterIndex={1} attempt={0} />
                <Letter letterIndex={2} attempt={0} />
                <Letter letterIndex={3} attempt={0} />
                <Letter letterIndex={4} attempt={0} />
            </div>
            <div className="row">
                <Letter letterIndex={0} attempt={1} />
                <Letter letterIndex={1} attempt={1} />
                <Letter letterIndex={2} attempt={1} />
                <Letter letterIndex={3} attempt={1} />
                <Letter letterIndex={4} attempt={1} />
            </div>
            <div className="row">
                <Letter letterIndex={0} attempt={2} />
                <Letter letterIndex={1} attempt={2} />
                <Letter letterIndex={2} attempt={2} />
                <Letter letterIndex={3} attempt={2} />
                <Letter letterIndex={4} attempt={2} />
            </div>
            <div className="row">
                <Letter letterIndex={0} attempt={3} />
                <Letter letterIndex={1} attempt={3} />
                <Letter letterIndex={2} attempt={3} />
                <Letter letterIndex={3} attempt={3} />
                <Letter letterIndex={4} attempt={3} />
            </div>
            <div className="row">
                <Letter letterIndex={0} attempt={4} />
                <Letter letterIndex={1} attempt={4} />
                <Letter letterIndex={2} attempt={4} />
                <Letter letterIndex={3} attempt={4} />
                <Letter letterIndex={4} attempt={4} />
            </div>
            <div className="row">
                <Letter letterIndex={0} attempt={5} />
                <Letter letterIndex={1} attempt={5} />
                <Letter letterIndex={2} attempt={5} />
                <Letter letterIndex={3} attempt={5} />
                <Letter letterIndex={4} attempt={5} />
            </div>
            <div className="row">
                <Letter letterIndex={0} attempt={5} />
                <Letter letterIndex={1} attempt={5} />
                <Letter letterIndex={2} attempt={5} />
                <Letter letterIndex={3} attempt={5} />
                <Letter letterIndex={4} attempt={5} />
            </div>
            <div className="row">
                <Letter letterIndex={0} attempt={5} />
                <Letter letterIndex={1} attempt={5} />
                <Letter letterIndex={2} attempt={5} />
                <Letter letterIndex={3} attempt={5} />
                <Letter letterIndex={4} attempt={5} />
            </div>
        </div>
    );
}

export const boardDefault = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
];

export const boardDefault2 = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
];