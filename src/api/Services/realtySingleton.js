import realtyRepository from "../Repository/realtyRepository.js";

class RealtySingleton {
  constructor() {
    this.realties = [];
  }

  loadRealties = async () => {
    this.realties = await realtyRepository.findAllRealties();
  };
}

const realtySingleton = new RealtySingleton();
export default realtySingleton;
