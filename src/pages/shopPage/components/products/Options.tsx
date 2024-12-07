import filterIcon from '../../icons/system-filtering.svg';
import viewListIcon from '../../icons/view-list.svg';
import gridListIcon from '../../icons/grid-big-round.svg';
import styles from './Options.module.css'
import { ViewList } from '../../types/ViewList';

export const Options = ({ show, setShow }: ViewList) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      setShow(value);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.side}>
        <button type="button" className={styles.optionContainer}>
          <figure>
            <img src={filterIcon} alt="Filter icon" />
          </figure>

          <span className={styles.label}>Filter</span>
        </button>

        <button type='button' className={styles.optionContainer}>
          <figure>
            <img src={viewListIcon} alt="View list icon" />
          </figure>
        </button>

        <button type='button' className={styles.optionContainer}>
          <figure>
            <img src={gridListIcon} alt="Grid list icon" />
          </figure>
        </button>

        <span className={styles.infoAdd}>Showing 1–{show} of 32 results</span>
      </div>

      <div className={styles.side}>
        <div className={styles.optionContainer}>
          <span className={styles.label}>Show</span>

          <input type="number" id="show" value={show} onChange={handleChange} min={4} max={16} className={styles.input} />
        </div>

        <div className={styles.optionContainer}>
          <span className={styles.label}>Short by</span>

          <select id="shortBuy" className={styles.select}>
            <option value={'default'}>Default</option>
          </select>
        </div>
      </div>
    </div>
  )
}
