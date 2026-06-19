import "./styles/style.css";

const HoverLinks = ({ text, cursor, active }: { text: string; cursor?: boolean; active?: boolean }) => {
  const activeStyle = active ? { color: "#FF9D00" } : {};
  return (
    <div className="hover-link" data-cursor={!cursor && `disable`}>
      <div className="hover-in" style={activeStyle}>
        {text} <div style={activeStyle}>{text}</div>
      </div>
    </div>
  );
};

export default HoverLinks;
