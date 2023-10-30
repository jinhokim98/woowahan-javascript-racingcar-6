import { MissionUtils } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/Message.js';
import ConsoleOutput from '../io/ConsoleOutput.js';
import { MIN_NUMBER_TO_MOVING_FORWARD } from '../constants/Enum.js';

class GameUtils {
  static generateRandomNumberFromZeroToNine() {
    return Number(MissionUtils.Random.pickNumberInRange(0, 9));
  }

  static printCarNameAndRandomNumber(carName, randomNumber) {
    ConsoleOutput.output(`${carName} : ${GameUtils.getDash(randomNumber)}`);
  }

  static getDash(randomNumber) {
    const totalDash = '';

    return totalDash.padEnd(randomNumber, '-');
  }

  static isMovingForward(randomNumber) {
    return randomNumber >= MIN_NUMBER_TO_MOVING_FORWARD;
  }

  static printFinalWinner(winner) {
    ConsoleOutput.output(`${MESSAGE.FINAL_WINNERS} : ${winner}`);
  }

  static printFinalWinners(winners) {
    ConsoleOutput.output(`${MESSAGE.FINAL_WINNERS} : ${winners.join(', ')}`);
  }
}

export default GameUtils;
