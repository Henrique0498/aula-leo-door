import styles from "./NumberInput.module.css";

interface NumberInputProps {
  text: string
  value: number,
  onChange: (newValue: number) => void;
}

const NumberInput = (props: NumberInputProps) => {
  const remove = () => props.onChange(props.value - 1)
  const add = () => props.onChange(props.value + 1)

  return (
    <div className={styles.container}>
      <span className={styles.text}>{props.text}</span>
      <span className={styles.value}>{props.value}</span>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={remove}> - </button>
        <button className={styles.button} onClick={add}> + </button>
      </div>
    </div>
  )
}

export default NumberInput
