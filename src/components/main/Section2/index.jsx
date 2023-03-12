import "./styles.css";
import photo1 from "../../../assets/photo1.png"
import photo2 from "../../../assets/photo2.png"
import { IconButton } from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";


export default function Section2() {
  const [count, setCount] = useState(0);


  return (
    <section className="section2">
          <div className="section2-card">
            <div className="section2-card--subcard">
              <img src={photo1} alt="photo1" />
              <div className="section2-card-subcard__info">
                <p className="section2-card-subcard__text">Vintage Backbag</p>
                <div className="section2-card--subcard--price">
                  <p>$54.99</p>
                  <span>$94.99</span>
                </div>
                <div className="section2-card--subcard--button">
                  <IconButton sx={{background:"#e0e0e0" , borderRadius: "4px", fontSize:21}}
                  onClick={() => {
                  setCount(count - 1);
                  }}>
                    <RemoveIcon />
                  </IconButton>
                  <p>{count}</p>
                  <IconButton sx={{background:"#e0e0e0" , borderRadius: "4px", fontSize:21}}
                  onClick={() => {
                  setCount(count + 1);
                  }}>
                    <AddIcon />
                  </IconButton>
                </div>
              </div>
            </div>

            <div className="section2-card--subcard">
              <img src={photo2} alt="photo2" />
              <div className="section2-card-subcard__info">
                <p className="section2-card-subcard__text">Levi Shoes</p>
                <div className="section2-card--subcard--price">
                  <p>$74.99</p>
                  <span>$124.99</span>
                </div>
                <div className="section2-card--subcard--button">
                  <IconButton sx={{background:"#e0e0e0" , borderRadius: "4px", fontSize:21}}
                  onClick={() => {
                  setCount(count - 1);
                  }}>
                    <RemoveIcon />
                  </IconButton>
                  <p>{count}</p>
                  <IconButton sx={{background:"#e0e0e0" , borderRadius: "4px", fontSize:21}}
                  onClick={() => {
                  setCount(count + 1);
                  }}>
                    <AddIcon />
                  </IconButton>
                </div>
              </div>
            </div>

            <div className="section2-card--line"></div>
            <div className="section2-card--shippingtotal">
              <h4>Shipping</h4>
              <p>$19</p>
            </div>
            <div className="section2-card--line"></div>
            <div className="section2-card--shippingtotal">
              <h4>Total</h4>
              <p>$148.98</p>
            </div>
          </div>
    </section>
  );
}
