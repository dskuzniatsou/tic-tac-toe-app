import Square from "./Square.tsx";

type Props = {
    squares: Array<string | null>
    onClick:(index: number) => void
}
function Board  ({squares,onClick}:Props) {
    const renderSquares = (i:number) => {
        return (
            <Square  value={squares[i]} onClick={(()=>onClick(i))} />
        )
    }
    return (
        <div className="board">
    <div className="board-row">
        {renderSquares(0)}
        {renderSquares(1)}
        {renderSquares(2)}
    </div>
            <div className="board-row">
                {renderSquares(3)}
                {renderSquares(4)}
                {renderSquares(5)}
            </div>
            <div className="board-row">
                {renderSquares(6)}
                {renderSquares(7)}
                {renderSquares(8)}
            </div>
        </div>
    );
};

export default Board;