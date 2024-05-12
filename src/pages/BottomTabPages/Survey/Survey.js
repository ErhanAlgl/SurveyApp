import React, {useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import surveyData from '../../../surveyData';
import Button from '../../../component/Button';
import {useSurveyContext} from '../../../SurveyContext';

const SurveyPage = ({navigation}) => {
  const {addCompletedSurvey} = useSurveyContext();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [totalPoints, setTotalPoints] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers({...answers, [questionId]: answer});
    const answeredQuestionCount = Object.keys(answers).length + 1;
    const totalQuestionCount = surveyData.questions.length;
    const newProgress = answeredQuestionCount / totalQuestionCount;
    setProgress(newProgress);

    const selectedQuestion = surveyData.questions.find(
      question => question.id === questionId,
    );
    if (selectedQuestion && selectedQuestion.options) {
      const selectedOption = selectedQuestion.options.find(
        option => option.text === answer,
      );
      if (selectedOption && selectedOption.points) {
        setTotalPoints(
          prevTotalPoints => prevTotalPoints + selectedOption.points,
        );
      }
    }
  };

  const handleNextQuestion = () => {
    const currentAnswer = answers[getCurrentQuestion().id];
    if (currentAnswer && currentAnswer.trim() !== '') {
      if (currentQuestionIndex < surveyData.questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        handleSubmit();
        addCompletedSurvey({
          totalPoints,
          completionDate: new Date().toLocaleDateString(),
          completionTime: new Date().toLocaleTimeString(),
        });
        navigation.navigate('ResultPage');
      }
    } else {
      alert('Lütfen soruyu cevaplayın!');
    }
  };

  const handlePreviousQuestion = () => {
    const answeredQuestionCount = Object.keys(answers).length - 1;
    const totalQuestionCount = surveyData.questions.length;
    const newProgress = answeredQuestionCount / totalQuestionCount;
    setProgress(newProgress);

    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    // Burada anket cevaplarını işleme ve sunucuya gönderme işlemi yapılabilir
  };

  const getCurrentQuestion = () => {
    return surveyData.questions[currentQuestionIndex];
  };

  return (
    <SafeAreaView>
      <View>
        <View
          style={{
            backgroundColor: '#0300A3',
            height: '40%',
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: 'white',
            }}>
            {surveyData.title}
          </Text>
        </View>
        <ProgressBar
          style={{margin: 10, bottom: 50, height: 10, backgroundColor: 'gray'}}
          width={null}
          progress={progress}
          color={'white'}
        />
        <View key={getCurrentQuestion().id}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              height: 50,
            }}>
            {getCurrentQuestion().id + ') ' + getCurrentQuestion().text}
          </Text>
          {getCurrentQuestion().type === 'singleChoice' && (
            <View style={{flexDirection: 'row', flexWrap: 'wrap', top: '20%'}}>
              {getCurrentQuestion().options.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    width: 68,
                    height: 60,
                    justifyContent: 'center',
                    backgroundColor:
                      index === 0
                        ? '#25C133'
                        : index === 1
                        ? '#7ABC11'
                        : index === 2
                        ? '#E3C700'
                        : index === 3
                        ? '#FF8B00'
                        : '#FF1D25',
                    borderRadius: 15,
                    margin: 5,
                    marginTop:
                      answers[getCurrentQuestion().id] === option.text
                        ? -20
                        : 0,
                  }}
                  onPress={() =>
                    handleAnswerChange(getCurrentQuestion().id, option.text)
                  }>
                  <Text
                    style={{
                      color: '#ffffff',
                      fontSize: 15,
                      alignSelf: 'center',
                    }}>
                    {option.text}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
        <View
          style={{
            top: 300,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <Button
            text="<"
            onPress={handlePreviousQuestion}
            style={{backgroundColor: 'red'}}
          />
          <Button text="İlerle" onPress={handleNextQuestion} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SurveyPage;
