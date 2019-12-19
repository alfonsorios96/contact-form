import { css } from 'lit-element';

export default css`
:host {
  display: inline-block;
  box-sizing: border-box; }

:host([hidden]), [hidden] {
  display: none !important; }

*, *:before, *:after {
  box-sizing: inherit;
  font-family: inherit; }

.container {
  display: flex;
  flex-wrap: wrap; }

.skills {
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 200px;
  overflow-y: scroll; }
`;
