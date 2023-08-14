/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useContext } from 'react';
import GlobalContext from './context/GlobalContext';
import ConsumerA from './components/ConsumerA';
import ConsumerB from './components/ConsumerB';
import ProviderA from './components/ProviderA';
import githubIcon from '../../assets/social-links/github.svg';

const GlobalApp = () => {
  const globalContext = useContext(GlobalContext);
  const globalState = globalContext.globalstate;

  useEffect(() => {
    // console.log("App render: ", globalContext);
  }, []);

  return (
    <div id='GlobalApp'>
      <div className='global-provider-intro'>
        <h1>
          <span role='img' aria-label='Global Provider'>
            📡
          </span>{' '}
          Global Provider
        </h1>
        <h5>Built with React Hooks (useContext, useReducer)</h5>
        <p>
          Global Provider is a scalable global state management system. Share application state with all components.
        </p>
        <p>What's included:</p>
        <ul>
          <li>A Global State wrapper</li>
          <li>A Global Context provider</li>
          <li>A Global Reducer dispatch</li>
        </ul>
        <p>
          The contrived example below demonstrates a GlobalProvider broadcasting it's `count` and `news` items to 3
          Consumers and 1 Provider.
        </p>
        <ol>
          <li>Modify the globalState `count`.</li>
          <li>Add `news` items with the Provider.</li>
          <li>Remove `news` items from the globalState.</li>
        </ol>
      </div>

      <section className='globals-container'>
        <code>
          <pre>
            <p>globalState: {'{'}</p>
            <div className='indent'>
              <p>globals: {'{'}</p>
              <div className='indent'>
                <p>
                  name: {globalState.globals.name} {}
                </p>
                <p>count: {globalState.globals.count} </p>
              </div>

              <p>{'}'}</p>
              <p>news: {'['}</p>
              <div className='indent'>
                {globalState.news.length ? (
                  <div className='headline'>
                    {globalState.news.map((n, i) => (
                      <p key={i}>
                        {'{'} id: {n.id}, headline: "{n.headline}", date: {n.date}
                        {' }'}{' '}
                        <span
                          role='button'
                          tabIndex={0}
                          className='remove-news-button'
                          onClick={() =>
                            globalContext.globaldispatch({
                              type: 'removeNews',
                              n,
                            })
                          }>
                          x
                        </span>
                      </p>
                    ))}
                  </div>
                ) : (
                  <div>No news stories</div>
                )}
                <p>{']'}</p>
              </div>
              <p>{'}'}</p>
            </div>
          </pre>
        </code>
        <div>
          Count control: &nbsp;
          <button className='int-button' onClick={() => globalContext.globaldispatch({ type: 'decrementCount' })}>
            -
          </button>
          <button className='int-button' onClick={() => globalContext.globaldispatch({ type: 'incrementCount' })}>
            +
          </button>
        </div>
      </section>

      <section className='consumers-container'>
        <div>
          <ConsumerA></ConsumerA>
          <ConsumerB></ConsumerB>
        </div>
        <div>
          <ProviderA></ProviderA>
        </div>
      </section>

      <div className='code-container'>
        <h4>Code:</h4>
        <a
          className='github-project-link'
          href='https://github.com/stefanbobrowski/GlobalProvider'
          target='_blank'
          rel='noreferrer'
          title='Global Provider - Github'>
          <div className='github-icon'>
            <img src={githubIcon} alt='Github'></img>
          </div>
          <span>Global Provider</span>
        </a>
      </div>
    </div>
  );
};

export default GlobalApp;
