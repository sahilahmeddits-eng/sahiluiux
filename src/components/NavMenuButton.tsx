interface NavMenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

const NavMenuButton = ({ isOpen, onToggle }: NavMenuButtonProps) => (
  <button
    type="button"
    className={`nav-toggle-btn${isOpen ? " nav-toggle-active" : ""}`}
    onClick={onToggle}
    aria-label="Toggle navigation menu"
    aria-expanded={isOpen}
  >
    <span />
    <span />
    <span />
  </button>
);

export default NavMenuButton;
