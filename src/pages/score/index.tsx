import * as S from "./style";
import { Button } from "../../components/common/Button";

const ScorePage = () => {
  return (
    <S.Body>
      <S.Wrap>
        <S.Title>점수를 확인해 주세요</S.Title>
        <S.Contents>
          <S.ScoreContainer>
            <S.TableWrapper>
              <S.Table>
                <thead>
                  <tr>
                    <th>전형구분</th>
                    <th>교과성적</th>
                    <th>출결상황</th>
                    <th>봉사활동</th>
                    <th>가산점</th>
                    <th>총점</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="check-title">점수확인</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </S.Table>
            </S.TableWrapper>
          </S.ScoreContainer>

          <S.ButtonsWrap>
            <Button text="홈페이지로 이동하기" href="" variant="primary" />
            <Button text="이전" variant="gray" />
          </S.ButtonsWrap>
        </S.Contents>
      </S.Wrap>
    </S.Body>
  );
};

export default ScorePage;
