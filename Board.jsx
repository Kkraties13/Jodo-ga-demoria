import React from "react"
import imagBasilisco from "../../public/Cartas"
import imgCentauro from "../../public/Cartas"
import imgChimera from "../../public/Cartas"
import imgFênix from "../../public/Cartas"
import imgGrifo from "../../public/Cartas"
import imgMedusa from "../../public/Cartas"
import imgMytha from "../../public/Cartas"
import imgUnicornio from "../../public/Cartas"

const Cards = () => {

    const cartasDiponiveis = [
    {id: 1, value: imagBasilisco, matched: false},
    {id: 2, value: imagBasilisco, matched: false},
    {id: 3, value: imgCentauro, matched: false},
    {id: 4, value: imgCentauro, matched: false},
    {id: 5, value: imgChimera, matched: false},
    {id: 6, value: imgChimera, matched: false},
    {id: 7, value: imgFênix, matched: false},
    {id: 8, value: imgFênix, matched: false},
    {id: 9, value: imgGrifo, mached: false},
    {id: 10, value: imgGrifo, mached: false},
    {id: 11, value: imgMedusa, mached: false},
    {id: 12, value: imgMedusa, mached: false},
    {id: 13, value: imgMytha, mached: false},
    {id: 14, value: imgMytha, mached: false},
    {id: 15, value: imgUnicornio, mached: false},
    {id: 16, value: imgUnicornio, mached: false},
    ];

    const [cards, setCards] = useState(shuffleArray([...initialCards]));
    const [flippedCards, setFlippedCards] = useState([]);
    
    const handleCardClick = (card) => {
        if (flippedCards.length < 2 && !card.matched && !flippedCards.includes(card)) {
          setFlippedCards([...flippedCards, card]);
        }
      };
      
    return (
        <div className="game-board">
        {cards.map((card) => (
            <Card
            key={card.id}
            value={card.value}
            isFlipped={flippedCards.includes(card) || card.matched}
            onClick={() => handleCardClick(card)}
            />
        ))}
        </div>
    )
}
      
export default Cards