import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: #000;

  margin-left: 50%;
  transform: translateX(-50%);
  width: 100rem;

  section {
    flex: 0 1 34rem;
    margin: 3rem 6rem;
    height: 28rem;
    border-bottom: 0.1rem #c0c0c0 solid;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      max-width: 15rem;
      max-height: 15rem;
    }

    div {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;

      margin-top: 1rem;
      margin-bottom: 0.5rem;
    }
  }
`
