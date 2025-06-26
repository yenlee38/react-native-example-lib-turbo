import { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import {
  multiply,
  numberPromise,
  compare,
} from 'react-native-example-lib-turbo';

const result = multiply(3, 7);

export default function App() {
  const [value, setValue] = useState<number>(0);

  const [compareValue, setCompareValue] = useState<boolean>(false);

  const testNumberPromise = async () => {
    const numberValue = await numberPromise();
    setValue(numberValue);
    const isCompare = compare(8, 6);
    setCompareValue(isCompare);
  };

  return (
    <View style={styles.container}>
      <Text>Result : {result}</Text>
      <Button title="Press" onPress={testNumberPromise} />
      <Text>Number: {value}</Text>
      <Text>Compare: {compareValue ? 'TRUE' : 'FALSE'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
