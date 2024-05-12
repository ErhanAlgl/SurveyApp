import React, {createContext, useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SurveyContext = createContext();

export const useSurveyContext = () => {
  return useContext(SurveyContext);
};

export const SurveyProvider = ({children}) => {
  const [completedSurveys, setCompletedSurveys] = useState([]);
  const [userSession, setUserSession] = useState(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    const getUserSession = async () => {
      try {
        const storedUserSession = await AsyncStorage.getItem('userSession');
        setUserSession(storedUserSession);
        setIsAuthLoading(false);
      } catch (error) {
        console.error('Error retrieving user session:', error);
      }
    };

    getUserSession();
  }, []);

  const addCompletedSurvey = surveyData => {
    setCompletedSurveys(prevSurveys => [...prevSurveys, surveyData]);
  };

  const value = {
    completedSurveys,
    addCompletedSurvey,
    userSession,
    isAuthLoading,
  };

  return (
    <SurveyContext.Provider value={value}>{children}</SurveyContext.Provider>
  );
};
