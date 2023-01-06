import Spline from "@splinetool/react-spline";

export function SideBar() {
  return (
    <>
      <aside className="col-sm-12 col-md-3 bd-sidebar">
        <div className="justify-content-center align-items-center side-bar-image">
          {/* <object type="image/svg+xml" data="Icon.svg"></object> */}
          <Spline scene="https://prod.spline.design/gmkW6b5uKIt0WtQQ/scene.splinecode" />
        </div>
        <div className="container">
          <h3>Alex Bussing</h3>
          <div className="me-short-description">
            <p className=""></p>
          </div>
        </div>
        <div className="socials-location"></div>{" "}
      </aside>
    </>
  );
}
