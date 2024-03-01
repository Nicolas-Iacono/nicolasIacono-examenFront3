import style from "./card.module.css"
function Card({props}) {
  if(!props){
    return null;
  }
  const {nombre, color} = props
  return (
    <div className={style.card}>
        <h1>Hola {nombre}!!</h1>

      <h2  className={style.color}>Tu color favorito es el {color}</h2>
    </div>
  );
}

export default Card;
