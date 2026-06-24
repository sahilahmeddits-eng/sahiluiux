import darkLogo from "../assets/logo/dark.png";
import whiteLogo from "../assets/logo/white.png";

interface LogoProps {
  variant?: "light-bg" | "dark-bg";
  className?: string;
  alt?: string;
}

const Logo = ({ variant = "dark-bg", className, alt = "Logo" }: LogoProps) => {
  // white.png = for white backgrounds, dark.png = for dark backgrounds
  const src = variant === "light-bg" ? whiteLogo : darkLogo;

  return <img src={src} alt={alt} className={className} />;
};

export default Logo;
