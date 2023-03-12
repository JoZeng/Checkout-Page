import "./styles.css";
import { Input } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PublicIcon from '@mui/icons-material/Public';
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export default function Section1() {

  return (
    <section className="section">
      <div className="section-card1">
        <h3>Contact information</h3>
        <div className="section--inputs">
          <div>
            <p>E-mail</p>
            <Input
              id="section--inputs-input__placeholder"
              className="section--inputs__input"
              type="text"
              placeholder="Enter your email..."
              sx={{fontSize: 16, fontFamily: 'Montserrat', fontWeight: 600}}
              startAdornment={
                <EmailIcon sx={{ color: "gray", fontSize: 20 }} />
              }
              disableUnderline
            />
          </div>
          <div>
            <p>Phone</p>
            <Input
              id="section--inputs-input__placeholder"
              className="section--inputs__input"
              type="text"
              placeholder="Enter your phone..."
              sx={{fontSize: 16, fontFamily: 'Montserrat', fontWeight: 600}}
              startAdornment={
                <PhoneIcon sx={{ color: "gray", fontSize: 20 }} />
              }
              disableUnderline
            />
          </div>
        </div>
      </div>

      <div className="section-card2">
        <h3>Shipping address</h3>
        <div className="section--inputs">
          <div>
            <p>Full name</p>
            <Input
              id="section--inputs-input__placeholder"
              className="section--inputs__input"
              type="text"
              placeholder="Enter your email..."
              sx={{fontSize: 16, fontFamily: 'Montserrat', fontWeight: 600}}
              startAdornment={
                <AccountCircleIcon sx={{ color: "gray", fontSize: 20 }} />
              }
              disableUnderline
            />
          </div>
          <div>
            <p>Adress</p>
            <Input
              id="section--inputs-input__placeholder"
              className="section--inputs__input"
              type="text"
              placeholder="Your address..."
              sx={{fontSize: 16, fontFamily: 'Montserrat', fontWeight: 600}}
              startAdornment={<HomeIcon sx={{ color: "gray", fontSize: 20 }} />}
              disableUnderline
            />
          </div>
          <div>
            <p>City</p>
            <Input
              id="section--inputs-input__placeholder"
              className="section--inputs__input"
              type="text"
              placeholder="Your address..."
              sx={{fontSize: 16, fontFamily: 'Montserrat', fontWeight: 600}}
              startAdornment={<LocationCityIcon sx={{ color: "gray", fontSize: 20 }} />}
              disableUnderline
            />
          </div>
          <div className="section--inputs--minor">
              <div className="section--inputs--minor2">
                <p>Country</p>
                <Input
                  id="section--inputs-input__placeholder"
                  className="section--inputs--minor__input"
                  type="text"
                  placeholder="Your country..."
                  sx={{fontSize: 16, fontFamily: 'Montserrat', fontWeight: 600}}
                  startAdornment={
                    <PublicIcon sx={{ color: "gray", fontSize: 20 }} />
                  }
                  endAdornment={
                    <KeyboardArrowDownIcon className="section-endadornment" sx={{ fontSize: 20 }} />
                  }
                  disableUnderline
                />
              </div>
              <div className="section--inputs--minor2">
                <p>Postal code</p>
                <Input
                  id="section--inputs-input__placeholder"
                  className="section--inputs--minor__input"
                  type="text"
                  placeholder="Your postal code.."
                  sx={{fontSize: 16, fontFamily: 'Montserrat', fontWeight: 600}}
                  startAdornment={
                    <MarkunreadMailboxIcon sx={{ color: "gray", fontSize: 20 }} />
                  }
                  disableUnderline
                />
              </div>
          </div>

          <div className="section--input-checkbox">
            <input type="checkbox"/>
            <p>Save this information for next time</p>
          </div>
        </div>
      </div>
    </section>
  );
}
