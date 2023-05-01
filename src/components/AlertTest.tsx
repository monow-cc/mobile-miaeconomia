import React, { useState } from 'react';
import { Button } from 'react-native';
import Alert from './Alert';

const MyComponent: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Mensagem de alerta!');
  };

  return (
    <>
      <Button title="Mostrar alerta" onPress={handleClick} />
      <Alert message={message} />
    </>
  );
};

export default MyComponent;
