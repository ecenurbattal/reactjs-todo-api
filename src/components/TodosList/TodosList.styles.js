import styled from 'styled-components';

export const Wrapper = styled.div`
    position:relative;
    padding: 20px 0 0 90px;
    display:flex;
    flex:1;
    flex-direction:column;
`

export const ListItem = styled.div`
    display:flex
    justify-content:space-between;

    width:90%;
    border: 1px solid #d3d3d3;
    padding:10px;
    box-shadow: 0 0 5px 5px #d3d3d3;
    margin:5px;
    
    &:hover {
        border: 1px solid #a00b42;
    }

`

export const Text = styled.div`
    font-size:20px;
    font-weight:500;
    color:white;
    text-decoration: ${(props) => (props.isDone ? 'line-through' : 'none')};
`

export const ButtonBox = styled.div`
    display:flex;
    justify-content:flex-end;
    height:30px;
`