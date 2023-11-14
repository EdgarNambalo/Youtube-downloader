import loading from '../img/Spinner-1s-200px (1).svg'


import styles from './Loading.module.css';

function Loading() {
    return (
        <div className={styles.loader_container}>
            <img className={styles.loader} src={loading} alt='Loading' />
     </div>   
    )
}

export default Loading;