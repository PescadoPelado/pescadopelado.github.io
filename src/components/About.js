import { NavigationBar } from "./NavigationBar";
import { SideBar } from "./SideBar";
import Spline from "@splinetool/react-spline";

export default function About() {
  return (
    <>
      <NavigationBar />

      <main>
        <div className="row center">
          <SideBar />

          <div className="col-sm-12 col-md-9 sections-container">
            <div className="container section">
              <h3>Life</h3>
              <p>
                My name is Alex Antoine Bussing Hudon. I was born in{" "}
                <a href="https://goo.gl/maps/f1SLXViS3pGXvUfV8">Costa Rica</a>,
                but then moved to Canada at the age of six and have been living
                in Montreal ever since. I have travelled a lot throughout the
                years and I now speak 4 languages: english, french, spanish and
                italian.
              </p>
            </div>
            <div className="justify-content-center align-items-center between-sections">
              {/* <object type="image/svg+xml" data="Icon.svg"></object> */}
              <Spline scene="https://prod.spline.design/yhm5koIH1Z8kq-dP/scene.splinecode" />
            </div>

            <div className="container section">
              <h3>Work</h3>
              <ul>
                <li>
                  Software Engineer internship at{" "}
                  <a href="https://www.nuecho.com">Nu Echo</a>, 2022. During my
                  time there I had the opportunity to make use of{" "}
                  <a href="https://cloud.google.com/speech-to-text?hl=en">
                    Google-STT
                  </a>{" "}
                  and{" "}
                  <a href="https://github.com/snakers4/silero-vad">
                    Silero VAD
                  </a>{" "}
                  to make benchmarks on comparing both products. I did that
                  using mostly streaming .wav files to both services using
                  Typescript for Google-STT and I developped a gRPC server to
                  link Typescript and Python for the use of Silero VAD.
                </li>
                <li>
                  Fullstack developper at{" "}
                  <a href="https://nomie.ca/en/home/">Nomie</a>, a small startup
                  that helps teachers and students have a more personal
                  relationship to make learning more fun and enjoyable, ongoing.
                  I have helped setup the backend and frontend parts of the
                  website, using React as the main framework.
                </li>
              </ul>
            </div>

            <div className="justify-content-center align-items-center between-sections">
              {/* <object type="image/svg+xml" data="Icon.svg"></object> */}
              <Spline scene="https://prod.spline.design/QP0sz0FXXDmaVE6V/scene.splinecode" />
            </div>

            <div className="container section">
              <h3>Studies</h3>
              <ul>
                <li>
                  Bachelors in Mathematics and Computer Science at{" "}
                  <a href="https://www.umontreal.ca/en/">
                    University of Montreal
                  </a>{" "}
                  from 2019-2022
                </li>
                <li>
                  Masters in Mathematical and Computational Finance at{" "}
                  <a href="https://www.umontreal.ca/en/">
                    University of Montreal
                  </a>
                  , 2022.
                </li>
              </ul>
            </div>
            <div className="justify-content-center align-items-center between-sections">
              {/* <object type="image/svg+xml" data="Icon.svg"></object> */}
              <Spline scene="https://prod.spline.design/yGSU8cYk5CcW6yvr/scene.splinecode" />
            </div>
            {/* <div className="container section">
              <h3>Interests</h3>

              <p>I am mostly</p>
            </div> */}
          </div>
        </div>
      </main>
    </>
  );
}
