
import '@mantine/core/styles.css';
import { MantineProvider, Switch } from '@mantine/core';

function App() {

  return (
    <MantineProvider>
      <h1 className="text-3xl text-red-500 font-bold underline">
        Hello world!
      </h1>
      <Switch
        defaultChecked
        label="I agree to sell my privacy"
      />
    </MantineProvider>
  )
}

export default App
