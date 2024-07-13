import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <div className="footer">
      <ul className="footer-social-media">
        <li className="twitter">
          <a href="#">
            <TwitterIcon />
          </a>
        </li>
        <li className="facebook">
          <a href="#">
            <FacebookIcon />
          </a>
        </li>
        <li className="linkedin">
          <a href="#">
            <LinkedInIcon />
          </a>
        </li>
        <li className="instagram">
          <a href="#">
            <InstagramIcon />
          </a>
        </li>
      </ul>
      <div className="footer-copy-right">
        <p dir="ltr">&copy; Nahal IT. All rights reserved</p>
      </div>
    </div>
  );
}
