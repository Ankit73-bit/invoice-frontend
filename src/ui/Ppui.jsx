import styled from "styled-components";

const Div = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background: linear-gradient(
    135deg,
    hsla(217, 100%, 50%, 1) 0%,
    hsla(186, 100%, 69%, 1) 100%
  );

  background: -moz-linear-gradient(
    135deg,
    hsla(217, 100%, 50%, 1) 0%,
    hsla(186, 100%, 69%, 1) 100%
  );

  background: -webkit-linear-gradient(
    135deg,
    hsla(217, 100%, 50%, 1) 0%,
    hsla(186, 100%, 69%, 1) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Ppui({ activeCompany, setActiveCompany }) {
  return (
    <>
      <Div
        className={`${
          activeCompany === "Paras Print" ? "z-10" : "z-0"
        } sevillana-regular text-6xl tracking-wider`}
        style={{
          clipPath: `${
            activeCompany === "Paras Print"
              ? "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
              : "polygon(0 0, 100% 0, 50% 50%, 0% 100%)"
          }`,
        }}
        onClick={() =>
          setActiveCompany(activeCompany === "Paras Print" ? "" : "Paras Print")
        }
      >
        {activeCompany}
      </Div>
    </>
  );
}

export default Ppui;
