import type { AddPointState } from "../../../types/write/addPoint/addPoint.type";
import Radio from "../../common/Radio";
import * as S from "./style";

interface WriteAddPointProps {
  addPoint: AddPointState;
  setAddPoint: React.Dispatch<React.SetStateAction<AddPointState>>;
}

const WriteAddPoint = ({ addPoint, setAddPoint }: WriteAddPointProps) => {
  // 숫자만 입력
  const handleNumberChange = (field: keyof AddPointState, value: string) => {
    if (/^\d*$/.test(value)) {
      setAddPoint((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  // blur 시 빈 값이면 0
  const handleNumberBlur = (field: keyof AddPointState) => {
    setAddPoint((prev) => ({
      ...prev,
      [field]: prev[field] === "" ? "0" : prev[field],
    }));
  };

  // 라디오 클릭 시 상태 토글
  const handleLeaderShipChange = (field: keyof AddPointState["leaderShip"]) => {
    setAddPoint((prev) => ({
      ...prev,
      leaderShip: {
        ...prev.leaderShip,
        [field]: !prev.leaderShip[field],
      },
    }));
  };

  return (
    <S.Table>
      <thead>
        <tr>
          <th rowSpan={2}>가산점</th>
          <th rowSpan={2} style={{ width: "212px" }}>
            설명
          </th>
          <th colSpan={2} className="small">
            1학년
          </th>
          <th colSpan={2} className="small">
            2학년
          </th>
          <th colSpan={2} className="small">
            3학년
          </th>
        </tr>
        <tr>
          <th className="gray small">1학기</th>
          <th className="gray small">2학기</th>
          <th className="gray small">1학기</th>
          <th className="gray small">2학기</th>
          <th className="gray small">1학기</th>
          <th className="gray small">2학기</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="check-title">리더쉽</td>
          <td>
            최소 한 학기 이상 학생회 임원 <br />( 전교 학생회장, 전교
            학생부회장, 학급반장 )
          </td>
          <td>
            <Radio
              data={addPoint.leaderShip.leader11}
              handleDataChange={() => handleLeaderShipChange("leader11")}
            />
          </td>
          <td>
            <Radio
              data={addPoint.leaderShip.leader12}
              handleDataChange={() => handleLeaderShipChange("leader12")}
            />
          </td>
          <td>
            <Radio
              data={addPoint.leaderShip.leader21}
              handleDataChange={() => handleLeaderShipChange("leader21")}
            />
          </td>
          <td>
            <Radio
              data={addPoint.leaderShip.leader22}
              handleDataChange={() => handleLeaderShipChange("leader22")}
            />
          </td>
          <td>
            <Radio
              data={addPoint.leaderShip.leader31}
              handleDataChange={() => handleLeaderShipChange("leader31")}
            />
          </td>
          <td>
            <Radio
              data={addPoint.leaderShip.leader32}
              handleDataChange={() => handleLeaderShipChange("leader32")}
            />
          </td>
        </tr>
        <tr>
          <td className="check-title">모범상</td>
          <td>
            재학 중 교내 모범상을 수상 <br />( 모범, 선행, 효행, 공로, 노력 등 )
          </td>
          <td colSpan={6}>
            <input
              type="text"
              value={addPoint.modelAward}
              onChange={(e) => handleNumberChange("modelAward", e.target.value)}
              onBlur={() => handleNumberBlur("modelAward")}
            />
          </td>
        </tr>
      </tbody>
    </S.Table>
  );
};

export default WriteAddPoint;
