import Marquee from "react-fast-marquee";
import {
  SiFigma,
  SiFramer,
  SiMiro,
  SiNotion,
} from "react-icons/si";
import { FaRobot, FaBrain, FaPalette, FaPenNib, FaPenRuler } from "react-icons/fa6";
import {
  MdDraw,
  MdDesignServices,
  MdAutoAwesome,
  MdSmartToy,
} from "react-icons/md";

const toolsRow1 = [
  { name: "Figma", icon: <SiFigma /> },
  { name: "Adobe XD", icon: <FaPalette /> },
  { name: "Photoshop", icon: <FaPenNib /> },
  { name: "Illustrator", icon: <FaPenRuler /> },
  { name: "Framer", icon: <SiFramer /> },
  { name: "Miro", icon: <SiMiro /> },
  { name: "Notion", icon: <SiNotion /> },
  { name: "ChatGPT", icon: <FaRobot /> },
  { name: "Claude AI", icon: <FaBrain /> },
];

const toolsRow2 = [
  { name: "FigJam", icon: <MdDraw /> },
  { name: "Antigravity", icon: <MdAutoAwesome /> },
  { name: "Google Stitch", icon: <MdDesignServices /> },
  { name: "Adobe Firefly", icon: <MdSmartToy /> },
  { name: "Figma Make", icon: <SiFigma /> },
  { name: "AR & VR Design", icon: <MdDesignServices /> },
  { name: "Watch OS", icon: <MdDesignServices /> },
  { name: "Vibe Coder", icon: <MdAutoAwesome /> },
  { name: "AI Agent Design", icon: <FaRobot /> },
];

const AboutTools = () => {
  return (
    <div className="aboutme-tools">
      <div className="aboutme-section-header">
        <h2>
          Tools & <span>Technologies</span>
        </h2>
        <p>The design arsenal I use to bring ideas to life</p>
      </div>

      <div className="aboutme-tools-row">
        <Marquee speed={40} gradient={false} pauseOnHover>
          {toolsRow1.map((tool, index) => (
            <div className="aboutme-tool-pill" key={index}>
              <span className="aboutme-tool-pill-icon">{tool.icon}</span>
              <span>{tool.name}</span>
            </div>
          ))}
        </Marquee>
      </div>

      <div className="aboutme-tools-row">
        <Marquee speed={35} gradient={false} pauseOnHover direction="right">
          {toolsRow2.map((tool, index) => (
            <div className="aboutme-tool-pill" key={index}>
              <span className="aboutme-tool-pill-icon">{tool.icon}</span>
              <span>{tool.name}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default AboutTools;
