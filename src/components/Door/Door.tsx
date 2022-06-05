import styles from "./Door.module.css";
import DoorModel from "../../model/DoorModel";
import Present from "../Present/Present";

interface DoorProps {
  value: DoorModel;
  onChange: (newDoor: DoorModel) => void;
}

const Door = (props: DoorProps) => {
  const { value } = props;
  const door = props.value;
  const doorSelect = door.select && !door.open ? styles.select : '';

  const changeSelect = (e) => {
    props.onChange(door.changeSelect());
  };
  const openDoor = (e) => {
    e.stopPropagation();
    props.onChange(door.changeOpen());
  };

  return (
    <div className={styles.container} onClick={changeSelect}>
      <div
        className={`${styles.structure} ${doorSelect}`}
      >
        {!door.open ? (
          <div className={styles.door}>
            <div className={styles.number}>{value.number}</div>
            <div className={styles.doorHandle} onClick={openDoor} />
          </div>
        ) : door.present && <Present/>}
      </div>
      <div className={styles.floor} />
    </div>
  );
};

export default Door;
