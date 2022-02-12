import styled from "styled-components";

export const SelectBox = styled.div`
  width: 30%;
  margin: 5px auto;
  max-height: 200px;
  min-height: fit-content;
  overflow-x: auto;
  /* background-color: white; */
  border-radius: 10px;
  background: rgb(255 255 255 / 30%);
  padding: 0px 5px;
  z-index: 999;
  ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-track {
    padding: 10px;
  }
  ::-webkit-scrollbar-thumb {
    width: 100%;
    height: 20px;
    background: rgb(213 213 213 / 77%);
    border-radius: 100px;
    -webkit-box-shadow: outset 0 0 6px rgba(0, 0, 0, 0.3);
  }
`;

export const Option = styled.div`
  width: 100%;
  background: white;
  color: black;
  position: relative;
  width: 100%;
  cursor: pointer;
  /* height:30px; */
  margin: 5px 0px;
  border-radius: 5px;

  padding: 5px;
  .info_container {
    text-align: left;
    margin-left: 45px;
    .item_name {
      font-size: 13px;
      font-weight: 700;
    }
    .item_desc {
      font-size: 12px;
      color: #3053ff;
    }
  }

  :hover {
    background: #f4f4f4;
  }
  i {
    right: 10px;
    top: 50%;

    transform: translateY(-50%);
    position: absolute;
  }
  img {
    width: 30px;
    left: 10px;
    top: 50%;
    height: 30px;
    transform: translateY(-50%);
    position: absolute;
  }
`;

const placeholderTextColor = "white";

export const SearchInputWrapper = styled.div`
  position: relative;
  
 .input_box{
   width:30%;
   margin:auto;

   i{
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
position:absolute;
}
   }
 }
  input {
    border-radius: 50px;
    border: none;
    width: 100%;
    height: 35px;
    padding: 0px 20px;
    color: white;
    background: rgb(255 255 255 / 30%);
    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: ${placeholderTextColor};
      opacity: 1; /* Firefox */
      
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: ${placeholderTextColor};
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: ${placeholderTextColor};
    }
    :focus{
      outline:none;
    }
  }
`;
