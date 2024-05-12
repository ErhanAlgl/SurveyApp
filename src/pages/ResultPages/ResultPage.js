import React from 'react';
import {View, Text} from 'react-native';
import {useSurveyContext} from '../../SurveyContext';

const ResultPage = () => {
  const {completedSurveys} = useSurveyContext();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 20}}>
        Tamamlanan Anketler
      </Text>
      {completedSurveys.map((survey, index) => (
        <View
          key={index}
          style={{
            padding: 10,
            marginVertical: 5,
            backgroundColor: 'red',
            borderRadius: 5,
          }}>
          <Text>Toplam Puan: {survey.totalPoints}</Text>
          <Text>Tamamlama Tarihi: {survey.completionDate}</Text>
          <Text>Tamamlama Saati: {survey.completionTime}</Text>
        </View>
      ))}
    </View>
  );
};

export default ResultPage;
