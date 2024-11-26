import styled from "styled-components";
import { useActiveCompany } from "../context/ActiveCompanyContext";

const Div = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    135deg,
    hsla(33, 100%, 53%, 1) 0%,
    hsla(58, 100%, 68%, 1) 100%
  );

  background: -moz-linear-gradient(
    135deg,
    hsla(33, 100%, 53%, 1) 0%,
    hsla(58, 100%, 68%, 1) 100%
  );

  background: -webkit-linear-gradient(
    135deg,
    hsla(33, 100%, 53%, 1) 0%,
    hsla(58, 100%, 68%, 1) 100%
  );

  display: flex;
  align-items: center;
  justify-content: center;
`;

function Psui() {
  const { activeCompany, setActiveCompany } = useActiveCompany();

  return (
    <>
      <Div
        className={`${
          activeCompany === "Paras Solutions" ? "z-10" : "z-0"
        } sevillana-regular text-6xl tracking-wider`}
        style={{
          clipPath: `${
            activeCompany === "Paras Solutions"
              ? "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
              : "polygon(100% 100%, 100% 0, 50% 50%, 0% 100%)"
          }`,
        }}
        onClick={() =>
          setActiveCompany(
            activeCompany === "Paras Solutions" ? "" : "Paras Solutions"
          )
        }
      >
        {activeCompany}
      </Div>
    </>
  );
}

export default Psui;
