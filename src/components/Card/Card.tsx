import styles from "./Card.module.css";

interface CardProps{
  bgColor?: string,
  children?: any
}

const Card = (props:CardProps) => {
  return (
    <div className={styles.container}
      style={{backgroundColor: props.bgColor ?? '#fff'}}>
        {props.children}
    </div>
  )
}

export default Card
