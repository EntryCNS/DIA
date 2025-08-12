import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { Button } from "../../components/common/Button";
import { Header } from "../../components/common/Header";
import { Footer } from "../../components/common/Footer";

const ScorePage = () => {
 const navigate = useNavigate();
 const [scores, setScores] = useState({
   korean: "0",
   english: "0",
   math: "0",
   society: "0",
   science: "0",
   elective: "0",
 });

  const handleChange = (subject: string, value: string) => {
    if (/^\d*$/.test(value)) {
      setScores((prev) => ({ ...prev, [subject]: value }));
    }
  };

 const handleNext = () => {
   navigate('/score', {
     state: { scores, studentType: "gedStu"}
   });
 };

 return (
   <>
     <Header />
     <S.Body>
       <S.Wrap>
         <S.Title>성적일람표를 작성해 주세요.</S.Title>
         <S.Contents>
           <S.ScoreContainer>
             <S.TableWrapper>
               <S.Table>
                 <thead>
                   <tr>
                     <th>과목</th>
                     <th>국어</th>
                     <th>영어</th>
                     <th>수학</th>
                     <th>사회</th>
                     <th>과학</th>
                     <th>선택과목</th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr>
                     <td className="check-title">점수</td>
                     <td>
                       <S.ScoreInput
                         type="number"
                         value={scores.korean}
                         onChange={(e) => handleChange("korean", e.target.value)}
                       />
                     </td>
                     <td>
                       <S.ScoreInput
                         type="number"
                         value={scores.english}
                         onChange={(e) => handleChange("english", e.target.value)}
                       />
                     </td>
                     <td>
                       <S.ScoreInput
                         type="number"
                         value={scores.math}
                         onChange={(e) => handleChange("math", e.target.value)}
                       />
                     </td>
                     <td>
                       <S.ScoreInput
                         type="number"
                         value={scores.society}
                         onChange={(e) => handleChange("math", e.target.value)}
                       />
                     </td>
                     <td>
                       <S.ScoreInput
                         type="number"
                         value={scores.science}
                         onChange={(e) => handleChange("science", e.target.value)}
                       />
                     </td>
                     <td>
                       <S.ScoreInput
                         type="number"
                         value={scores.elective}
                         onChange={(e) => handleChange("elective", e.target.value)}
                       />
                     </td>
                   </tr>
                 </tbody>
               </S.Table>
             </S.TableWrapper>
           </S.ScoreContainer>

            <S.ButtonsWrap>
              <Button text="다음" variant="primary" onClick={handleNext} />
              <Button text="이전" variant="gray" onClick={handlePrev}/>
            </S.ButtonsWrap>
          </S.Contents>
        </S.Wrap>
      </S.Body>
      <Footer />
    </>
  );
};

export default ScorePage;
