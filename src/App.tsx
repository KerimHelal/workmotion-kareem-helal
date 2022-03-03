import { FC } from 'react';
import './App.css';
import EmployeesList from './components/EmployeesList';
import Container from '@mui/material/Container'

const App: FC<{}> = () => {
  return (
    <div className="App">
      <Container maxWidth='md' sx={{ marginTop: 15 }}>
        <EmployeesList />
      </Container>
    </div>
  );
}

export default App;
