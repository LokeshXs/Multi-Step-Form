
import { useState } from 'react';
import FormProgressSection from './components/FormProgressSection/FormProgressSection'
import FormSection from './components/FormSection/FormSection'
import './App.css'

const currentFormState = 1;
function App() {
  const [formState, setFormState] = useState(currentFormState);

  const handleFormStateChange = (newFormState) => {
    if (newFormState > 5) {
      newFormState = 5;
    }

    if (newFormState < 1) {
      newFormState = 1;
    }
    setFormState(newFormState);
  };


  return (
    <main className='main-form-section'>
      <FormProgressSection formState={formState} />
      <FormSection formState={formState} changeFormState={handleFormStateChange} />

    </main>
  )
}

export default App
