import styled from '@emotion/styled';
export const BtnWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 15px;
`;
export const Btn = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 4px;
  font-size: 30px;
  color: #fff;
  background: #1e90ff;
  cursor: pointer;
  border: 2px solid #000080;
  :active {
    background-color: #3e8e41;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;
