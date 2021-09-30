import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
import SearchUser from '../../pages/minjiJeong/Main/SearchUser/SearchUser';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
    };
  }

  render() {
    return (
      <nav>
        <div className="nav_column">
          <i className="service_logo fab fa-instagram fa-1x"></i>
          <a className="service_name" href="/">
            Westagram
          </a>
        </div>
        <div className="nav_column">
          <SearchUser />
        </div>
        <div className="nav_column">
          <button>
            <img alt="icon_explore" src="images/minjiJeong/explore.png" />
          </button>
          <button>
            <img alt="icon_like" src="images/minjiJeong/heart.png" />
          </button>
          <button
            className="btn_profile"
            href="/"
            alt="icon_profile"
            onClick={() => {
              this.setState({
                isVisible: !this.state.isVisible,
              });
            }}
            style={{ position: 'relative' }}
          >
            <img src="images/minjiJeong/profile.png" alt="img_profile" />
            <div
              className="menu_box"
              style={{ display: this.state.isVisible ? 'block' : 'none' }}
            >
              <div className="menu_box_arrow"></div>
              <div className="menu_box_column">
                <i className="far fa-user-circle"></i>
                프로필
              </div>
              <div className="menu_box_column">
                <i className="far fa-bookmark"></i>
                저장됨
              </div>
              <div className="menu_box_column">
                <i className="fas fa-cog"></i>
                설정
              </div>
              <div className="menu_box_column">로그아웃</div>
            </div>
          </button>
        </div>
      </nav>
    );
  }
}

export default Nav;
