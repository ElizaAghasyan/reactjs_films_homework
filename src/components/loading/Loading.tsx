import styles from './Loading.module.scss'

const Loading = () => {
    const loading = true
    return (
        <div className={styles.dots}>
            {loading ?(
                <>
                    <div className={styles.loading}>
                        <button className={styles.loading_btn}>Loading</button>
                    </div>
                </>
            ) : null}
        </div>
    );
}

export default Loading;
