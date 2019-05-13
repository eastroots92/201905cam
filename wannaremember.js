{(() => {
    switch (selectedIndex) {
      case 0:   
      return <>
              <p className={styles.paragraph}>{}</p>
              {/* <p className={styles.score}>Score: {score}</p> */}
              <button
                type="button"
                className={styles.button}
                onClick={setInitialStage}
              >
                Play again
            </button>
            </>
      case 1: 
      return <>
              <p className={styles.paragraph}>2</p>
              <button
                type="button"
                className={styles.button}
                onClick={setNextStage}
              >
                Next color
            </button>
            </>
      case 2:  
      return <>
              <p className={styles.paragraph}>3</p>
              <button
                type="button"
                className={styles.button}
                onClick={setNextStage}
              >
                Next color
            </button>
          </>
      case 3:  
      return <>
              <p className={styles.paragraph}>4</p>
              <button
                type="button"
                className={styles.button}
                onClick={setNextStage}
              >
                Next color
            </button>
          </>
    case 4:  
    return <>
            <p className={styles.paragraph}>5</p>
            <button
              type="button"
              className={styles.button}
              onClick={setNextStage}
            >
              Next color
          </button>
        </>
    default:      
      return <>
            <p className={styles.paragraph}>That's right!</p>
            <button
              type="button"
              className={styles.button}
              onClick={setNextStage}
            >
              Next color
          </button>
        </>
    }
  })()}