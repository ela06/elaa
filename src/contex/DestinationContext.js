
import { createContext, useState } from 'react';

const DestinationContex = createContext();

function DestinationProvider({ children }) {
  const [destinations, setDestination] = useState([]);

  return (
    <DestinationContex.Provider value={{ destinations, setDestination }}>
      {children}
    </DestinationContex.Provider>
  );
}

export { DestinationProvider, DestinationContex };
