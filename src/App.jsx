import useStorefrontInteractions from './hooks/useStorefrontInteractions.js';
import HomePage from './pages/HomePage.jsx';

function App() {
  useStorefrontInteractions();
  return <HomePage />;
}
export default App;
