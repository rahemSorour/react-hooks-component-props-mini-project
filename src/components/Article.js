function Article({title,date='January 1, 1970',preview,minutes}){
    const calculateEmojis = (minutes) => {
        const coffeeCups = '☕️';
        const bentoBoxes = '🍱';
    
        if (minutes < 30) {
          const coffeeEmojiCount = Math.ceil(minutes / 5);
          return coffeeCups.repeat(coffeeEmojiCount);
        } else {
          const bentoEmojiCount = Math.ceil(minutes / 10);
          return bentoBoxes.repeat(bentoEmojiCount);
        }
      };

    return (
      <article>
         <h3>{title}</h3>
        <small>{date} {calculateEmojis(minutes)} {minutes} min read</small>
        <p>{preview}</p>
      </article>

    )
}

export default Article;