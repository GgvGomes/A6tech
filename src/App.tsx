import { About } from '@pages/about';
import { Contact } from '@pages/contact';
import { Services } from '@pages/services';
import { Trusting } from '@pages/trusting';
import { Home } from '@pages/home';

import { Footer } from '@components/footer';

function App() {
  return (
    <>
      <Home />
      <Services />
      <Trusting />
      <Contact />
      <About />

      <Footer />
    </>
  );
}

export default App;
