import { Route, Routes } from 'react-router-dom';

import NotFound from './pages/404';
import Essay from './pages/Essay';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/essay" element={<Essay />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
