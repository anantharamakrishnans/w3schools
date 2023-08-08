  // In MyComponent.js file
   
  import styles from './MyComponent.module.css'
  function MyComponent() {
    return (
      <>
        <h1 className={styles.heading}>Component Heading</h1>
        <p className={styles.bodyText}>This is a random paragraph. As you can see, the JSX looks similar to HTML. This makes layouting elements easier and more intuitive. Hope you enjoy your react journey! </p>
      </>
    )
  }

  export default MyComponent;