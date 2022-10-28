import { useState } from 'react';

function App() {
  const [test] = useState(0);

  return (
    <div>
      Phone
      {test}
    </div>
  );
}

export default App;
