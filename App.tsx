
import { Text } from 'react-native';
import { Layout } from './components/layout';

export type Dict<T> = {
  [key: string]: T;
};

export default function App() {
  return (
    <Layout></Layout >
    // <Text>Open up App.tsx to start worddking on your app!</Text>
  );
}
