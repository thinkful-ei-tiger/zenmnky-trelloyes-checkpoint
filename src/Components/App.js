import '../styles/App.css';
import List from './List';

function App(props) {
  let lists = props.store.lists;
  let allCards = props.store.allCards;

  //for each item in `lists`, render a list component
    //the list component will generate Card sub-components
  let listArray = lists.map(listItem => {
    return (
      <List 
        key={listItem.id}
        header={listItem.header}
        cards={listItem.cardIds.map(cardId => allCards[cardId])}
      />
  )});


  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {listArray}
      </div>
    </main>
  
  );
}

export default App;
