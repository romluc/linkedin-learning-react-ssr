import './index.css';
import Card from './Card';
import data from '../data/data.json';

const Index = ({ cards }) => {
  return (
    <div className='App'>
      <header>
        <img src='/static/logo.png' className='static-logo' alt='logo' />
      </header>
      <div className='Grid'>
        {cards.map((card) => (
          <Card key={card.id} />
        ))}
      </div>
    </div>
  );
};

Index.getInitialProps = async () => {
  return {
    cards: data,
  };
};

export default Index;
