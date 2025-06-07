type Props = {
    status:string
    onReset:()=>void
}
const GameInfo = ({ status, onReset }:Props) => {
    return (
        <div className="game-info">
            <div>{status}</div>
            <button onClick={onReset}>Reset game</button>
        </div>
    );
};

export default GameInfo;