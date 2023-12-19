export const MainComponent = () => <div className="main"></div>;
export const NavbarComponent = () => (
  <div className="nav">
    <div className="logo">
      <img
        width="48"
        height="48"
        src="https://img.icons8.com/color/48/disney-logo.png"
        alt="disney-logo"
      />
    </div>
    <div className="searchbar">
      <input id="search" type="text" placeholder="Search.." />
    </div>
    <div className="userLogo">
      <img
        width="48"
        height="48"
        src="https://img.icons8.com/color/48/user.png"
        alt="user"
      />
    </div>
  </div>
);
