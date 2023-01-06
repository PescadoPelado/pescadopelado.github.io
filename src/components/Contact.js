import { NavigationBar } from "./NavigationBar";
import Spline from "@splinetool/react-spline";

export default function Contact() {
  return (
    <>
      <NavigationBar />
      <div className="row">
        <div className="col-12 justify-content-center align-items-center side-bar-image">
          <Spline scene="https://prod.spline.design/gmkW6b5uKIt0WtQQ/scene.splinecode" />
        </div>
        <div className="col-12">
          <p>alexbussing00@gmail.com</p>
        </div>
      </div>
    </>
  );
}
