const Card = ({ value, isFlipped, onClick }) => {
    return (
        <div className="card" onClick={onClick}>
            {isFlipped ? (
            <img src={value} alt="card image" />
            ) : (
            <div className="card-back">?</div>
            )}
        </div>
    );
};
  
  
export default Card