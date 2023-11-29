import { useState, useRef } from "react";
import "./App.css";
import {
  Environment,
  Sparkles,
  ScrollControls,
  Scroll,
  PositionalAudio,
  Float,
} from "@react-three/drei";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import Butterfly from "./models/Butterfly"
import { EffectComposer, DepthOfField, Bloom, Vignette} from '@react-three/postprocessing'

function App() {
  return (
    <>
      <color attach="background" args={["#000"]} />
      <ambientLight intensity={0.5} />
      <Environment preset="warehouse" />

      <EffectComposer>
        <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={5} height={480} />
        <Bloom intensity={2} luminanceThreshold={0.1} luminanceSmoothing={0.9} height={1000} />
        <Vignette eskil={false} offset={.1} darkness={1.5} />
      </EffectComposer> 

      <ScrollControls pages={6} damping={0.25}>
        <Scroll >
          <Float
          speed={1}
          rotationIntensity={2} 
          floatIntensity={0.2} 
          floatingRange={[1, 1]}  
          >
          <Butterfly rotation-x={Math.PI * 0.05} scale={1} position={[0, -2.5, 0]} />
          
          
          </Float>
          
         
          
        <Sparkles noise={0} count={500} speed={0.01} size={0.6} color={"#FFD2BE"} opacity={10} scale={[20,100,20]}></Sparkles>
        <Sparkles noise={0} count={50} speed={0.01} size={10} color={"#FFF"} opacity={2} scale={[30,100,10]} ></Sparkles>
          
        </Scroll>
        <Scroll html style={{ width: "100%" }}>
          <Container style={{ position: "relative" }}>
            <Row  
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0px 30px 0px",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px", color: "#fff" }}>
                    Life Can be a Struggle
                  </h1>
                </div>
              </Col>
            </Row>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0px 30px 0px",
                top: "100vh",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px", color: "#fff" }}>
                    Sometimes you can feel
                  </h1>
                </div>
              </Col>
            </Row>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0px 30px 0px",
                top: "200vh",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px", color: "#fff" }}>Lost</h1>
                  <h1 style={{ marginBottom: "0px", color: "#fff" }}>
                    Overwhelmed
                  </h1>
                  <h1 style={{ marginBottom: "0px", color: "#fff" }}>
                    Empty inside
                  </h1>
                </div>
              </Col>
            </Row>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0px 30px 0px",
                top: "300vh",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px", color: "#fff" }}>
                    Drifting through life <br />
                    With no help or guidance
                  </h1>
                </div>
              </Col>
            </Row>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0px 30px 0px",
                top: "400vh",
              }}
            >
              <Col xs={8}>
                <div>
                  <h1 style={{ marginBottom: "0px", color: "#fff" }}>
                    But there is hope...
                    <br /> and people who can help
                  </h1>
                </div>
              </Col>
            </Row>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0px 30px 0px",
                top: "500vh",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px", color: "#fff" }}>
                    It's time to get
                    <br /> the support you need
                  </h1>
                  <h2
                    style={{
                      marginBottom: "30px",
                      marginTop: "-20px",
                      color: "#fff",
                    }}
                  >
                    To get your life back
                  </h2>
                  <Button variant="outline-light" size="lg">
                    Get help now
                  </Button>{" "}
                </div>
              </Col>
            </Row>
          </Container>
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default App;





