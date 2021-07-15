import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'

import PlayerName from './src/components/PlayerName'; 
import BoardGame from './src/objects/BoardGame';

const $root = document.querySelector("#root");
const $htmlPlayerName = PlayerName();
const $htmlBoardGame = BoardGame(6);

$root.insertAdjacentHTML("beforeend", $htmlPlayerName + $htmlBoardGame);
