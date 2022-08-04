import './App.css';
import Home from './pages/Home';
import { useDispatch, useSelector } from 'react-redux';
import { getParents } from './store/slices/nodes.slice';
import { useEffect } from 'react';
import { getLocales } from './store/slices/locales.slice';
import Nav from './components/Nav';

function App() {
  const parents = useSelector((state) => state.nodes);
  const dispatch = useDispatch();
  const locales = useSelector((state) => state.locales);
  const localization = useSelector((state) => state.localization);

  useEffect(() => {
    dispatch(getParents());
    dispatch(getLocales());
  }, [dispatch]);

  return (
    <div className='App'>
      <Nav locales={locales} />
      <Home parents={parents} locales={locales} localization={localization} />
    </div>
  );
}

export default App;
