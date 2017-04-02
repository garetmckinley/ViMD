import styled from 'styled-components';
import { Box } from 'hedron';
import { fadeIn } from '../../styles/animations';

export default styled(Box)`
  animation-delay: .25s;
  animation-timing-function: ease-out;
  animation: ${fadeIn} 2s normal forwards;
  max-height: calc(100vh - ${(props) => props.theme.header.height});
  opacity: 0;
  overflow: scroll;
  word-wrap: break-word;
`;
