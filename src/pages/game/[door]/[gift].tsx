import styles from "./../../../styles/pages/game.module.css";
import React, { useEffect, useState } from "react";
import Door from "../../../components/Door/Door";
import { createDoor, updateDoors } from "../../../functions/doorFunction";
import Link from "next/link";
import { useRouter } from "next/router";

const Game = () => {
  const [doors, setDoors] = useState([]);
  const [valid, setValid] = useState(true);

  const router = useRouter();

  useEffect(() => {
    setDoors(createDoor(+router.query.door, +router.query.gift));
  }, [router?.query]);

  useEffect(()=> {
    const amountDoors = +router.query.door >= 3 && +router.query.door <= 100
    const validGift = +router.query.gift >= 1 && +router.query.gift <= +router.query.door

    setValid(amountDoors && validGift)
  }, [doors])

  function renderDoors() {
    return doors.map((door) => {
      return (
        <Door
          key={door.number}
          value={door}
          onChange={(newDoor) => setDoors(updateDoors(doors, newDoor))}
        />
      );
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.doors}>
        {valid ? renderDoors()
          : <h2>Valores inválidos</h2>}
      </div>
      <div className={styles.buttons}>
        <Link href="/">
          <a>
            <button>Reiniciar</button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Game;
