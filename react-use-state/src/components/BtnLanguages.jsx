import Lang from "../data/languages";
import { useState } from "react";


const BtnLanguages = () => {
  const [ isOpen, setIsOpen ] = useState( null ); // useState per settare l'id del pulsante
  const handleAccordion = (id) => { // Funzione per gestire il click un pulsante
    setIsOpen(isOpen === id ? null : id)
  }

  const langClick = Lang.find((element) => element.id === isOpen); //Al click, seleziono un elemento 


  return (
    <div className="row gap-2 ">
        {/* lang.map mi cicla e crea i pulsanti */}
      {Lang.map((element) => (
          <button onClick={() => handleAccordion(element.id)}  className={`btn custom-btn col-2 ${isOpen === element.id ? "active" : " "}`}>
            {element.title}
          </button>
      ))}

         {/* se clicco un pulsante mostro un contenuto */}
      {
        langClick && (
        <div className="mt-4 block-lang">
          <p><strong>{langClick.title}</strong></p> {/* Titolo del linguaggio cliccato */}
          <p>{langClick.description}</p> {/* Descrizione del linguaggio cliccato */}
        </div>
        )
        
      }
    </div> 
 )
};


export default BtnLanguages;


