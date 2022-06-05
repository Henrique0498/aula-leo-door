import styles from "./../styles/pages/home.module.css";
import Card from "../components/Card/Card";
import Link from "next/link";
import NumberInput from "../components/NumberInput/NumberInput";
import { useState } from "react";

export default function Home() {
  const [amount, setAmount] = useState(3)
  const [withGift, setWithGift] = useState(1)

  return (
    <div className={styles.container}>
      <div>
        <Card bgColor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumberInput text="Qtde Portas" value={amount} onChange={(newAmount)=> setAmount(newAmount)} />
        </Card>
      </div>
      <div>
        <Card>
          <NumberInput text="Qtde Portas" value={withGift} onChange={(newGift)=> setWithGift(newGift)} />
        </Card>
        <Card bgColor="#28a085">
          <Link href={`/game/${amount}/${withGift}`}>
            <a className={styles.link}>
              <h2>Iniciar</h2>
            </a>
          </Link>
        </Card>
      </div>
    </div>
  );
}
