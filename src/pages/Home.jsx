import { Navbar, Main, Product, MeasurementsModal } from "../components";
import { useState } from 'react';
import { useEffect } from 'react';

function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <>
      <Navbar />
      <Main />
      <Product />
      <MeasurementsModal 
        show={showModal}
        onHide={() => setShowModal(false)}
      />
    </>
  )
}

export default Home