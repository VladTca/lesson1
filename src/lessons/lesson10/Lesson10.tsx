import React, {useEffect, useState} from 'react';
import styles from './Lesson10.module.css';
import MyButton from '../../components/myButton/MyButton';
import Loader from '../../components/loader/Loader';

interface CatFact {
  fact: string;
  length: number;
}

export default function Lesson10() {
  const [facts, setFacts] = useState<CatFact[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Function to fetch a cat fact
  const fetchCatFact = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const data: CatFact = await response.json();
      setFacts(prevFacts =>
          prevFacts.some(fact => fact.fact === data.fact)
              ? prevFacts
              : [...prevFacts, data]
      );
    } catch (error) {
      console.error('Error fetching cat fact:', error);
    } finally {
      setLoading(false);
    }
  };


  // Fetch a cat fact when the component mounts
  useEffect(() => {
    fetchCatFact();
  }, []);

  // Function to clear all facts
  const clearFacts = () => {
    setFacts([]);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Lesson 10: Cat Facts API 🐱</h1>
      <p className={styles.description}>
        This component fetches random facts about cats from an API and displays them on the page.
      </p>

      <div className={styles.buttonContainer}>
        <MyButton 
          text="GET MORE INFO" 
          func={fetchCatFact} 
          variant="primary" 
          disabled={loading}
        />
        
        {facts.length > 0 && (
          <MyButton 
            text="DELETE ALL DATA" 
            func={clearFacts} 
            variant="danger" 
            disabled={loading}
          />
        )}
      </div>

      {loading && <Loader />}

      {facts.length > 0 && (
        <div className={styles.factsContainer}>
          {facts.map((fact, index) => (
            <div key={index} className={styles.factItem}>
              <p>{fact.fact}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}