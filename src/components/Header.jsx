import logo from '../assets/doodlebud.PNG';

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="header__logo-img" src={logo} alt="DoodleBud logo" />
        <span className="header__logo-text">DoodleBud</span>
        <span className="header__tagline">small ideas for big doodles</span>
      </div>
    </header>
  );
}
