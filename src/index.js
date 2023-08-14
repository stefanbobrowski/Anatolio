import React from 'react';
import ReactDOM from 'react-dom';
import { useRoutes } from 'hookrouter';
import routes from './router';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import PageNotFound from './pages/PageNotFound';
import './styles.scss';

const App = () => {
  const routeResult = useRoutes(routes);

  return (
    <div id='App'>
      <Header />
      <main id='view'>{routeResult || <PageNotFound />}</main>
      <Footer />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
