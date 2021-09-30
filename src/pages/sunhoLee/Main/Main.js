import React from 'react';
import ReactDOM from 'react-router-dom';
import Nav from '../../../components/Nav/Nav';
import Feed from './Fedd/Feed';
import MyPage from './MyPage/MyPage';
import Story from './Story/Story';
import Recommend from './Recommend/Recommend';
import ProgramInfo from './ProgramInfo/ProgramInfo';
import '../Main/Main.scss';
import '../../../styles/common.scss';

class Main extends React.Component {
  render() {
    return (
      <>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossOrigin="anonymous"
        />
        <div className="Main">
          <Nav />
          <main>
            <section className="container">
              <Feed />
            </section>
            <aside>
              <MyPage />
              <Story />
              <Recommend />
              <ProgramInfo />
            </aside>
          </main>
        </div>
      </>
    );
  }
}

export default Main;
